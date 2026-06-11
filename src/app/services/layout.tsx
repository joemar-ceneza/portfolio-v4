import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack development and SEO services from Joemar Ceneza, built with Next.js, React, and Node.js.",
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
