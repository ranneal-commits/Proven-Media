import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: "erik-peterson",
    name: "Erik Peterson",
    role: "Broker, MBA",
    phone: "(701) 369-3949",
    email: "Erik@ProvenRealtyND.com",
    image: "https://images.squarespace-cdn.com/content/v1/63d2e8a7d19ab30bbf1a369b/1765393272264-H5PXCZQ7UGPGPELUKVEE/Erik.png?format=300w",
    specialties: ["Brokerage", "Negotiation", "Business Consulting", "Property Management"],
    bio: [
      "Erik Peterson is the founder of Proven Realty and brings extensive experience to the market. Erik was born and raised in Missoula, MT and grew up in a real estate family, where both of us his parents had real estate licenses. Over the past six years, Erik has assisted property owners and tenants with all their real estate needs in North Dakota; He has sold and leased commercial and industrial properties, ran successful marketing campaigns, been very involved in residential and workforce housing, business consulting, business sales and property management. In addition, Erik has helped Bakken companies create long term business relationships and develop real estate properties. He has previously held ownership interests in businesses in the Bakken which specialized in gravel transportation, potable water & septic hauling, porta-potties and real estate development.",
      "Erik has negotiated on over $400 million worth of real estate in the Bakken. These various projects include industrial shops, retail, office, residential, mancamps, and development projects. He also has worked closely with planning & zoning departments, engineers, architects, contractors, and developers.",
      "Previously, Erik was President of Peterson Financial and spent 13 years helping investors reach their personal and financial goals. He held several investment licenses, each with a different specialty. He managed over 400 accounts in 7 states. In addition to his investment management expertise, he has consulted for several corporations to assist them to market, plan, and finance their businesses. This vast financial experience has given Erik a broad and diverse understanding of both corporate finance and business efficiency.",
      "Erik has 4 adult children and when he is not working tirelessly to assist clients to find property; he likes to hunt, fish, travel, and compete in Spartan Races."
    ]
  },
  {
    id: "kayla-peterson",
    name: "Kayla Peterson",
    role: "International Team Manager",
    phone: null,
    email: "Kaylap@ProvenRealtyND.com",
    image: "https://images.squarespace-cdn.com/content/v1/63d2e8a7d19ab30bbf1a369b/1723835728523-E90YK5S6EF1F4C302YMK/Kayla.png?format=300w",
    specialties: ["Operations", "Client Relations", "Team Management", "Customer Experience"],
    bio: [
      "Kayla grew up in the beautiful state of Montana where she studied business at the University of Montana. She developed the marketing for Proven Realty when it first began in 2017. Over the last several years, Kayla moved up the ranks within Orange Theory Fitness; running studios in both Montana and Arizona. With her leadership and development of operational systems, her studio in Montana became the #3 producer of new inquires booked in the nation out of over 1500 franchises.",
      "Kayla believes in the customer experience and leads with service in mind. She has always worked in customer service and loves building relationships with people. She values building relationships with clients and exceeding all expectations. When she is not working she enjoys the outdoors, walking her dogs, watching sports and reading a good book."
    ]
  },
  {
    id: "rafael-serato",
    name: "Rafael Serato",
    role: "Marketing Team Lead",
    phone: null,
    email: "Rafael@ProvenRealtyND.com",
    image: "https://images.squarespace-cdn.com/content/v1/63d2e8a7d19ab30bbf1a369b/1683756315856-R7G87KA53ZZ5DGTQU7L5/Rafael.png?format=300w",
    specialties: ["Video Production", "Video Editing", "Content Strategies", "Shorts & Long-form Videos", "Video Scripts"],
    bio: [
      "I'm always hungry for knowledge and I'm passionate about helping businesses accelerate their growth. As the Marketing Team Lead, I spearhead our visual storytelling—directing video production, conceptualizing compelling video scripts, and handling end-to-end video editing for both viral short-form content and authoritative long-form videos.",
      "My recent work as a Creative at a Real Estate Company taught me the nuances of the industry, and I love integrating these insights to elevate our clients' brands. I take failures as an opportunity to learn and believe that an idea without execution is just stock knowledge.",
      "Whenever I envision a new content strategy or video concept that can elevate our business or our clients' success, I take the initiative to bring it to life alongside the team."
    ]
  },
  {
    id: "ranael-vergara",
    name: "Ranael Vergara",
    role: "AI & Web Director",
    phone: null,
    email: "Ranneal@ProvenRealtyND.com",
    image: "https://images.squarespace-cdn.com/content/v1/63d2e8a7d19ab30bbf1a369b/1736787147795-LGTRXGG2O6MR1ED6XQZE/Aug+Team+-+2024+-+For+video+%283%29.jpg?format=300w",
    specialties: ["AI Websites", "Website Management", "AI Direction", "AI Voice Agents", "AI Bots"],
    bio: [
      "Ran is a highly experienced professional who seamlessly bridges the gap between traditional real estate marketing and cutting-edge digital infrastructure. As our AI & Web Director, he oversees all website management, SEO, and custom high-converting AI landing pages.",
      "A true pioneer in modern marketing automation, Ran is responsible for engineering and deploying intelligent AI chatbots and conversational AI voice agents that qualify leads 24/7. Known for combining technical expertise with a positive personality, he maintains a strong sense of responsibility and loyalty to our clients' success.",
      "Ran excels in simplifying complex tasks and processes, translating them into streamlined, efficient experiences—whether it's web development, AI bot integration, or dynamic multimedia strategies—that consistently exceed expectations."
    ]
  },
  {
    id: "kristian-molino",
    name: "Kristian Molino",
    role: "Automation & Ads Specialist",
    phone: null,
    email: "Kristian@ProvenRealtyND.com",
    image: "https://images.squarespace-cdn.com/content/v1/63d2e8a7d19ab30bbf1a369b/1723835618090-3W9P736Z2LYI84LR597T/Team+Picture+%28500+%C3%97+660+px%29+%285%29.png?format=300w",
    specialties: ["Marketing Automation", "Newsletters", "Email Marketing", "CRM Integrations", "Funnel Builds"],
    bio: [
      "With a background rooted in Petroleum Engineering, Kristian seamlessly transitioned into the realm of marketing, capitalizing on his keen analytical abilities to architect cutting-edge backend solutions and advanced Meta Ads campaigns. With a rich and varied portfolio, he has served as a marketing specialist for a range of real estate and tech-advisory firms.",
      "Driven by an enduring fascination with the fluidity of the real estate landscape, Kristian has cultivated deep expertise in marketing automation, high-converting funnel builds, and seamless CRM integrations. He masterminds our email marketing and newsletter strategies, ensuring every lead is nurtured perfectly through the pipeline.",
      "As a proactive and self-propelled professional, Kristian's current mission revolves around harnessing the power of data-driven digital infrastructure. He consistently exceeds expectations, driven by a relentless pursuit of innovation—making his ad strategies and automation workflows an indispensable asset to our team and clients."
    ]
  },
  {
    id: "reizeal-ida-saligan",
    name: "Reizeal Ida Saligan",
    role: "Lead Graphic Designer",
    phone: null,
    email: "Ida@ProvenRealtyND.com",
    image: "https://images.squarespace-cdn.com/content/v1/63d2e8a7d19ab30bbf1a369b/1723835520539-49Z10FBLFFYVPOMOM0PP/ssefsef+%281%29.png?format=300w",
    specialties: ["Graphic Design", "Motion Graphics", "Brand Identity", "Visual Content", "UI/UX Elements"],
    bio: [
      "Ida is a detail-oriented design professional who transitioned from data validation to mastering the visual arts. With a Bachelor of Science in Petroleum Engineering, she brings a uniquely analytical yet highly creative approach to brand identity and UI/UX elements.",
      "As our Lead Graphic Designer, Ida excels in crafting compelling visual content, eye-catching motion graphics, and robust design frameworks. Drawing on her past roles in data validation and customer service, she possesses strong organizational and problem-solving abilities, ensuring that every graphic meticulously adheres to brand guidelines and maintains a high-end look across all media.",
      "Known for her precision and strong eye for detail, Ida integrates her deep interest in real estate and modern marketing into everything she builds. Her ability to translate raw concepts into striking visual assets makes her an invaluable driver of our creative team."
    ]
  }
];

