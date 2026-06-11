import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Joemar Ceneza is a full-stack developer with a background in operations and compliance, building with Next.js, React, and Node.js.",
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
