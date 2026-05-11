import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const tiers = [
    {
      name: "Basic",
      originalUpfront: "$995",
      upfrontPrice: "$795",
      originalPrice: "$595",
      price: "$475",
      description: "Essential presence and foundational growth.",
      features: [
        "1 Platform",
        "12 Posts per month",
        "2 Short-form reels",
        "Basic editing & engagement",
        "Basic SEO",
        "Monthly strategy call",
        "Monthly analytics report",
        "Google Business setup",
      ],
    },
    {
      name: "Premium",
      originalUpfront: "$1,495",
      upfrontPrice: "$1,195",
      originalPrice: "$795",
      price: "$635",
      popular: true,
      description: "Accelerated growth with advanced strategy.",
      features: [
        "2-3 Platforms",
        "20-24 Posts per month",
        "2-4 Short-form reels",
        "1-2 Long-form videos",
        "Advanced editing & research",
        "Meta Ads management",
        "KPI snapshots",
        "Quarterly planning",
        "Optional AI add-ons",
      ],
    },
    {
      name: "Elite",
      originalUpfront: "$2,995",
      upfrontPrice: "$2,395",
      originalPrice: "$1,495",
      price: "$1,195",
      description: "Complete infrastructure and AI automation.",
      features: [
        "3-4 Platforms",
        "30+ Posts per month",
        "5 Short-form reels",
        "2-4 Long-form videos",
        "Motion graphics & full outreach",
        "AI Landing Page included",
        "AI Chatbot included",
        "AI Voice Agent included",
        "Full funnel build & CRM integration",
        "Custom dashboard & priority turnaround",
      ],
    },
  ];

  return (
    <div className="py-24 bg-primary text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transparent Pricing. Scalable ROI.
          </h1>
          <p className="text-lg text-neutral-300">
            Choose the infrastructure tier that fits your current growth stage.
            No hidden fees, just measurable results.
          </p>

          <div className="inline-block bg-accent1/10 border border-accent1/30 rounded-2xl p-6 mt-8 shadow-[0_0_30px_rgba(50,207,254,0.15)] animate-pulse">
            <div className="flex items-center gap-3 justify-center mb-2">
              <span className="text-2xl">🔥</span>
              <h2 className="text-xl font-bold text-accent1 uppercase tracking-wider">Limited Time Special</h2>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-white text-lg font-medium">First 10 clients get this exclusive 20% OFF pricing!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-3xl bg-primary-hover border ${tier.popular ? "border-accent1 shadow-[0_0_40px_rgba(50,207,254,0.1)] scale-105 z-10" : "border-neutral-700 shadow-sm"} flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent1 text-primary px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-neutral-400 mb-6 min-h-[48px]">
                {tier.description}
              </p>
              <div className="mb-8 flex flex-col gap-4">
                <div>
                  <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Upfront</div>
                  <div className="flex items-baseline gap-2">
                    {tier.originalUpfront && <span className="text-xl font-medium text-neutral-500 line-through">{tier.originalUpfront}</span>}
                    <span className="text-4xl font-bold text-white">{tier.upfrontPrice}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-700">
                  <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Monthly</div>
                  <div className="flex items-baseline gap-2">
                    {tier.originalPrice && <span className="text-xl font-medium text-neutral-500 line-through">{tier.originalPrice}</span>}
                    <span className="text-3xl font-bold text-accent1">{tier.price}</span>
                    <span className="text-neutral-400">/mo</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-accent1 shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className={`w-full py-4 rounded-xl font-semibold text-center transition-colors ${tier.popular ? "bg-accent1 text-primary hover:bg-accent1-hover" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
