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

  if (!apiKey) {
    return res.status(401).json({ error: "Lofty API Key is missing. Please set it in the environment variables." });
  }

  try {
    // First try "token" header which is used by Lofty API Keys
    let response = await fetch(`${loftyApiBase}/${endpoint}`, {
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

    if (!response.ok) {
      const errorText = await response.text();
      console.warn(`Lofty API error on /${endpoint}:`, response.status, errorText);
      
      if (response.status === 401) {
        // Provide mock data if authentication fails so the user can still see and test the UI
        return res.status(200).json({
          isMock: true,
          warnings: ["Authentication failed (401). Displaying mock data for testing."],
          results: getMockLoftyData(endpoint)
        });
      }

      return res.status(response.status).json({
        error: `Failed to fetch ${endpoint} from Lofty`,
        status: response.status,
        details: errorText,
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(`Error proxying Lofty API (${endpoint}):`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Leads API
router.post("/leads", async (req, res) => {
  const db = getDb();
  const { name, email, phone, business_name, service, budget_range, timeline } = req.body;
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
        note: `Business: ${business_name || 'N/A'}, Service: ${service || 'N/A'}, Budget: ${budget_range || 'N/A'}, Timeline: ${timeline || 'N/A'}`
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
