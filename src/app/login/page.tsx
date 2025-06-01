import React from "react";
import Orb from "../../components/ui/Orb";
import { LuArrowUpRight } from "react-icons/lu";
const page = () => {
  return (
    <section className="bg-gradient-to-b from-black to-indigo-950 w-full h-screen overflow-hidden relative py-3">
      <div className="w-full h-[350px] relative z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <h2
        className={`font-sora font-semibold tracking-tight text-white text-[38px] absolute top-40 left-1/2 -translate-x-1/2  z-50`}
      >
        <span className="bg-gradient-to-b from-white via-gray-400 to-indigo-600 text-transparent bg-clip-text [-webkit-background-clip:text]">
          Neura
        </span>
        Twin
      </h2>
      <div className="mt-6 min-[600px]:px-8 px-4">
        <h3 className=" font-orbitron min-[1000px]:text-4xl min-[600px]:text-3xl text-2xl text-balance font-medium text-white tracking-tight text-center">
          Unlock Your Full Potential
        </h3>
        <p className="bg-gradient-to-b from-white via-gray-400 to-indigo-900/30 text-transparent bg-clip-text min-[800px]:text-2xl text-xl font-medium tracking-tight text-balance mt-5 text-center">
          Enter your email and we will send you Magic code! Remember to do not
          share code with anyone.
        </p>
        <form className="w-full max-w-md mx-auto mt-20">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-10 px-4 py-2 font-sora font-bold bg-gradient-to-l from-indigo-200 to-indigo-600 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Get Code <LuArrowUpRight size={22} className="text-white" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
