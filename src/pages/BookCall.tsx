import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BookCall() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    service: "",
    budget_range: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

    if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-primary text-white py-24 px-4">
        <div className="max-w-md w-full bg-primary-hover p-10 rounded-3xl shadow-xl border border-neutral-700 text-center">
          <div className="w-20 h-20 bg-accent1/20 text-accent1 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Application Received</h2>
          <p className="text-neutral-300 mb-8">
            Our team will review your details and contact you shortly to confirm
            your strategy session.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-accent1 text-primary px-8 py-4 rounded-full font-semibold w-full hover:bg-accent1-hover transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book Your Strategy Call
          </h1>
          <p className="text-lg text-neutral-300">
            Let's map out your custom growth infrastructure and see if we're a
            fit.
          </p>
        </div>

        <div className="bg-primary-hover rounded-3xl shadow-xl border border-neutral-700 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-semibold mb-6">
                  1. Tell us about you
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Business Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                      value={formData.business_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          business_name: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-accent1 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent1-hover transition-colors flex items-center justify-center gap-2 mt-8"
                >
                  Continue <ArrowRight size={20} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-semibold mb-6">
                  2. Project Details
                </h3>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Primary Service Interest
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">Select a service...</option>
                    <option value="Social Media Management">
                      Social Media Management
                    </option>
                    <option value="Video Production">Video Production</option>
                    <option value="AI Automation (Chatbot/Voice)">
                      AI Automation (Chatbot/Voice)
                    </option>
                    <option value="Full Funnel Build">Full Funnel Build</option>
                    <option value="Meta Ads Management">
                      Meta Ads Management
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Monthly Budget Range
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                    value={formData.budget_range}
                    onChange={(e) =>
                      setFormData({ ...formData, budget_range: e.target.value })
                    }
                  >
                    <option value="">Select budget...</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Timeline
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 focus:border-transparent outline-none transition-all"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                  >
                    <option value="">Select timeline...</option>
                    <option value="Immediately">Immediately</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 bg-accent1 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent1-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
