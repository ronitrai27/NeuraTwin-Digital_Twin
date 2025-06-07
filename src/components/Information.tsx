import React from "react";
import { Target, Trophy, Brain, LineChart, BookOpen, Bot } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
// import Spline from "@splinetool/react-spline";
const Information = () => {
  const features = [
    {
      title: "Goals",
      description:
        "Define unlimited personal goals, track your journey, and seamlessly pause or resume whenever needed.",
      icon: <Target className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Milestones",
      description:
        "Break down your goals into achievable milestones and unlock motivation as you progress.",
      icon: <Trophy className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "OCEAN Personality",
      description:
        "Gain insights into your core traits as the AI decodes your unique personality using the OCEAN model.",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Growth Tracker",
      description:
        "Visualize your self-development through AI-powered tracking of journals, behaviors, and achievements.",
      icon: <LineChart className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Smart Journals",
      description:
        "Document your thoughts freely while the AI extracts meaningful reflections from your daily life.",
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "AI Twin",
      description:
        "Interact with your intelligent digital twin—an ever-evolving companion that guides, supports, and mirrors your growth.",
      icon: <Bot className="h-8 w-8 text-indigo-500" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-indigo-900 to-black min-h-screen w-full relative mb-14 pt-14 min-[1000px]:px-8 px-3">
      {/* <div className="w-1/2  absolute -top-10 left-1/2 -translate-x-1/2 z-0 ">
        <Spline scene="https://prod.spline.design/gBJ5ZJ1aDXdy2l0E/scene.splinecode" />
      </div> */}

      <main className="min-[1000px]:max-w-5xl mx-auto min-[1000px]:mb-[120px] mb-[90px]">
        <h3 className="font-sora text-3xl bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text tracking-tight font-medium text-center mb-1">
          Features
        </h3>
        <h1 className="font-orbitron min-[800px]:text-5xl text-4xl tracking-tight text-white mt-2 text-center text-balance">
          "Meet the Digital Twin That Understands You{" "}
          <span className=" font-sora">
            —A Personalized AI Mirror of Your Mind, Mood, and Mission.
          </span>
          "
        </h1>
      </main>

      <div className="grid gap-6 grid-cols-1 min-[768px]:grid-cols-2 min-[1084px]:grid-cols-3 justify-center mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md px-4 py-6 flex flex-col items-start hover:shadow-xl transition duration-300 relative w-[350px] overflow-hidden mx-auto"
          >
            {feature.icon}
            <h3 className="font-sora text-[20px] font-medium mt-2 bg-gradient-to-b from-black via-gray-600 to-indigo-800/30 text-transparent bg-clip-text ">
              {feature.title}
            </h3>
            <p className="mt-2 font-inter text-[18px] tracking-normal text-balance text-gray-800">
              {feature.description}
            </p>

            <BorderBeam
              duration={20}
              size={400}
              className="from-transparent via-indigo-600 to-transparent"
            />
            <BorderBeam
              duration={12}
              delay={3}
              size={600}
              className="from-transparent via-gray-300 to-transparent"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Information;
