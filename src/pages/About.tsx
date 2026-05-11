import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  TrendingUp, 
  Cpu, 
  Video, 
  Megaphone, 
  Search, 
  Filter, 
  Bot, 
  Globe, 
  CheckCircle2, 
  Target,
  ArrowRight
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="w-full bg-primary text-white min-h-screen pb-24 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/about/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent1/20 text-accent1 font-semibold text-sm mb-6 tracking-wider uppercase">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              About <span className="text-accent1">Proven Media Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
              A new company of <span className="text-white font-semibold">Proven Realty Brokered by eXp</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 relative z-20 -mt-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-primary-hover rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-700 text-center"
          >
            <div className="w-16 h-16 bg-accent1/10 text-accent1 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Building2 size={32} />
            </div>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-6">
              Proven Media Team is a full-service marketing and AI solutions company founded by the same team behind Proven Realty. 
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              After building one of the region's most recognized real estate brands through strategic marketing, video, and digital innovation, businesses across multiple industries began asking for the same level of support. What started as internal marketing expertise quickly grew into a new venture dedicated to helping organizations scale, compete, and win in today's digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Organizational Chart */}
      <section className="py-20 px-4 bg-primary relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Team Structure</h2>
            <div className="w-20 h-1 bg-accent1 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-300">
              Get to know the organizational structure that drives Proven Media Team's success.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 aspect-video bg-black/50"
          >
            <iframe 
              src="https://drive.google.com/file/d/1rVK1aUn54u9rlbe8gkbWY5ogYh8bK4ol/preview" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Team Organizational Chart"
            />
          </motion.div>
        </div>
      </section>

      {/* Built on Real-World Results */}
      <section className="py-20 px-4 bg-primary border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Built on Real-World Results</h2>
              <div className="w-20 h-1 bg-accent1 mb-8"></div>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                Unlike traditional agencies, Proven Media Team was not created in a boardroom. It was built from hands-on experience growing an actual company in a competitive market.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Our team understands what it takes to attract attention, generate qualified leads, and convert interest into revenue because we've done it ourselves. Every strategy we deploy is grounded in proven methods, data-driven decisions, and practical execution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/results/800/800" 
                  alt="Real world results" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary-hover p-6 rounded-2xl shadow-xl border border-neutral-700 flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-full">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Data-Driven</p>
                  <p className="text-xl font-bold text-white">Proven Execution</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing + AI + Video */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Marketing + AI + Video
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            One Unified Growth System. Modern business growth requires more than social media posts or occasional advertising. We combine advanced digital marketing strategies with powerful AI tools and high-impact video content to create systems that work continuously for your business.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: <Megaphone size={28} />, title: "Multi-platform digital marketing", color: "text-blue-400", bg: "bg-blue-500/10" },
            { icon: <Video size={28} />, title: "Professional content and video production", color: "text-purple-400", bg: "bg-purple-500/10" },
            { icon: <Target size={28} />, title: "Paid advertising and lead generation", color: "text-emerald-400", bg: "bg-emerald-500/10" },
            { icon: <Search size={28} />, title: "Search visibility and brand positioning", color: "text-orange-400", bg: "bg-orange-500/10" },
            { icon: <Filter size={28} />, title: "Sales funnels and CRM integration", color: "text-rose-400", bg: "bg-rose-500/10" },
            { icon: <Bot size={28} />, title: "AI automation, chatbots, and voice agents", color: "text-indigo-400", bg: "bg-indigo-500/10" },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary-hover p-8 rounded-3xl shadow-lg border border-neutral-700 flex flex-col items-center text-center gap-4 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} mb-2`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center bg-primary-hover text-white p-8 rounded-3xl shadow-xl border border-neutral-700"
        >
          <p className="text-2xl font-medium leading-relaxed">
            "The goal is simple: build a predictable engine for visibility, engagement, and customer acquisition."
          </p>
        </motion.div>
      </section>

      {/* Serving Businesses */}
      <section className="py-24 px-4 bg-primary text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
          <Globe size={800} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Serving Businesses Across Industries</h2>
              <div className="w-20 h-1 bg-accent1 mb-8"></div>
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                While our roots are in real estate, Proven Media Team serves organizations across North Dakota, the region, and nationwide.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                We partner with local businesses, service providers, professional firms, and growing companies that want a strategic advantage in an increasingly competitive market. Whether you are establishing your online presence or scaling to the next level, our team provides the tools, systems, and expertise to move your business forward.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "Local Businesses",
                "Service Providers",
                "Professional Firms",
                "Growing Companies"
              ].map((industry, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center">
                  <p className="font-semibold text-lg">{industry}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Mission */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Businesses Choose Proven Media Team</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Companies choose us because we deliver more than marketing services. We provide clarity, strategy, and execution backed by real business experience.
            </p>
            <div className="space-y-4">
              {[
                "Founded by proven operators, not just marketers",
                "Integrated approach combining marketing, AI, and video",
                "Focus on measurable growth and long-term results",
                "Scalable solutions for businesses of all sizes",
                "Dedicated partnership and ongoing support"
              ].map((reason, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-primary-hover rounded-2xl shadow-sm border border-neutral-700"
                >
                  <div className="text-accent1 mt-1">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-neutral-300 font-medium">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-accent1/10 border border-accent1/20 p-10 rounded-3xl relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent1 rounded-full flex items-center justify-center text-primary shadow-lg">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-neutral-300 leading-relaxed font-medium italic">
                "Our mission is to empower businesses with the same level of strategic marketing and technological advantage that fueled our own success. We believe every company deserves access to modern tools, clear strategy, and professional execution."
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary-hover rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-neutral-700"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cta/1920/1080')] opacity-20 bg-cover bg-center mix-blend-overlay" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Your Growth Engine</h2>
              <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
                If you are ready to increase visibility, generate qualified leads, and operate more efficiently, Proven Media Team is ready to help.
              </p>
              <Link 
                to="/book"
                className="inline-flex items-center gap-2 bg-accent1 text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent1-hover transition-all hover:scale-105 shadow-[0_0_20px_rgba(200,169,90,0.4)]"
              >
                Schedule a Strategy Call <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