export default function Roster() {
  const [activeTab, setActiveTab] = useState(teamMembers[0].id);

  const activeMember = teamMembers.find(member => member.id === activeTab) || teamMembers[0];

  return (
    <div className="py-24 bg-primary text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Meet Our <span className="text-accent1">Team</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            The experts behind Proven Media Team. We combine industry knowledge, technical expertise, and a relentless drive for results.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Roster Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveTab(member.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                  activeTab === member.id 
                    ? "bg-accent1 text-primary font-bold shadow-[0_0_20px_rgba(50,207,254,0.2)] scale-105" 
                    : "bg-primary-hover text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800"
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-neutral-800 border border-neutral-700">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-lg truncate">{member.name}</span>
                  <span className={`text-xs truncate ${activeTab === member.id ? 'text-primary/70' : 'text-neutral-500'}`}>
                    {member.role}
                  </span>
                </div>
                {activeTab === member.id && (
                  <ChevronRight size={20} className="ml-auto flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          {/* Member Details Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-primary-hover border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Hero Section of the card */}
                <div className="relative h-48 md:h-64 w-full bg-gradient-to-r from-neutral-800 to-neutral-900 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/rosterbg/1920/1080')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-hover via-primary-hover/60 to-transparent" />
                  
                  {/* Avatar positioning slightly overlapping the hero */}
                  <div className="absolute bottom-0 left-6 sm:left-10 transform translate-y-1/3">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary-hover overflow-hidden bg-neutral-800 shadow-xl">
                      <img 
                        src={activeMember.image} 
                        alt={activeMember.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-10 pt-16 sm:pt-20 pb-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{activeMember.name}</h2>
                      <p className="text-xl text-accent1 font-medium">{activeMember.role}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3">
                      {activeMember.phone && (
                        <a href={`tel:${activeMember.phone}`} className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors p-3 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-neutral-700">
                          <div className="w-8 h-8 rounded-full bg-accent1/10 flex items-center justify-center text-accent1">
                            <Phone size={16} />
                          </div>
                          <span className="text-sm font-medium">{activeMember.phone}</span>
                        </a>
                      )}
                      
                      <a href={`mailto:${activeMember.email}`} className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors p-3 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-neutral-700">
                        <div className="w-8 h-8 rounded-full bg-accent1/10 flex items-center justify-center text-accent1">
                          <Mail size={16} />
                        </div>
                        <span className="text-sm font-medium break-all">{activeMember.email}</span>
                      </a>
                    </div>
                  </div>

                  {activeMember.specialties && activeMember.specialties.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Core Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeMember.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-neutral-800 border border-neutral-700 text-neutral-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 text-neutral-300 leading-relaxed text-lg pt-6 border-t border-neutral-800">
                    {activeMember.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
