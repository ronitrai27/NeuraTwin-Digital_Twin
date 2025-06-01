import React from "react";
import { Vortex } from "../components/ui/Vortex";

export function VortexDemoSecond() {
  return (
    <section className="">
      <div className="w-full mx-auto rounded-md  h-[400px] overflow-hidden mb-10 py-6">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={190}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 max-w-4xl mx-auto h-full"
        >
          <h2 className="font-orbitron text-5xl font-medium tracking-tight leading-snug text-balance text-center capitalize text-white">
            <span className=" font-sora text-6xl font-semibold text-indigo-500">
              AI
            </span>{" "}
            that learns from you everyday
          </h2>
          <p className="text-2xl font-sora  bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text text-center text-balance mt-8">
            Beyong the capibilities of your everyday AI. Much more powerful and
            helpful. Made for You by You. Enter the New Era of descicion making.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-quicksand">
              Log In
            </button>
            <button className="bg-gray-600 px-4 py-2 rounded-lg text-white font-quicksand ">
              Watch trailer
            </button>
          </div>
        </Vortex>
      </div>
    </section>
  );
}
