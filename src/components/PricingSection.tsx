import React from "react";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
  const pricingData = [
    {
      tier: "Explorer",
      price: "Free",
      audience: "Curious individuals & early adopters",
      features: [
        { name: "Personality-driven AI Chat (Limited)" },
        { name: "Goal Tracking (Basic)" },
        { name: "Mood Logging & Daily Reflections" },
        { name: "AI-Powered Digital Twin (Starter)" },
        { name: "Behavior Pattern Tracking (Lite)" },
        { name: "Big Five Personality Snapshot" },
        { name: "Weekly Insight Highlights" },
        { name: "Smart Suggestions (Lite)" },
      ],
      isRecommended: false,
    },
    {
      tier: "Pro Seeker",
      price: "$9",
      audience: "Growth-minded individuals",
      features: [
        { name: "Advanced Personality-Driven Conversations" },
        { name: "Priority Goal Management & Habit Looping" },
        { name: "In-Depth Emotional Pattern Analysis" },
        { name: "Custom Personality Evolution Engine" },
        { name: "Weekly Smart Reports & Visual Trends" },
        { name: "AI-Powered Smart Journaling" },
        { name: "Daily Reflections & Motivational Prompts" },
        { name: "Real-Time Feedback on Decisions" },
        { name: "Early Access to Experimental Features" },
      ],
      isRecommended: true,
    },
    {
      tier: "Elite Twin",
      price: "$19",
      audience: "Professionals & visionaries",
      features: [
        { name: "Real-Time AI Life Coach & Guidance" },
        { name: "Deep Life Insight & Trend Forecasting" },
        { name: "Customizable AI Twin Personality & Tone" },
        { name: "AI-Powered Decision Support Matrix" },
        { name: "Behavioral Predictions Based on OCEAN Model" },
        { name: "Priority Access to AI Twin Evolution Updates" },
        { name: "Private Twin Memory Space" },
        { name: "Unlimited Daily Reflections & Strategy Logs" },
        { name: "Concierge AI Help for Complex Choices" },
      ],
      isRecommended: false,
    },
  ];

  return (
    <section className="pricing-section relative w-full min-h-screen px-6 md:px-8 py-8 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-orbitron font-medium tracking-tight text-4xl text-white mb-5">
            Plans That Grow With You
          </h2>
          <p className="bg-gradient-to-b from-white via-gray-300 to-indigo-500/30 text-transparent bg-clip-text font-sora max-w-2xl mx-auto tracking-tight leading-snug text-xl">
            Whether you're starting your journey or leading your life with
            precision, NeuraTwin evolves with you — unlocking deeper personal
            insights, guidance, and smart self-growth.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 min-[900px]:gap-8 gap-12 max-[900px]:w-fit mx-auto px-2">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              tier={plan.tier}
              price={plan.price}
              audience={plan.audience}
              features={plan.features}
              isRecommended={plan.isRecommended}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
