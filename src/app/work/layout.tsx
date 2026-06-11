import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Joemar Ceneza, including full-stack apps built with Next.js, React, and Node.js.",
};

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
