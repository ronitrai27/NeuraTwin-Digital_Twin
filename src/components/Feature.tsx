import React from "react";
import { Globe } from "@/components/magicui/globe";
import { AnimatedBeamDemo } from "./Beam";
import Image from "next/image";
const Feature = () => {
  return (
    <section className="mt-14">
      <main>
        <h3 className="font-sora text-3xl bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text tracking-tight font-medium text-center">
          Witness all the Possibilities
        </h3>
        <h1 className="font-orbitron text-5xl tracking-tight text-white mt-2 text-center">
          New Way To Dominate Compitition
        </h1>

        {/* GRID LAYOUT */}
        <div className="relative w-full mt-10 pb-14  bg-gradient-to-b from-black via-indigo-950 to-indigo-900">
          {/* <div className="max-[550px]:w-[25rem] w-full  absolute -top-44 left-1/2 -translate-x-1/2 z-0 ">
            <Spline scene="https://prod.spline.desig  n/gBJ5ZJ1aDXdy2l0E/scene.splinecode" />
          </div> */}

          <div className="md:grid flex flex-col grid-cols-5 grid-rows-5 min-[768px]:gap-4 gap-8 w-full mx-auto min-[1000px]:px-10 min-[768px]:px-6 max-[450px]:px-4 px-16  md:h-[600px] mt-20 ">
            {/* Box 1: 2 columns wide, spans 5 rows */}
            <div className="bg-gradient-to-t from-black to-gray-700 text-white  md:col-span-2 md:row-span-6 rounded-xl md:h-auto h-[280px] relative overflow-hidden flex flex-col justify-between px-4 min-[900px]:py-10 py-4">
              <div className="text-center flex flex-col ">
                <h3 className="font-sora min-[900px]:text-3xl text-[26px] font-medium tracking-tight text-balance">
                  Tech used by around the{" "}
                  <span className=" uppercase text-indigo-400 font-semibold font-orbitron">
                    globe
                  </span>
                </h3>
                <p className=" font-inter text-center text-balance md:mt-10 md:text-2xl  bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text">
                  Become unstopable with NeuraTwin, and beat your previous
                  version. Millions of people already started using.
                </p>
              </div>
              <div className="">
                <Globe className="min-[900px]:top-[50%] min-[768px]:top-[65%] top-[45%]" />
              </div>
            </div>

            {/* Box 2: 3 columns wide, spans 3 rows */}
            <div className="bg-gradient-to-t from-black to-gray-700 text-white p-4 md:col-span-3 md:row-span-3 rounded-xl h-auto relative overflow-hidden">
              {/* Bottom overlay shadow */}
              {/* <div className="absolute bottom-0 left-0 w-full h-[7rem] bg-gradient-to-t from-black to-transparent backdrop-blur-sm z-40" /> */}

              {/* Top content above overlay */}
              <div className="relative z-20 ">
                <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-white font-sora text-2xl text-center">
                  More Than just GPT
                </h2>
                <p className="font-quicksand text-lg tracking-tight max-[580px]:hidden absolute top-16 left-1/2 -translate-x-1/2  text-balance ">
                  Beyond the capabilities of your normal Chatbot
                </p>
                <AnimatedBeamDemo />
              </div>
            </div>

            {/* Box 3: 3 columns wide, spans 3 rows */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6 py-5 md:col-span-3 md:row-span-3 rounded-xl text-center min-[768px]:h-auto h-[250px] relative flex items-center justify-center ">
              <Image
                src="/robot.png"
                alt="robot"
                width={800}
                height={800}
                className=" absolute -top-[40%] -left-[45%] scale-110"
              />
              <div className="">
                <h2 className="font-orbitron text-white text-3xl font-medium tracking-tight">
                  Enter New Era of AI
                </h2>
                <p className=" font-inter text-center text-balance text-xl mt-5 bg-gradient-to-b from-white via-gray-400 to-indigo-800/20 text-transparent bg-clip-text">
                  Journaling , insights , behaviour pattern , mood and Goal
                  tracking and much more all in One Place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Feature;
