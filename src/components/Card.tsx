"use client";
import React from "react";
import Component from "./Data-cards";
// import { LuBookCheck, LuBot, LuBoxes } from "react-icons/lu";
// import { BackgroundGradient } from "../components/ui/background-gradient";
// const features = [
//   {
//     icon: <LuBookCheck size={36} className="text-indigo-400" />,
//     title: "Daily Journal",
//     description:
//       "Reflect daily. NeuraTwin turns your thoughts into insights that shape habits, track emotions, and guide growth.",
//   },
//   {
//     icon: <LuBot size={36} className="text-indigo-400" />,
//     title: "AI-Powered Insights",
//     description:
//       "Your AI twin evolves with you, offering tailored advice, emotional clarity, and smart mental check-ins.",
//   },
//   {
//     icon: <LuBoxes size={36} className="text-indigo-400" />,
//     title: "Goal Tracking",
//     description:
//       "Set meaningful goals, build routines, and stay motivated — all aligned with your personality and pace.",
//   },
// ];

const Card = () => {
  return (
    <section className="my-14 px-8 py-6">
      <main>
        <Component />
      </main>
    </section>
  );
};

export default Card;
