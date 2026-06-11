"use client";

import StatCard from "./StatCard";
import { staticStats } from "./data";
import { useCommits } from "./hooks";
import { Stat } from "./types";

export default function Stats() {
  const { commits, isLoading, error } = useCommits();

  const allStats: Stat[] = [...staticStats, { num: error ? 0 : commits ?? 0, text: "Code commits", isDynamic: true }];

  return (
    <section className="pt-4 pb-12 xl:pt-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-[420px] mx-auto xl:max-w-none xl:flex xl:flex-wrap xl:gap-6">
          {allStats.map((item) => (
            <StatCard key={item.text} num={item.num} text={item.text} isLoading={isLoading} />
          ))}
        </div>
        {error && <p className="text-center text-white/60 text-sm">Unavailable</p>}
      </div>
    </section>
  );
}
