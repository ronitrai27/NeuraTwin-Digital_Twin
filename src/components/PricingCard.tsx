"use client";
import React, { useState } from "react"; // Add this at the top
import { CheckCircle2 } from "lucide-react";

interface PricingFeature {
  name: string;
}

interface PricingCardProps {
  tier: string;
  price: string;
  audience: string;
  features: PricingFeature[];
  isRecommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  audience,
  features,
  isRecommended = false,
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className={`relative flex flex-col h-full rounded-3xl p-8 backdrop-blur-md transition-transform duration-300 hover:translate-y-[-8px] ${
        isRecommended
          ? "bg-[rgba(40,40,45,0.75)] z-10 border border-[rgba(255,255,255,0.08)] scale-110 md:translate-y-[-20px] m-2 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          : "bg-[rgba(30,30,35,0.65)]"
      }`}
    >
      <div className="mb-5">
        <h3 className="text-indigo-500 text-start font-orbitron text-xl mb-2 tracking-tight font-light">
          {tier}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          <span className="text-gray-400 text-4xl font-bold font-sora">
            {price}
          </span>
          <span className="text-gray-400 text-xl font-sora ">/m</span>
        </div>
        <p className="font-sora text-center bg-gradient-to-b from-white via-gray-300 to-indigo-500/30 text-transparent bg-clip-text">
          {audience}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-white font-quicksand text-left text-lg mb-3">
          Includes
        </p>
        <ul className="space-y-3">
          {(showAll ? features : features.slice(0, 6)).map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-indigo-400 h-5 w-5 flex-shrink-0" />
              <span className="text-white font-quicksand tracking-tight leading-snug">
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        {features.length > 6 && (
          <button
            className="my-5 text-indigo-400 hover:underline text-sm text-center w-full "
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        )}
      </div>

      {isRecommended && (
        <>
          {/* Glowing badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 px-4 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-md">
              🌟 Most Popular
            </div>
          </div>

          {/* Optional light glow effect around the whole card */}
          <div className="absolute inset-0 rounded-3xl border border-indigo-400/20 pointer-events-none animate-pulse" />
        </>
      )}
    </div>
  );
};

export default PricingCard;
