import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What is Proven Media Team?",
    answer: "Proven Media Team is a full-service digital marketing and AI solutions agency founded by the marketing team behind Proven Realty. We help businesses grow through social media management, video content, online advertising, SEO, and AI-powered automation systems."
  },
  {
    question: "What services does Proven Media Team offer?",
    answer: "We offer tiered marketing packages ranging from foundational online presence management to advanced multi-platform marketing and AI integration, including content creation, paid advertising, SEO, funnel building, CRM integration, and automation tools."
  },
  {
    question: "Do you offer AI solutions for businesses?",
    answer: "Yes. We implement practical AI tools such as chatbots, automated responses, landing pages, voice agents, and data-driven marketing systems to improve efficiency and customer experience."
  },
  {
    question: "Are your services only for real estate companies?",
    answer: "No. We serve businesses across many industries including retail, construction, healthcare, hospitality, professional services, and local small businesses."
  },
  {
    question: "Can you help generate leads and customers?",
    answer: "Yes. Our strategies focus on attracting qualified prospects, increasing online visibility, and converting interest into real customers through targeted campaigns and optimized funnels."
  },
  {
    question: "How is Proven Media Team different from other marketing agencies?",
    answer: "We combine real-world business experience with modern digital marketing strategies and AI technology to build measurable systems that produce long-term growth and efficiency."
  },
  {
    question: "Do I need technical knowledge to use your services?",
    answer: "No. We handle all technical setup and implementation while providing clear reporting and easy-to-use systems."
  },
  {
    question: "How long does it take to see results?",
    answer: "Some improvements can appear within weeks, while stronger outcomes like search rankings and consistent lead generation typically develop over several months."
  },
  {
    question: "Do you offer customized solutions?",
    answer: "Yes. We tailor strategies and service packages to match each business's goals, audience, and budget."
  },
  {
    question: "Can you work with businesses outside your area?",
    answer: "Yes. We work with clients locally and remotely using virtual collaboration tools and digital reporting systems."
  },
  {
    question: "How do I get started with Proven Media Team?",
    answer: "Contact us through our website, call our team, or request a consultation. We will evaluate your goals and recommend the best strategy for your business."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate the JSON-LD schema dynamically based on the faqs array
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full bg-primary text-white min-h-screen pb-24">
      {/* Injecting the Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Header */}
      <section className="bg-primary text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/faq/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-accent1/20 text-accent1 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircleQuestion size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Frequently Asked <span className="text-accent1">Questions</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Everything you need to know about Proven Media Team, our services, and how we help businesses scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`bg-primary-hover rounded-2xl shadow-sm border transition-colors duration-300 overflow-hidden ${openIndex === index ? 'border-accent1/50 shadow-md' : 'border-neutral-700 hover:border-neutral-600'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-accent1' : 'text-white'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className={`flex-shrink-0 ${openIndex === index ? 'text-accent1' : 'text-neutral-400'}`}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-neutral-300 leading-relaxed border-t border-neutral-700 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
