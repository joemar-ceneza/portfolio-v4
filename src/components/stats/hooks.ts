import { useState, useEffect } from "react";

export function useCommits() {
  const [commits, setCommits] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch("/api/github-commits");
        const data = await res.json();
        setCommits(data.totalCommits);
      } catch {
        setCommits(0);
      }
    }
    fetchCommits();
  }, []);

  return commits;
}
