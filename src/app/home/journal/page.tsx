"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { journalSchema, JournalInput } from "@/schemas/journalSchema";
import { toast } from "react-hot-toast";
import api from "@/lib/api";
import { LuCoffee } from "react-icons/lu";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader2 } from "lucide-react";
import dayjs from "dayjs";
import { Journal } from "@/types/JournalSchema";
import { motion } from "framer-motion";
import { debounce } from "@/lib/debaounce";

const JournalPage = () => {
  const {
    currentUser,
    loading,
    speak,
    journals,
    fetchJournals,
    hasMoreJournals,
    addJournal,
  } = useAppContext();
  const [dateDisplay, setDateDisplay] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const isFetching = useRef(false); // To prevent multiple fetches for journal

  // Fetch page 1 journals on mount--------------------------
  useEffect(() => {
    fetchJournals(1);
  }, []);

  // Debounced fetchNext function
  const fetchNext = debounce(async () => {
    if (isFetching.current || !hasMoreJournals) return;

    isFetching.current = true;

    const nextPage = page + 1;
    await fetchJournals(nextPage);
    setPage(nextPage);

    isFetching.current = false;
  }, 2000); // 300ms debounce

  // ---------------------------FORM------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JournalInput>({
    resolver: zodResolver(journalSchema),
  });
  const journalText = watch("text") || "";
  const wordCount = journalText.trim().split(/\s+/).filter(Boolean).length;

  const onSubmit = async (data: JournalInput) => {
    try {
      const isFirstJournal = journals.length === 0;
      const res = await api.post("/api/journal/add-journal", data);
      const newJournal: Journal = res.data.journal;
      addJournal(newJournal);
      toast.success("Journal saved!");
      reset();

      // MESSAGES TO ORB ---------------------
      const firstTimeMessage = `Great Job ${currentUser?.name}. You just submitted your very first Journal. Keep the spirit high. I learn daily from your journals. Keep writing Journals daily.`;

      const orbResponses = [
        `Well done! ${currentUser?.name}. for your today's journal.`,
        `Great job! ${currentUser?.name}. You successfully completed today's streak.`,
        `Great, I can see your progress ${currentUser?.name}.`,
        `Thank you for sharing your today's journal with me, ${currentUser?.name}. I am learning about you daily.`,
      ];

      const message = isFirstJournal
        ? firstTimeMessage
        : orbResponses[Math.floor(Math.random() * orbResponses.length)];

      speak(message, {
        rate: 1,
        pitch: 1.1,
        lang: "en-US",
        voiceName: "Microsoft Hazel - English (United Kingdom)",
      });
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong.");
    }
  };

  // ORB RESPONSES --------------
  const orbResponses = [
    `well done! ${currentUser?.name}. for your today's journal.`,
    `great job! ${currentUser?.name}. You successfully completed today's streak.`,
    `great , I can see your progress ${currentUser?.name}.`,
    `thank you for sharing your todays's journal with me,  ${currentUser?.name}. I am learning bout you daily.`,
  ];

  const message = orbResponses[Math.floor(Math.random() * orbResponses.length)];

  // TIME UPDATE -------------------------------------------------

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, "0");
      const dayName = now.toLocaleString("en-US", { weekday: "short" }); // e.g., "Sun"
      setDateDisplay(`${day} / ${dayName}`);
    };

    // Initial update
    updateDate();

    // Set interval to update every second
    const intervalId = setInterval(updateDate, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // if (loading) return <div>Loading...</div>;

  return (
    <section>
      <main className="px-6 max-[370px]:px-3 py-4 min-[600px]:p-6 mt-3 max-w-[1000px] mx-auto  h-full">
        <div className="flex  items-center gap-3">
          <h1 className="text-2xl min-[600px]:text-4xl font-medium text-white font-sora">
            Your Daily Journal
          </h1>
          <Image
            src="/fire.png"
            alt="Journal"
            width={40}
            height={40}
            className=""
          />
        </div>

        <h3 className="text-gray-400 font-inter font-light mt-5 text-[16px] min-[600px]:text-[18px] min-[600px]:max-w-1/2">
          Write down your thoughts, your experience today, any events that
          happened today or anything that you want and your AI Twin should know.
        </h3>

        <p className="text-gray-400 flex items-center gap-2 font-inter text-base my-5">
          <LuCoffee size={22} className="text-gray-400" /> {dateDisplay}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full mb-10"
        >
          <div>
            <textarea
              rows={15}
              className="w-full p-4 border border-gray-400 bg-gray-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-lg placeholder:text-gray-400 text-white font-inter"
              placeholder="How was your day?"
              {...register("text")}
            />
            <div className="text-sm text-gray-400 mt-1 w-full text-right font-inter">
              Word count: {wordCount}/250
            </div>
            {errors.text && (
              <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 font-sora text-center mx-auto flex justify-center"
          >
            {isSubmitting ? "Submitting..." : "Complete"}
          </button>
        </form>

        {/* INFINITE SCROLL HISTORY */}
        <h2 className="font-sora text-xl text-white text-center font-medium underline underline-offset-4 mt-5 mb-10">
          Your Journal History
        </h2>

        <InfiniteScroll
          dataLength={journals.length}
          next={fetchNext}
          hasMore={hasMoreJournals}
          loader={
            <div className="flex justify-center py-4">
              <Loader2 className="animate-spin text-white" />
            </div>
          }
          endMessage={
            <p className="text-center text-sm text-gray-400 mt-4 font-inter">
              No more entries.
            </p>
          }
        >
          <div className="space-y-6">
            {journals.map((entry, idx) => (
              <motion.div
                key={entry._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="border-[1px] border-gray-200/30 rounded-md px-3 py-3 bg-white/30 shadow-sm w-full min-[600px]:w-[50%] mx-auto"
              >
                <p className="text-white font-inter text-base">{entry.text}</p>
                <p className="text-sm text-gray-200 mt-2 font-sora">
                  {dayjs(entry.createdAt).format("MMM D, YYYY • h:mm A")}
                </p>
              </motion.div>
            ))}
          </div>
        </InfiniteScroll>
      </main>
    </section>
  );
};

export default JournalPage;
