import { Router } from "express";
import { getDb } from "../db/index.ts";
import { v4 as uuidv4 } from "uuid";

const router = Router();

// Helper to generate mock data for Lofty endpoints when unauthorized
function getMockLoftyData(endpoint: string) {
  if (endpoint.includes("leads")) {
    return [
      { id: "L-101", name: "Alice Johnson", email: "alice.j@example.com", phone: "(555) 123-4567", status: "New", score: 85, source: "Website" },
      { id: "L-102", name: "Bob Smith", email: "bob.smith@example.com", phone: "(555) 987-6543", status: "Contacted", score: 62, source: "Referral" },
      { id: "L-103", name: "Carol White", email: "cwhite@example.com", phone: "(555) 555-5555", status: "Engaged", score: 91, source: "Facebook Docs" },
    ];
  }
  if (endpoint.includes("tasks")) {
    return [
      { id: "T-01", title: "Follow up with Alice", due_date: "2026-05-02T10:00:00Z", priority: "High", status: "Pending", assigned_to: "Erik Peterson" },
      { id: "T-02", title: "Review contract for Bobby", due_date: "2026-05-05T14:30:00Z", priority: "Medium", status: "In Progress", assigned_to: "Sarah Jenkins" },
      { id: "T-03", title: "Send welcome email to Carol", due_date: "2026-05-01T09:00:00Z", priority: "Low", status: "Completed", assigned_to: "System" },
    ];
  }
  if (endpoint.includes("transactions")) {
    return [
      { id: "TX-901", property_address: "123 Maple St", type: "Buyer", price: "$450,000", stage: "Under Contract", close_date: "2026-06-15" },
      { id: "TX-902", property_address: "882 Oaktree Ln", type: "Seller", price: "$725,000", stage: "Active Listing", close_date: "TBD" },
    ];
  }
  return [];
}

// Lofty CRM Integration API
const loftyApiBase = "https://api.lofty.com/v1.0";

