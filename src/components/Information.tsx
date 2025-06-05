import React from "react";
import { Target, Trophy, Brain, LineChart, BookOpen, Bot } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
// import Spline from "@splinetool/react-spline";
const Information = () => {
  const features = [
    {
      title: "Goals",
      description:
        "Set unlimited personal goals, track progress, and pause or resume anytime.",
      icon: <Target className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Milestones",
      description:
        "Achieve goals step-by-step and unlock motivational milestones.",
      icon: <Trophy className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "OCEAN Personality",
      description:
        "AI analyzes your behavior to understand your OCEAN personality traits.",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Growth Tracker",
      description:
        "Monitor your personal development via journals, milestones, and traits.",
      icon: <LineChart className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Smart Journals",
      description:
        "Write freely and let AI reflect insights from your daily experiences.",
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "AI Twin",
      description:
        "Chat with your AI twin that guides, motivates, and reflects your inner self.",
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
            className="bg-transparent rounded-2xl shadow-md px-4 py-6 flex flex-col items-start hover:shadow-xl transition duration-300 relative w-[350px] overflow-hidden mx-auto"
          >
            {feature.icon}
            <h3 className="font-sora text-[20px] font-medium mt-2 bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text ">
              {feature.title}
            </h3>
            <p className="mt-2 font-inter text-[18px] tracking-normal text-balance text-gray-200">
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
