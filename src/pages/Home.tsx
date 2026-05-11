import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, Zap, Shield, Users, Play, Star, Heart, MessageCircle, Share2, TrendingUp, X, Bot, PhoneCall, CalendarCheck, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import { ErrorBoundary } from "../components/ErrorBoundary";

export default function Home() {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: "v1-f2YQxOIc", title: "Viral Short", views: "2.4M+ Views" },
    { id: "M8el2RKB1DU", title: "Brand Anthem", views: "850K+ Views" },
    { id: "OxeLco_80no", title: "Case Study", views: "1.2M+ Views" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-primary flex items-center justify-center">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
          <ErrorBoundary>
            <iframe 
              src="https://my.spline.design/reactiveorb-LrrnReyoXQafX2t29owkYATg/" 
              frameBorder="0" 
              width="100%" 
              height="100%"
              title="Spline 3D Scene"
              className="w-full h-full"
            />
          </ErrorBoundary>
        </div>

        {/* Massive Scrollable Edges to prevent iframe scroll trap */}
        <div className="absolute inset-y-0 left-0 w-[35%] z-10 pointer-events-auto" />
        <div className="absolute inset-y-0 right-0 w-[35%] z-10 pointer-events-auto" />
        <div className="absolute inset-x-0 top-0 h-[25%] z-10 pointer-events-auto" />
        <div className="absolute inset-x-0 bottom-0 h-[25%] z-10 pointer-events-auto" />

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 cursor-pointer pointer-events-auto hover:text-white transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          title="Click to scroll down"
        >
          <span className="text-sm uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Not Just Social Media Managers. <br />
              We Build Infrastructure.
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Stop chasing likes. Start building a predictable revenue engine
              with our integrated approach to media, automation, and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 size={32} />,
                title: "Data-Backed Strategy",
                desc: "Every piece of content and campaign is engineered for measurable ROI and conversion performance.",
              },
              {
                icon: <Zap size={32} />,
                title: "AI & Automation",
                desc: "We integrate AI chatbots, voice agents, and CRM automations to qualify leads 24/7.",
              },
              {
                icon: <Shield size={32} />,
                title: "Brand Authority",
                desc: "Premium video production and positioning that makes you the undisputed leader in your market.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-primary-hover border border-neutral-700 hover:border-accent1/50 hover:shadow-[0_0_30px_rgba(50,207,254,0.1)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent1/5 rounded-full blur-3xl group-hover:bg-accent1/10 transition-colors" />
                <div className="w-14 h-14 bg-accent1 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Results Section */}
      <section className="py-24 bg-primary border-t border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                We Engineer <span className="text-accent1">Virality</span> & Conversion
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Our campaigns don't just look good—they perform. Watch your metrics scale in real-time as our AI-driven strategies and premium content take over your market.
              </p>
            </motion.div>

            {/* Right: Interactive Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-accent1/20 blur-[100px] rounded-full" />
              
              <div className="relative bg-primary-hover border border-neutral-700 p-6 rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-700 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Proven Media Team</div>
                    <div className="text-neutral-500 text-xs">Sponsored • 🚀</div>
                  </div>
                </div>
                {/* Body */}
                <div 
                  className="w-full h-64 bg-neutral-800 rounded-xl mb-6 relative overflow-hidden group cursor-pointer"
                  onClick={() => setActiveVideo("z7gvmv_NHOo")}
                >
                  <img src="https://img.youtube.com/vi/z7gvmv_NHOo/hqdefault.jpg" alt="Viral Video" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent1/90 rounded-full flex items-center justify-center text-primary backdrop-blur-sm shadow-[0_0_30px_rgba(50,207,254,0.5)] group-hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                  </div>
                  {/* Floating engagement bubbles */}
                  <motion.div 
                    animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-4 right-8 text-red-500"
                  >
                    <Heart fill="currentColor" size={24} />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 right-16 text-blue-500"
                  >
                    <Share2 fill="currentColor" size={20} />
                  </motion.div>
                </div>
                {/* Metrics */}
                <div className="flex justify-between text-neutral-400 border-t border-neutral-700 pt-4">
                  <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.1, color: '#E4405F' }}>
                    <Heart size={20} /> <span className="font-bold">12.4k</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.1, color: '#32cffe' }}>
                    <MessageCircle size={20} /> <span className="font-bold">842</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.1, color: '#1877F2' }}>
                    <Share2 size={20} /> <span className="font-bold">3.2k</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-24 bg-primary border-t border-neutral-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent1/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent1 uppercase mb-3">
              The AI Advantage
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white max-w-3xl mx-auto">
              Automate Your Front Desk. <br/> Optimize Efficiencies. Win More Business.
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Free your team from repetitive administrative tasks. We deploy conversational AI voice agents and smart chatbots to handle your front line 24/7, so you can focus on building relationships and closing deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <PhoneCall size={28} />,
                title: "Inbound Voice AI",
                desc: "Never miss a lead. Our AI answers phone calls instantly, sounding entirely natural while qualifying prospects."
              },
              {
                icon: <CalendarCheck size={28} />,
                title: "Automated Scheduling",
                desc: "AI directly accesses your calendar to book meetings, follow-ups, and tours without any human intervention."
              },
              {
                icon: <DollarSign size={28} />,
                title: "Scale Without Overhead",
                desc: "Experience the 24/7 reliability of a dedicated administrative team at a fraction of the traditional payroll cost."
              },
              {
                icon: <Bot size={28} />,
                title: "24/7 Web Chatbots",
                desc: "Capture website visitors while you sleep. Our smart bots answer FAQs, capture contact info, and push to your CRM."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary-hover p-8 rounded-3xl border border-neutral-700 hover:border-accent1/30 hover:bg-neutral-800/80 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent1 mb-6 border border-neutral-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-neutral-800 to-primary-hover border border-neutral-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to hear our AI in action?</h3>
              <p className="text-neutral-400 text-lg">
                See exactly how seamlessly our AI voice agents handle objections, answer questions, and book meetings. Call our live demo line right now.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link to="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap">
                Hear Demo Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 bg-primary-hover border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                High-Converting Video
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl">
                We produce content designed to capture attention and drive action.
              </p>
            </div>
            <Link to="/services" className="text-accent1 hover:text-accent1-hover font-semibold flex items-center gap-2">
              View All Work <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div 
                key={video.id} 
                whileHover={{ y: -10 }} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveVideo(video.id)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/5] bg-neutral-800 border border-neutral-700"
              >
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-accent1 group-hover:text-primary group-hover:border-accent1 transition-all duration-300">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
                  <h3 className="text-white font-bold text-xl mb-1">{video.title}</h3>
                  <p className="text-accent1 text-sm font-medium">{video.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              What Our Partners Say
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Real results from businesses that scaled their infrastructure with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Erik Peterson is an outstanding real estate professional who truly goes above and beyond for his clients. His knowledge of the North Dakota market, attention to detail, and commitment to clear communication make the entire buying and selling process smooth and stress-free. Erik takes the time to understand your goals and provides honest guidance every step of the way. His professionalism, responsiveness, and strong negotiation skills ensure that you feel confident and well represented from start to finish. If you’re looking for someone who is trustworthy, hardworking, and dedicated to achieving the best possible outcome, Erik Peterson is an excellent choice. I highly recommend him to anyone buying or selling real estate.", name: "Scott Snofke", role: "Client", image: "https://picsum.photos/seed/scott/100/100" },
              { quote: "Erik and his team were great, very professional. Erik was exceptional in communication and keeping us in the loop with every detail of the process, we had a difficult situation with our property but he found solutions and worked hard, we always felt like he was in the ball! I highly recommend Proven Reality, LLC.", name: "Cody Charpentier", role: "Client", image: "https://picsum.photos/seed/cody/100/100" },
              { quote: "I really loved Eric's unique and proactive approach in selling my commercial building. I had previously tried to sell it with very little interest but by signing up with Proven reality which has a special niche in commercial properties in Western North Dakota, my building sold in less than 60 days. Very impressed.", name: "Office SAVC", role: "Commercial Client", image: "https://picsum.photos/seed/officesavc/100/100" }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }} 
                className="bg-primary-hover p-8 rounded-3xl border border-neutral-700 relative hover:border-accent1/50 transition-colors"
              >
                <div className="flex gap-1 text-accent1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-neutral-300 mb-8 text-lg italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-neutral-600" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-neutral-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-24 bg-primary text-white overflow-hidden border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Trusted by High-Performing B2B Brands
          </h2>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 opacity-50 hover:opacity-100 transition-all duration-500">
            <span className="text-2xl font-bold tracking-wider mx-12">Proven Realty Brokered by ExP</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Heartland Mortgage</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Cash4keys ND</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Proven Realty Brokered by ExP</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Heartland Mortgage</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Cash4keys ND</span>
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-24 opacity-50 hover:opacity-100 transition-all duration-500">
            <span className="text-2xl font-bold tracking-wider mx-12">Proven Realty Brokered by ExP</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Heartland Mortgage</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Cash4keys ND</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Proven Realty Brokered by ExP</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Heartland Mortgage</span>
            <span className="text-2xl font-bold tracking-wider mx-12">Cash4keys ND</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-hover text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to scale your authority?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Let's map out your custom growth infrastructure.
          </p>
          <Link
            to="/book"
            className="inline-flex bg-accent1 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent1-hover transition-colors items-center gap-2"
          >
            Book Your Strategy Call <ArrowRight size={20} />
          </Link>
        </div>
      </section>

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
