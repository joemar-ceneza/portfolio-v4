"use client";

import CountUp from "react-countup";
import { StatCardProps } from "./types";

export default function StatCard({ num, text, isLoading }: StatCardProps) {
  return (
    <div className="flex gap-3 items-center justify-center xl:flex-1 xl:gap-4 xl:justify-start">
      {isLoading ? (
        <p className="text-xl text-white/50 animate-pulse">Loading...</p>
      ) : (
        <CountUp end={num} duration={5} className="text-3xl sm:text-4xl xl:text-6xl font-extrabold" />
      )}
      <p className={`${text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-sm sm:text-base text-white/80`}>{text}</p>
    </div>
  );
}
