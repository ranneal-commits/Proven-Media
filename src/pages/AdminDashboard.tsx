import { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  business_name: string;
  service: string;
  budget_range: string;
  timeline: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data);
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary-hover text-neutral-400 flex-shrink-0">
        <div className="p-6 border-b border-neutral-700">
          <h2 className="text-white font-bold tracking-widest text-sm">
            PROVEN ADMIN
          </h2>
        </div>
        <nav className="p-4 space-y-2">
          {[
            { id: "leads", icon: <Users size={20} />, label: "Leads Pipeline" },
            {
              id: "appointments",
              icon: <Calendar size={20} />,
              label: "Appointments",
            },
            {
              id: "chatlogs",
              icon: <MessageSquare size={20} />,
              label: "AI Chat Logs",
            },
            {
              id: "analytics",
              icon: <BarChart3 size={20} />,
              label: "Analytics",
            },
            { id: "settings", icon: <Settings size={20} />, label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeTab === item.id
                  ? "bg-accent1 text-primary"
                  : "hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight capitalize">
            {activeTab.replace("-", " ")}
          </h1>
          <button className="bg-accent1 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent1-hover transition-colors">
            Export Data
          </button>
        </div>

        {activeTab === "leads" && (
          <div className="bg-primary-hover rounded-2xl shadow-sm border border-neutral-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-primary border-b border-neutral-700 text-neutral-300">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Name / Business</th>
                    <th className="px-6 py-4 font-semibold">Contact</th>
                    <th className="px-6 py-4 font-semibold">
                      Service Interest
                    </th>
                    <th className="px-6 py-4 font-semibold">
                      Budget & Timeline
                    </th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-8 text-center text-neutral-400"
                      >
                        Loading leads...
                      </td>
                    </tr>
                  ) : leads.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-8 text-center text-neutral-400"
                      >
                        No leads found.
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-primary transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-white">
                            {lead.name}
                          </div>
                          <div className="text-neutral-400">
                            {lead.business_name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-white">{lead.email}</div>
                          <div className="text-neutral-400">{lead.phone}</div>
                        </td>
                        <td className="px-6 py-4 text-neutral-300">
                          {lead.service}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-white">
                            {lead.budget_range}
                          </div>
                          <div className="text-neutral-400">{lead.timeline}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent2/20 text-accent2 capitalize">
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-neutral-400">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab !== "leads" && (
          <div className="bg-primary-hover rounded-2xl shadow-sm border border-neutral-700 p-8 text-center text-neutral-400">
            <p>This section is under construction.</p>
          </div>
        )}
      </main>
    </div>
  );
}
