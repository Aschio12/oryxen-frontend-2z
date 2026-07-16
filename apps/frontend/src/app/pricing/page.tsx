"use client";

import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    billing: "monthly",
    description: "Perfect for exploring fitness fundamentals",
    features: [
      "Access to 3 beginner programs",
      "20+ exercise library with form guides",
      "Basic progress tracking",
      "Email support",
      "Mobile app access",
      "Community forum"
    ],
    cta: "Start Free Trial",
    featured: false
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    billing: "monthly",
    description: "For serious athletes pursuing excellence",
    features: [
      "All 6 advanced training programs",
      "Full exercise library (500+)",
      "Real-time performance analytics",
      "Workout tracker with metrics",
      "Live class access",
      "Priority email & chat support",
      "1 monthly coaching call",
      "Custom workout modifications",
      "Nutrition plans (5 options)",
      "Community + private group"
    ],
    cta: "Start Pro Trial",
    featured: true
  },
  {
    id: "elite",
    name: "Elite",
    price: 199,
    billing: "monthly",
    description: "For elite athletes with coaching oversight",
    features: [
      "Everything in Pro +",
      "One-on-one coaching (4x/month)",
      "Custom program design",
      "Weekly progress reviews",
      "Priority live support (24/7)",
      "Unlimited coaching calls",
      "Quarterly body composition analysis",
      "Competition preparation",
      "Recovery protocols",
      "Exclusive elite community",
      "Early access to new programs"
    ],
    cta: "Schedule Consultation",
    featured: false
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.floor(monthlyPrice * 12 * 0.85); // 15% discount
  };

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Investment</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Simple, Transparent Pricing.</h1>
          <p className="mt-6 mx-auto max-w-2xl text-sm font-light text-white/50">
            Choose your journey. Every plan includes access to our world-class platform and community.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-white/20 bg-white/5 p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 text-[10px] uppercase tracking-wider transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[#C5A059] text-black rounded-full"
                    : "text-white/60"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 text-[10px] uppercase tracking-wider transition-all ${
                  billingCycle === "yearly"
                    ? "bg-[#C5A059] text-black rounded-full"
                    : "text-white/60"
                }`}
              >
                Yearly
                <span className="ml-2 text-[#C5A059]">(-15%)</span>
              </button>
            </div>
          </div>
        </header>

        {/* Plans Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {plans.map((plan) => {
            const displayPrice = billingCycle === "yearly" ? getAnnualPrice(plan.price) : plan.price;
            const billingText = billingCycle === "yearly" ? "/year" : "/month";
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-lg border transition-all ${
                  plan.featured
                    ? "border-[#C5A059] bg-gradient-to-b from-[#0A0A0A] to-[#C5A059]/5 shadow-2xl shadow-[#C5A059]/20"
                    : "border-white/5 bg-[#0A0A0A] hover:border-[#C5A059]/30"
                } p-8 flex flex-col`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#C5A059] text-black px-4 py-1 text-[10px] uppercase tracking-wider font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-light text-white">{plan.name}</h2>
                  <p className="mt-2 text-sm font-light text-white/60">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-light text-[#C5A059]">${displayPrice}</span>
                    <span className="text-white/50">{billingText}</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="mt-2 text-xs text-[#2ECC71]">Save ${Math.floor((plan.price * 12) - displayPrice)} per year</p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full rounded-lg py-3 text-[10px] uppercase tracking-wider font-semibold mb-8 transition-all ${
                    plan.featured
                      ? "border border-[#C5A059] bg-[#C5A059] text-black hover:bg-transparent hover:text-[#C5A059]"
                      : "border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#C5A059] hover:bg-[#C5A059]/20"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">Includes</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-sm font-light text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="mb-8 font-serif text-3xl font-light text-white">Detailed Comparison</h2>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-[10px] uppercase tracking-wider text-white/40">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center px-6 py-4 text-[10px] uppercase tracking-wider text-white">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Training Programs", starter: "3", pro: "6", elite: "6" },
                    { name: "Exercise Library", starter: "200+", pro: "500+", elite: "500+" },
                    { name: "Performance Analytics", starter: "Basic", pro: "Advanced", elite: "Advanced" },
                    { name: "Live Classes", starter: "Limited", pro: "Full", elite: "Full" },
                    { name: "Coaching Support", starter: "Email", pro: "1x/month", elite: "4x/month" },
                    { name: "Custom Programs", starter: "—", pro: "Limited", elite: "Full" },
                    { name: "Community Access", starter: "Forum", pro: "Forum + Group", elite: "Elite Group" },
                    { name: "Priority Support", starter: "—", pro: "24h", elite: "24/7" },
                  ].map((feature, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-light text-white">{feature.name}</td>
                      <td className="text-center px-6 py-4 text-sm font-light text-white/70">{feature.starter}</td>
                      <td className="text-center px-6 py-4 text-sm font-light text-white/70">{feature.pro}</td>
                      <td className="text-center px-6 py-4 text-sm font-light text-white/70">{feature.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-2xl mx-auto">
          <h2 className="mb-8 font-serif text-3xl font-light text-white text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time without penalties. No long-term commitments required."
              },
              {
                q: "Do you offer free trials?",
                a: "Yes, we offer a 7-day free trial for all plans. No credit card required to start."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, and digital payment methods through secure payment processing."
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Absolutely. You can change your plan at any time, and we'll adjust your billing accordingly."
              },
              {
                q: "Is there a discount for annual billing?",
                a: "Yes, annual plans include a 15% discount compared to monthly billing."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group rounded-lg border border-white/5 bg-[#0A0A0A] p-4 hover:border-[#C5A059]/30 transition-all cursor-pointer">
                <summary className="flex items-center justify-between">
                  <p className="font-light text-white">{faq.q}</p>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50 group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm font-light text-white/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
