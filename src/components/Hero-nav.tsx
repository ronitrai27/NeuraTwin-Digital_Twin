"use client";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import { LuChevronDown, LuAlignLeft, LuLogOut, LuX } from "react-icons/lu";
import Image from "next/image";
const HeroNav = () => {
  const { currentUser } = useAppContext();
  return (
    <nav className=" bg-transparent w-full max-[420px]:px-3 max-[600px]:px-6 px-10  py-3 flex items-center  justify-between">
      {/* MENU */}
      <div>
        <LuAlignLeft
          size={24}
          className="text-white cursor-pointer md:scale-x-125"
        />
      </div>
      {/* LOGO */}
      <div className="">
        <h2
          className={`font-sora font-semibold tracking-tight transition-all duration-300 text-white max-[420px]:text-[20px] max-[500px]:text-[24px] text-[30px]`}
        >
          <span className="bg-gradient-to-b from-white via-gray-400 to-indigo-600 text-transparent bg-clip-text [-webkit-background-clip:text]">
            Neura
          </span>
          Twin
        </h2>
      </div>
      {/* PROFILE */}
      <div className="flex items-center gap-2">
        <Image
          src={
            currentUser?.gender?.toLowerCase() === "male"
              ? "/boy1.jpg"
              : "/girl1.jpg"
          }
          alt="Avatar"
          width={0}
          height={0}
          sizes="(min-width: 1000px) 100px, (min-width: 500px) 70px, 45px"
          className="rounded-full w-[45px] sm:w-[50px] xl:w-[60px] h-auto"
        />

        <p className="max-[500px]:hidden font-sora text-white text-[18px] capitalize">
          {" "}
          {currentUser?.name || "User"}
        </p>
      </div>
    </nav>
  );
};

export default HeroNav;
