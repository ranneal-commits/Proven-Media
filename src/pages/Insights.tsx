import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
} from "lucide-react";

const followerGrowthData = [
  { year: "2024", facebook: 2100, linkedin: 300, instagram: 500, youtube: 100 },
  { year: "2025", facebook: 3500, linkedin: 800, instagram: 1200, youtube: 250 },
  { year: "2026 (Mar)", facebook: 4914, linkedin: 2174, instagram: 1209, youtube: 249 }
];

const linkedinData = [
  { name: "Jan", impressions: 554 },
  { name: "Feb", impressions: 39584 },
  { name: "Mar", impressions: 45200 },
];

const facebookData = [
  { name: "Jan", impressions: 190761 },
  { name: "Feb", impressions: 101485 },
  { name: "Mar", impressions: 112000 },
];

export default function Insights() {
  return (
    <div className="w-full bg-primary text-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* YEARLY INSIGHTS HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="font-mono text-sm tracking-widest uppercase text-accent1 mb-4 font-semibold">
            Yearly Social Insights · Jan 2024 to Mar 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Building An Audience,<br/>
            <span className="text-accent1">One Year at a Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl">
            In 26 months, Proven Realty ND has grown every channel we run. Each stat below shows how each year layers on top of the last. The longer we've been at it, the higher it gets.
          </p>
        </motion.div>

        {/* HERO METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary-hover border border-neutral-700/50 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent1/5 rounded-full blur-[40px] group-hover:bg-accent1/10 transition-colors" />
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent1/80 mb-4 font-semibold">
              Total Social Followers
            </h3>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl text-neutral-500 font-medium line-through decoration-neutral-700">3,224</span>
              <span className="text-5xl font-bold text-white tracking-tight">8,546</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full mb-4">
              <span className="leading-none">+165%</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
              +5,322 followers added across Facebook, Instagram, YouTube & LinkedIn since Jan 2024.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-hover border border-neutral-700/50 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] group-hover:bg-blue-500/10 transition-colors" />
            <h3 className="font-mono text-xs tracking-widest uppercase text-blue-400 mb-4 font-semibold">
              Newsletter Growth
            </h3>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl text-neutral-500 font-medium line-through decoration-neutral-700">4,897</span>
              <span className="text-5xl font-bold text-white tracking-tight">7,247</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full mb-4">
              <span className="leading-none">+2,350 subs</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
              Engagement skyrocketing: Open rates grew from 22.6% to 29.4% alongside list growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-primary-hover border border-neutral-700/50 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] group-hover:bg-amber-500/10 transition-colors" />
            <h3 className="font-mono text-xs tracking-widest uppercase text-amber-400 mb-4 font-semibold">
              Peak Monthly Reach
            </h3>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">152k</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-500 text-sm font-semibold rounded-full mb-4">
              <span className="leading-none">+99% YoY</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
              Facebook reach in October 2025. Total reach across 2025 nearly doubled vs. 2024.
            </p>
          </motion.div>
        </div>

        {/* DATA VISUALIZATION */}
        <div className="bg-primary-hover border border-neutral-700/50 rounded-3xl p-8 mb-24 overflow-hidden">
          <h3 className="text-2xl font-bold mb-8">Follower Growth by Platform</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={followerGrowthData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="year" stroke="#888" axisLine={false} tickLine={false} />
                <YAxis stroke="#888" axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#1f2937'}} 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="facebook" name="Facebook" stackId="a" fill="#1877F2" radius={[0, 0, 4, 4]} />
                <Bar dataKey="linkedin" name="LinkedIn" stackId="a" fill="#0A66C2" />
                <Bar dataKey="instagram" name="Instagram" stackId="a" fill="#E4405F" />
                <Bar dataKey="youtube" name="YouTube" stackId="a" fill="#FF0000" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MONTHLY BREAKDOWN SECTION */}
        <div className="mb-12 border-t border-neutral-800 pt-16 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">March 2026 Breakdown</h2>
          <p className="text-neutral-400">Granular metrics and insights for the most recent full month.</p>
        </div>

        {/* Key Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary-hover border border-neutral-700 rounded-3xl p-6 hover:border-[#0A66C2]/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] mb-4">
              <Linkedin size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">LinkedIn Authority</h4>
            <p className="text-sm text-neutral-400">Erik Peterson's page was the clear breakout, continuing its massive surge from February into March with impressions up.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary-hover border border-neutral-700 rounded-3xl p-6 hover:border-[#E4405F]/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] mb-4">
              <Instagram size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Instagram Discovery</h4>
            <p className="text-sm text-neutral-400">Reach remains strong and consistent. Discovery content strategy is effectively maintaining new audience exposure.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary-hover border border-neutral-700 rounded-3xl p-6 hover:border-accent1/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent1/10 flex items-center justify-center text-accent1 mb-4">
              <Mail size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2">Email Consistency</h4>
            <p className="text-sm text-neutral-400">Continues to perform above industry standards with open rates securely above 30%. A highly engaged core audience.</p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-hover rounded-3xl p-8 border border-neutral-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Linkedin className="text-[#0A66C2]" /> LinkedIn Impressions
              </h3>
              <span className="text-emerald-400/90 font-bold bg-emerald-500/10 px-3 py-1 rounded-full text-sm">
                Sustained Peak
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={linkedinData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#888" />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `${val / 1000}k`} stroke="#888" />
                  <Tooltip 
                    cursor={{fill: '#1f2937'}} 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="impressions" fill="#0A66C2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-hover rounded-3xl p-8 border border-neutral-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Facebook className="text-[#1877F2]" /> Facebook Distribution
              </h3>
              <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                Recovering
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={facebookData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#888" />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `${val / 1000}k`} stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="impressions" stroke="#1877F2" strokeWidth={4} dot={{ r: 6, fill: '#1877F2', strokeWidth: 2, stroke: '#1f2937' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>



      </div>
    </div>
  );
}
