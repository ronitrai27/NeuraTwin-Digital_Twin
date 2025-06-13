"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import api from "@/lib/api";
import toast from "react-hot-toast";
import HeroNav from "@/components/Hero-nav";
import Orb from "../../components/ui/Orb";
import { useSpeech } from "@/lib/useSpeech";
import styled from "styled-components";
import Cookies from "js-cookie";

const page = () => {
  const { currentUser, setCurrentUser } = useAppContext();
  const { speak, isSpeaking } = useSpeech();

  // ------------------ FETCH USER DATA -------------------------
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/api/user/me");
        if (res.data.success) {
          setCurrentUser(res.data.user);
        } else {
          toast.error("Failed to load user");
        }
      } catch (err: any) {
        toast.error("User not logged in or token invalid");
      }
    };

    if (!currentUser) fetchUser();
  }, []);
  // ------------------------SPEAKING --------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      const shouldGreet = Cookies.get("firstLogin");
      // console.log(" Checking for firstLogin cookie:", shouldGreet);

      if (currentUser?.name && shouldGreet) {
        // console.log(" Cookie found. Initiating greeting...");

        speak(
          `Welcome ${currentUser.name},I'm your AI-powered twin. I will help you become better. I will guide you through your journey. Are you Ready!`,
          {
            rate: 1,
            pitch: 1.1,
            lang: "en-US",
            voiceName: "Microsoft Hazel - English (United Kingdom)",
          }
        );

        Cookies.remove("firstLogin");
        // console.log("🧹 firstLogin cookie removed after greeting.");
      } else {
        console.log(" Greeting not triggered. Conditions not met.");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentUser]);

  // ---------------------------------------RANDOME GREETING -------------------------------------
  const orbResponses = [
    "Do you need any help? Try asking!",
    "I'm NeuraTwin, your own smart reflection.",
    "Let's start working and grinding together.",
    "Did you click me by mistake? No worries, I'm here to help!",
    "Curious about something? Just ask me.",
  ];
  const handleOrbClick = () => {
    if (isSpeaking) return; // prevent overlapping speeches

    const message =
      orbResponses[Math.floor(Math.random() * orbResponses.length)];

    speak(message, {
      rate: 1,
      pitch: 1.1,
      lang: "en-US",
      voiceName: "Microsoft Hazel - English (United Kingdom)", // or your chosen female voice
    });
  };

  // I'm your AI-powered twin. I will help you become better. I will guide you through your journey. Are you Ready!

  // useEffect(() => {
  //   const voices = window.speechSynthesis.getVoices();
  //   if (voices.length === 0) {
  //     window.speechSynthesis.onvoiceschanged = () => {
  //       console.log("Available voices:", window.speechSynthesis.getVoices());
  //     };
  //   } else {
  //     console.log("Available voices:", voices);
  //   }
  // }, []);
  //----------------- TYPE WRITER FOR DYNAMIC HEADING -------------------------
  const greetings = [
    (name: string) => `Welcome ${name}`,
    (name: string) => `How's going ${name}?`,
    (name: string) => `Don't stop ${name}`,
    (name: string) => `Hard day ${name}?`,
    (name: string) => `Keep hustling ${name}`,
    (name: string) => `You doing great ${name}`,
    (name: string) => `Keep it up ${name}`,
  ];

  const [text, setText] = useState<string>("");
  const [fullText, setFullText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [dayInfo, setDayInfo] = useState({ day: "", year: "" });

  useEffect(() => {
    if (!currentUser?.name) return;

    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    setFullText(randomGreeting(currentUser.name));

    const now = new Date();
    const day = now.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Sunday"
    const year = now.getFullYear().toString(); // e.g., "2025"
    setDayInfo({ day, year });
  }, [currentUser]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="bg-gradient-to-b from-black  to-[#7B68DA] w-full min-h-screen">
      <HeroNav />
      <main className="p-4 min-[600px]:py-6 min-[600px]:px-8 max-w-[1200px] mx-auto  h-full">
        <div className=" flex flex-col items-start">
          <h1 className="font-sora text-left text-[22px] min-[600px]:text-[32px] min-[1000px]:text-[38px] text-white font-medium tracking-tight capitalize">
            {text}
          </h1>
          <p className="text-gray-400 font-outfit text-[18px] font-light">
            {dayInfo.day}, {dayInfo.year}
          </p>
        </div>

        <div
          onClick={handleOrbClick}
          className="w-full h-[320px] min-[650px]:h-[440px] relative z-0 mt-10 cursor-pointer"
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={20}
            forceHoverState={false}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sora text-4xl max-[650]:text-3xl text-white flex items-center justify-center">
            {isSpeaking ? (
              <StyledWrapper>
                <div className="loading">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </StyledWrapper>
            ) : (
              <h1 className="bg-gradient-to-b from-white via-gray-400/70 to-transparent text-transparent bg-clip-text [-webkit-background-clip:text]">
                Ask Me!
              </h1>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};
const StyledWrapper = styled.div`
  .loading {
    --speed-of-animation: 0.9s;
    --gap: 6px;
    --first-color: #7b68da;
    --second-color: #6c53e6;
    --third-color: #7f3ce2;
    --fourth-color: #35a4cc;
    --fifth-color: #fff3ff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    gap: 6px;
    height: 100px;
  }

  .loading span {
    width: 4px;
    height: 50px;
    background: var(--first-color);
    animation: scale var(--speed-of-animation) ease-in-out infinite;
  }

  .loading span:nth-child(2) {
    background: var(--second-color);
    animation-delay: -0.8s;
  }

  .loading span:nth-child(3) {
    background: var(--third-color);
    animation-delay: -0.7s;
  }

  .loading span:nth-child(4) {
    background: var(--fourth-color);
    animation-delay: -0.6s;
  }

  .loading span:nth-child(5) {
    background: var(--fifth-color);
    animation-delay: -0.5s;
  }

  @keyframes scale {
    0%,
    40%,
    100% {
      transform: scaleY(0.05);
    }

    20% {
      transform: scaleY(1);
    }
  }
`;

export default page;
{
  /* <h1 className="text-2xl font-bold text-white">
        Welcome back, {currentUser?.name || "User"}
      </h1>
      <p className="text-gray-400">
        Occupation: {currentUser?.occupation || "Not specified"}
      </p> */
}
