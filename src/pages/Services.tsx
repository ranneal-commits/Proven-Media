import { useState } from "react";
import { motion } from "motion/react";
import { 
  Share2, Video, Target, LayoutTemplate, MessageSquare, 
  Mic, Filter, Database, LineChart, Play, X, ArrowRight 
} from "lucide-react";

const servicesData = [
  {
    id: "social",
    title: "Social Media Management",
    icon: <Share2 size={20} />,
    description: "We build organic engines that drive real attention and convert followers into pipeline.",
    examples: [
      { type: "metric", title: "B2B SaaS Client", metric: "+185%", subtext: "Engagement Rate Increase", image: "https://picsum.photos/seed/social1/600/400" },
      { type: "metric", title: "Real Estate Firm", metric: "5.2k", subtext: "New Followers in 90 Days", image: "https://picsum.photos/seed/social2/600/400" }
    ]
  },
  {
    id: "video",
    title: "Video Production",
    icon: <Video size={20} />,
    description: "High-converting short-form and long-form video assets that establish authority.",
    examples: [
      { type: "video", title: "Viral Short", videoId: "v1-f2YQxOIc", thumbnail: "https://img.youtube.com/vi/v1-f2YQxOIc/hqdefault.jpg" },
      { type: "video", title: "Brand Anthem", videoId: "M8el2RKB1DU", thumbnail: "https://img.youtube.com/vi/M8el2RKB1DU/hqdefault.jpg" },
      { type: "video", title: "Case Study", videoId: "OxeLco_80no", thumbnail: "https://img.youtube.com/vi/OxeLco_80no/hqdefault.jpg" }
    ]
  },
  {
    id: "ads",
    title: "Meta Ads Management",
    icon: <Target size={20} />,
    description: "Data-driven paid acquisition campaigns that scale your revenue predictably.",
    examples: [
      { type: "metric", title: "E-commerce Brand", metric: "3.2x", subtext: "Average ROAS", image: "https://picsum.photos/seed/ads1/600/400" },
      { type: "metric", title: "Lead Gen Campaign", metric: "$24", subtext: "Cost Per Qualified Lead", image: "https://picsum.photos/seed/ads2/600/400" }
    ]
  },
  {
    id: "landing",
    title: "AI Landing Pages",
    icon: <LayoutTemplate size={20} />,
    description: "High-speed, conversion-optimized landing pages personalized dynamically by AI.",
    examples: [
      { type: "metric", title: "Webinar Funnel", metric: "22%", subtext: "Opt-in Conversion Rate", image: "https://picsum.photos/seed/landing1/600/400" },
      { type: "metric", title: "Product Launch", metric: "1.8x", subtext: "Increase in Sales Velocity", image: "https://picsum.photos/seed/landing2/600/400" }
    ]
  },
  {
    id: "chatbot",
    title: "AI Chatbot Integration",
    icon: <MessageSquare size={20} />,
    description: "Intelligent conversational agents that qualify leads and book meetings 24/7.",
    examples: [
      { type: "metric", title: "Consulting Agency", metric: "65%", subtext: "Automated Lead Qualification", image: "https://picsum.photos/seed/chat1/600/400" },
      { type: "metric", title: "Support Desk", metric: "24hrs", subtext: "Saved Per Week", image: "https://picsum.photos/seed/chat2/600/400" }
    ]
  },
  {
    id: "voice",
    title: "AI Voice Agent Setup",
    icon: <Mic size={20} />,
    description: "Human-like voice AI that handles inbound calls and conduct outbound outreach.",
    examples: [
      { type: "metric", title: "Outbound Sales", metric: "350+", subtext: "Calls Made Daily", image: "https://picsum.photos/seed/voice1/600/400" },
      { type: "metric", title: "Inbound Routing", metric: "< 3s", subtext: "Average Response Time", image: "https://picsum.photos/seed/voice2/600/400" }
    ]
  },
  {
    id: "funnel",
    title: "Funnel Builds",
    icon: <Filter size={20} />,
    description: "End-to-end customer journeys engineered to maximize lifetime value.",
    examples: [
      { type: "metric", title: "High-Ticket Coaching", metric: "$28k", subtext: "Revenue in First 30 Days", image: "https://picsum.photos/seed/funnel1/600/400" },
      { type: "metric", title: "SaaS Onboarding", metric: "45%", subtext: "Reduction in Churn", image: "https://picsum.photos/seed/funnel2/600/400" }
    ]
  },
  {
    id: "crm",
    title: "CRM Integration",
    icon: <Database size={20} />,
    description: "Seamless data flow between your marketing assets and sales pipelines.",
    examples: [
      { type: "metric", title: "Sales Team", metric: "98%", subtext: "Data Accuracy", image: "https://picsum.photos/seed/crm1/600/400" },
      { type: "metric", title: "Operations", metric: "12hrs", subtext: "Manual Entry Saved Weekly", image: "https://picsum.photos/seed/crm2/600/400" }
    ]
  },
  {
    id: "kpi",
    title: "KPI Dashboards",
    icon: <LineChart size={20} />,
    description: "Real-time visibility into your most important growth metrics.",
    examples: [
      { type: "metric", title: "Executive View", metric: "Automated", subtext: "Data Synchronization", image: "https://picsum.photos/seed/kpi1/600/400" },
      { type: "metric", title: "Marketing ROI", metric: "Full", subtext: "Attribution Tracking", image: "https://picsum.photos/seed/kpi2/600/400" }
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <div className="py-24 bg-primary text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Services & <span className="text-accent1">Results</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Comprehensive media and automation infrastructure for modern B2B brands. 
            Select a service below to see real-world examples and impact.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                  activeTab === service.id 
                    ? "bg-accent1 text-primary font-bold shadow-[0_0_20px_rgba(50,207,254,0.2)]" 
                    : "bg-primary-hover text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800"
                }`}
              >
                <div className={`${activeTab === service.id ? "text-primary" : "text-accent1"}`}>
                  {service.icon}
                </div>
                <span className="text-lg">{service.title}</span>
                {activeTab === service.id && (
                  <ArrowRight size={18} className="ml-auto" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-primary-hover border border-neutral-800 rounded-3xl p-8 lg:p-12 min-h-[600px]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary rounded-2xl text-accent1 border border-neutral-700">
                  {activeService.icon}
                </div>
                <h2 className="text-3xl font-bold">{activeService.title}</h2>
              </div>
              
              <p className="text-xl text-neutral-400 mb-12">
                {activeService.description}
              </p>

              <h3 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-6">
                Featured Examples & Results
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeService.examples.map((example, idx) => (
                  <div key={idx} className="group relative rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 aspect-video">
                    
                    {example.type === "video" ? (
                      // Video Example
                      <div 
                        className="w-full h-full cursor-pointer relative"
                        onClick={() => setActiveVideo(example.videoId)}
                      >
                        <img src={example.thumbnail} alt={example.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-accent1 group-hover:text-primary transition-all duration-300">
                            <Play fill="currentColor" size={20} className="ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary to-transparent">
                          <h4 className="text-white font-bold">{example.title}</h4>
                        </div>
                      </div>
                    ) : (
                      // Metric / Image Example
                      <div className="w-full h-full relative">
                        <img src={example.image} alt={example.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <h4 className="text-neutral-300 text-sm font-medium mb-1">{example.title}</h4>
                          <div className="text-4xl font-bold text-accent1 mb-1">{example.metric}</div>
                          <div className="text-white font-medium">{example.subtext}</div>
                        </div>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setActiveVideo(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-accent1 transition-colors" onClick={() => setActiveVideo(null)}>
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
