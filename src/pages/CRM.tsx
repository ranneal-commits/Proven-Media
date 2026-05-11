import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Users, CheckSquare, DollarSign, AlertCircle, RefreshCw } from "lucide-react";

export default function CRM() {
  const [activeTab, setActiveTab] = useState<"leads" | "tasks" | "transactions">("leads");
  
  const [data, setData] = useState({
    leads: [],
    tasks: [],
    transactions: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (endpoint: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Proxy through our backend to safely use the LOFTY_API_KEY
      const response = await fetch(`/api/lofty/${endpoint}`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || `Failed to fetch ${endpoint}. Message: ${result.details}`);
      }

      // Handle the data structure returned by API. Lofty might return `{ data: [...] }`, `[...]`, `{ results: [...] }` or endpoint-specific arrays like `{ leads: [...] }`.
      const normalizedData = Array.isArray(result) 
        ? result 
        : Array.isArray(result?.data) 
          ? result.data 
          : Array.isArray(result?.results) 
            ? result.results 
            : Array.isArray(result?.[endpoint])
              ? result[endpoint]
              : [];

      setData(prev => ({
        ...prev,
        [endpoint]: normalizedData
      }));
      
      if (result.isMock) {
        setError(result.warnings?.[0] || 'Displaying mock data.');
      }
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  return (
    <div className="w-full bg-primary text-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold tracking-tight">Lofty CRM System</h1>
              <span className="px-3 py-1 bg-accent1/20 text-accent1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent1 mr-2 animate-pulse"></span>
                Connected
              </span>
            </div>
            <p className="text-neutral-400 max-w-2xl">
              Live sync from your Lofty workspace. View your active leads, operational tasks, and current transactions.
            </p>
          </motion.div>
          <button 
            onClick={() => fetchData(activeTab)}
            disabled={isLoading}
            className="flex items-center gap-2 bg-primary-hover border border-neutral-700 px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
          >
            <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
            Sync Now
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-primary-hover p-1 rounded-2xl mb-8 overflow-x-auto w-full max-w-xl">
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center justify-center gap-2 flex-1 py-3 px-6 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "leads" 
                ? "bg-accent1 text-primary shadow-sm" 
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <Users size={18} /> Leads
          </button>
          <button
            onClick={() => setActiveTab("tasks")}
            className={`flex items-center justify-center gap-2 flex-1 py-3 px-6 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "tasks" 
                ? "bg-accent1 text-primary shadow-sm" 
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <CheckSquare size={18} /> Tasks
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`flex items-center justify-center gap-2 flex-1 py-3 px-6 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === "transactions" 
                ? "bg-accent1 text-primary shadow-sm" 
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <DollarSign size={18} /> Transactions
          </button>
        </div>

        {/* Content Area */}
        {error && (
            <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-4 rounded-xl mb-6 flex items-start gap-4">
               <AlertCircle className="shrink-0 mt-0.5" size={20} />
               <div className="text-sm">
                  <p className="font-bold mb-1">Notice</p>
                  <p>{error}</p>
               </div>
            </div>
        )}
        <div className="bg-primary-hover border border-neutral-800 rounded-3xl min-h-[500px] overflow-hidden">
          {isLoading && data[activeTab].length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px] gap-4">
              <RefreshCw size={32} className="animate-spin text-accent1" />
              <p className="text-neutral-400">Fetching your {activeTab} data...</p>
            </div>
          ) : data[activeTab].length === 0 && !error ? (
            <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="w-16 h-16 bg-neutral-800 text-neutral-400 rounded-full flex items-center justify-center mb-6">
                {activeTab === "leads" ? <Users size={32} /> : activeTab === "tasks" ? <CheckSquare size={32} /> : <DollarSign size={32} />}
              </div>
              <h3 className="text-xl font-bold mb-2">No {activeTab} found</h3>
              <p className="text-neutral-400 max-w-md">
                We successfully connected to your Lofty API, but no {activeTab} were returned for your account. Add some data in Lofty and click "Sync Now".
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/50">
                    {/* Select specific useful columns if available, else dynamic */}
                    {(() => {
                      const item = data[activeTab][0] || {};
                      const preferredKeys = ['firstName', 'lastName', 'emails', 'phones', 'stage', 'business_name', 'name', 'email', 'phone'];
                      let keys = Object.keys(item).filter(k => preferredKeys.includes(k));
                      if (keys.length === 0) {
                        keys = Object.keys(item).filter(key => typeof item[key] !== 'object').slice(0, 5);
                      }
                      
                      return keys.map((key) => (
                        <th key={key} className="p-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
                          {key.replace(/_/g, ' ')}
                        </th>
                      ));
                    })()}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {data[activeTab].map((item: any, i: number) => {
                    const preferredKeys = ['firstName', 'lastName', 'emails', 'phones', 'stage', 'business_name', 'name', 'email', 'phone'];
                    let keys = Object.keys(item).filter(k => preferredKeys.includes(k));
                    if (keys.length === 0) {
                      keys = Object.keys(item).filter(key => typeof item[key] !== 'object').slice(0, 5);
                    }

                    return (
                      <tr key={i} className="hover:bg-neutral-800/50 transition-colors">
                        {keys.map((key, j) => {
                          const val = Array.isArray(item[key]) ? item[key].join(', ') : item[key];
                          return (
                            <td key={j} className="p-4 text-sm text-neutral-300">
                              {String(val || '').substring(0, 50)}
                              {String(val || '').length > 50 ? '...' : ''}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
