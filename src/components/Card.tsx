"use client";
import React from "react";
import { LuBookCheck, LuBot, LuBoxes } from "react-icons/lu";
import { BackgroundGradient } from "../components/ui/background-gradient";
const features = [
  {
    icon: <LuBookCheck size={36} className="text-indigo-400" />,
    title: "Daily Journal",
    description:
      "Reflect daily. NeuraTwin turns your thoughts into insights that shape habits, track emotions, and guide growth.",
  },
  {
    icon: <LuBot size={36} className="text-indigo-400" />,
    title: "AI-Powered Insights",
    description:
      "Your AI twin evolves with you, offering tailored advice, emotional clarity, and smart mental check-ins.",
  },
  {
    icon: <LuBoxes size={36} className="text-indigo-400" />,
    title: "Goal Tracking",
    description:
      "Set meaningful goals, build routines, and stay motivated — all aligned with your personality and pace.",
  },
];

const Card = () => {
  return (
    <section className="my-14 px-8 py-6">
      <main>
        <h3 className="font-sora text-3xl bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text tracking-tight font-medium text-center">
          Align With Your Goals
        </h3>
        <h1 className="font-orbitron text-5xl tracking-tight text-white mt-2 text-center">
          Reimagined Yourself
        </h1>

        <div className="grid grid-cols-1  min-[1000px]:grid-cols-3 gap-10 my-20 min-[1000px]:px-12 max-[600px]:px-5 px-16 ">
          {features.map((feature, idx) => (
            <BackgroundGradient
              key={idx}
              className="w-full  min-[1000px]:h-[320px] max-[400px]:h-auto h-[280px] flex flex-col items-center justify-start px-4 py-6 rounded-[22px] bg-gray-900 overflow-hidden"
            >
              <div className="my-3 self-start">{feature.icon}</div>
              <h2 className="min-[1000px]:text-xl min-[600px]:text-[26px] text-xl font-semibold font-sora mb-5 text-white text-center">
                {feature.title}
              </h2>
              <p className="min-[1000px]:text-[16px] min-[600px]:text-[20px] text-[16px] font-inter text-gray-300 text-center mt-3 leading-relaxed text-balance ">
                {feature.description}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Card;
