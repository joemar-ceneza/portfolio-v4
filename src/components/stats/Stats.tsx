"use client";

import StatCard from "./StatCard";
import { staticStats, type Stat } from "./data";
import { useCommits } from "./hooks";

export default function Stats() {
  const commits = useCommits();
  const isLoading = commits === null;

  const allStats: Stat[] = [...staticStats, { num: commits ?? 0, text: "Code commits", isDynamic: true }];

  return (
    <section className="pt-4 pb-12 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {allStats.map(({ num, text }) => (
            <StatCard key={text} num={num} text={text} isLoading={isLoading} />
          ))}
        </div>
      </div>
    </section>
  );
}
