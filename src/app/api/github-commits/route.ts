import { NextResponse } from "next/server";
import type { Repo, Contributor, Cache } from "@/types/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

let cache: Cache | null = null;
const CACHE_DURATION = 15 * 60 * 1000;
export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GitHub token not provided" }, { status: 500 });
  }

  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json({ totalCommits: cache.totalCommits, cached: true });
  }

  try {
    const repoRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (!repoRes.ok) {
      throw new Error(`Failed to fetch repos: ${repoRes.status}`);
    }

    const repos: Repo[] = await repoRes.json();
    const commitPromises = repos.map(async (repo: Repo) => {
      const commitsRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contributors`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      if (!commitsRes.ok) {
        return 0;
      }
      const contributors: Contributor[] = await commitsRes.json();
      if (!Array.isArray(contributors)) return 0;
      const self = contributors.find((c) => c.login === GITHUB_USERNAME);
      return self ? self.contributions : 0;
    });

    const commitCounts = await Promise.all(commitPromises);
    const totalCommits = commitCounts.reduce((acc, curr) => acc + curr, 0);
    cache = {
      totalCommits,
      timestamp: Date.now(),
    };
    return NextResponse.json({ totalCommits, cached: false });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch commits" }, { status: 500 });
  }
}
