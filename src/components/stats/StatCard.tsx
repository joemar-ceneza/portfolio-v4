"use client";

import CountUp from "react-countup";

type StatCardProps = {
  num: number;
  text: string;
  isLoading?: boolean;
};

export default function StatCard({ num, text, isLoading }: StatCardProps) {
  return (
    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      {isLoading ? (
        <p className="text-xl text-white/50 animate-pulse">Loading...</p>
      ) : (
        <CountUp end={num} duration={5} className="text-4xl xl:text-6xl font-extrabold" />
      )}
      <p className={`${text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{text}</p>
    </div>
  );
}