router.get("/lofty/:endpoint", async (req, res) => {
  const { endpoint } = req.params;
  const apiKey = process.env.LOFTY_API_KEY;

  let response: Response | null = null;
  let didFetchFail = false;

  try {
    if (apiKey) {
      // First try "token" header which is used by Lofty API Keys
      response = await fetch(`${loftyApiBase}/${endpoint}`, {
        headers: {
          "Authorization": `token ${apiKey}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (!response.ok && (response.status === 401 || response.status === 400)) {
        // Fallback to Bearer scheme which is used for OAuth 2.0 tokens
        response = await fetch(`${loftyApiBase}/${endpoint}`, {
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        });
      }
    } else {
      didFetchFail = true;
    }

    if (!apiKey || (response && !response.ok)) {
      const errorText = response ? await response.text() : "";
      if (response && !response.ok) {
        console.warn(`Lofty API error on /${endpoint}:`, response.status, errorText);
      }
      
      if (!apiKey || (response && response.status === 401)) {
        // Provide mock data if authentication fails so the user can still see and test the UI
        let dbLeads: any[] = [];
        if (endpoint.includes("leads")) {
          try {
            const db = getDb();
            dbLeads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
          } catch (e) {
            console.error("Error fetching local leads for mock fallback", e);
          }
        }
        
        return res.status(200).json({
          isMock: true,
          warnings: ["Authentication failed (401). Displaying mock data for testing."],
          results: [...dbLeads, ...getMockLoftyData(endpoint)]
        });
      }

      return res.status(response.status).json({
        error: `Failed to fetch ${endpoint} from Lofty`,
        status: response.status,
        details: errorText,
      });
    }

    let resultsData: any = [];
    if (response && response.ok) {
      resultsData = await response.json();
    }

    if (endpoint.includes("leads") && apiKey && response && response.ok) {
      try {
        const db = getDb();
        const localLeads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
        // The API returns { _metadata: {}, leads: [...] } or an array
        let apiLeads = Array.isArray(resultsData) ? resultsData : (resultsData.leads || resultsData.data || resultsData.results || []);
        if (!Array.isArray(apiLeads)) apiLeads = [];

        // Simple deduplication based on email
        const getEmails = (item: any) => {
          if (item.emails && Array.isArray(item.emails)) return item.emails.map((e: any) => e.address || e);
          if (item.email) return [item.email];
          return [];
        };

        const apiEmails = new Set();
        apiLeads.forEach((l: any) => {
          getEmails(l).forEach((e: string) => apiEmails.add(e.toLowerCase()));
        });

        const uniqueLocalLeads = localLeads.filter((ll: any) => {
          if (!ll.email) return true;
          return !apiEmails.has(ll.email.toLowerCase());
        });

        const combined = [...uniqueLocalLeads, ...apiLeads];

        if (Array.isArray(resultsData)) {
          resultsData = combined;
        } else if (resultsData && Array.isArray(resultsData.leads)) {
          resultsData.leads = combined;
        } else if (resultsData && Array.isArray(resultsData.data)) {
          resultsData.data = combined;
        } else if (resultsData && Array.isArray(resultsData.results)) {
          resultsData.results = combined;
        } else {
          resultsData = combined;
        }
      } catch (e) {
        console.error("Error merging local leads into Lofty response:", e);
      }
    }

    res.json(resultsData);
  } catch (error) {
    console.error(`Error proxying Lofty API (${endpoint}):`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function buildTagsFromFormData(data: any): string[] {
  const tags: string[] = ["source:website-contact", "stage:inquiry"];

  // CTA Location
  tags.push(`cta:${data.cta_location || "direct"}`);

  // Tier
  if (data.tier === "basic") {
    tags.push("tier:basic", "intent:tier-interest");
  } else if (data.tier === "premium") {
    tags.push("tier:premium", "intent:tier-interest");
  } else if (data.tier === "elite") {
    tags.push("tier:elite", "intent:tier-interest");
  } else {
    tags.push("intent:browsing");
  }

  // Primary Service Interest
  const serviceMap: Record<string, string> = {
    "Social Media Management": "service:social-media",
    "Website Design & Development": "service:website",
    "SEO & Local Search": "service:seo-local",
    "Paid Advertising (Google / Meta)": "service:paid-ads",
    "Content & Brand Strategy": "service:content-brand",
    "Full Marketing Management": "service:full-management",
    "Not sure yet — let's talk": "service:unsure",
  };
  if (data.service && serviceMap[data.service]) {
    tags.push(serviceMap[data.service]);
  }

  // Monthly Budget Range
  const budgetMap: Record<string, string> = {
    "Under $1,000": "budget:under-1k",
    "$1,000 – $2,500": "budget:1k-2.5k",
    "$2,500 – $5,000": "budget:2.5k-5k",
    "$5,000 – $10,000": "budget:5k-10k",
    "$10,000+": "budget:10k-plus",
    "Not sure yet": "budget:unsure",
  };
  if (data.budget_range && budgetMap[data.budget_range]) {
    tags.push(budgetMap[data.budget_range]);
  }

  // Timeline
  const timelineMap: Record<string, string> = {
    "Immediately": "timeline:immediately",
    "Within 30 days": "timeline:30-days",
    "1–3 months out": "timeline:1-3-months",
    "Just exploring": "timeline:exploring",
  };
  if (data.timeline && timelineMap[data.timeline]) {
    tags.push(timelineMap[data.timeline]);
  }

  // Priority Tag
  const fastTimeline = data.timeline === "Immediately" || data.timeline === "Within 30 days";
  const within3Months = fastTimeline || data.timeline === "1–3 months out";
  const hasTier = data.tier === "basic" || data.tier === "premium" || data.tier === "elite";
  const highBudget = data.budget_range === "$5,000 – $10,000" || data.budget_range === "$10,000+";
  const mediumBudgetOrHigher = data.budget_range === "$2,500 – $5,000" || highBudget;

  let priority = "priority:cold";
  if (
    data.tier === "elite" ||
    (hasTier && fastTimeline) ||
    (highBudget && fastTimeline)
  ) {
    priority = "priority:hot";
  } else if (
    (mediumBudgetOrHigher && within3Months) ||
    (hasTier && data.timeline === "1–3 months out")
  ) {
    priority = "priority:warm";
  }
  tags.push(priority);

  return tags;
}

// Leads API
router.post("/leads", async (req, res) => {
  const db = getDb();
  const { name, email, phone, business_name, service, budget_range, timeline, cta_location, tier } = req.body;
  const id = uuidv4();

  try {
    const stmt = db.prepare(`
      INSERT INTO leads (id, name, email, phone, business_name, service, budget_range, timeline)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(id, name, email, phone, business_name, service, budget_range, timeline);

    // Sync to Lofty CRM if API key is present
    const apiKey = process.env.LOFTY_API_KEY;
    let loftySyncStatus = "Skipped - No API Key";
    
    if (apiKey) {
      const names = (name || "Unknown").split(" ");
      const firstName = names[0];
      const lastName = names.length > 1 ? names.slice(1).join(" ") : "Unknown";

      const loftyPayload = {
        firstName,
        lastName,
        emails: email ? [email] : [],
        phones: phone ? [phone] : [],
        note: `Business: ${business_name || 'N/A'}, Service: ${service || 'N/A'}, Budget: ${budget_range || 'N/A'}, Timeline: ${timeline || 'N/A'}, CTA: ${cta_location || 'N/A'}, Tier: ${tier || 'N/A'}`,
        tags: buildTagsFromFormData(req.body)
      };

      try {
        let response = await fetch(`${loftyApiBase}/leads`, {
          method: "POST",
          headers: {
            "Authorization": `token ${apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loftyPayload)
        });

        if (!response.ok && (response.status === 401 || response.status === 400)) {
          // Fallback to Bearer
          response = await fetch(`${loftyApiBase}/leads`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(loftyPayload)
          });
        }
        
        if (response.ok) {
          loftySyncStatus = "Success";
          console.log("Successfully synced lead to Lofty", await response.json());
        } else {
          loftySyncStatus = `Failed: ${response.status}`;
          console.error("Failed to sync lead to Lofty:", response.status, await response.text());
        }
      } catch (e) {
        loftySyncStatus = "Error connecting";
        console.error("Failed to sync lead to Lofty (Error):", e);
      }
    } else {
      console.warn("LOFTY_API_KEY is not set in environment. Skipping Lofty sync.");
    }

    res.status(201).json({ id, message: "Lead created successfully", loftySyncStatus });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({ error: "Failed to create lead" });
  }
});

router.get("/leads", (req, res) => {
  const db = getDb();
  try {
    const leads = db
      .prepare("SELECT * FROM leads ORDER BY created_at DESC")
      .all();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

// Chatbot Logging API
router.post("/chat/log", (req, res) => {
  const { sessionId, userMessage, modelReply } = req.body;
  const db = getDb();

  try {
    // Log user message
    db.prepare(
      "INSERT INTO chat_logs (id, session_id, role, content) VALUES (?, ?, ?, ?)",
    ).run(uuidv4(), sessionId, "user", userMessage);

    // Log assistant message
    db.prepare(
      "INSERT INTO chat_logs (id, session_id, role, content) VALUES (?, ?, ?, ?)",
    ).run(uuidv4(), sessionId, "model", modelReply);

    res.json({ success: true });
  } catch (error) {
    console.error("Chat log error:", error);
    res.status(500).json({ error: "Failed to log chat" });
  }
});

export default router;
