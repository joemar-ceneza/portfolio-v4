import { NextResponse } from "next/server";

const GITHUB_USERNAME = "joemar-ceneza";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  try {
    const repoRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const repos = await repoRes.json();

    let totalCommits = 0;

    for (const repo of repos) {
      const commitsRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contributors`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      const contributors = await commitsRes.json();

      const self = contributors.find((c: any) => c.login === GITHUB_USERNAME);
      if (self) {
        totalCommits += self.contributions;
      }
    }

    return NextResponse.json({ totalCommits });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch commits" }, { status: 500 });
  }
}
