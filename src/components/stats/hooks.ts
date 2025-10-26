import { useState, useEffect } from "react";

export function useCommits() {
  const [commits, setCommits] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommits() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/github-commits");
        if (!res.ok) throw new Error("Failed to fetch commits");
        const data = await res.json();
        setCommits(data.totalCommits);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load commits");
        setCommits(0);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCommits();
  }, []);

  return { commits, isLoading, error };
}
