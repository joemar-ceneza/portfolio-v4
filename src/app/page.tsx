import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/social/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />
              <span className="text-accent">Joemar Ceneza</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I build fast, reliable web apps with Next.js, React, and Node.js — backed by 9+ years of solving
              problems under pressure in operations and compliance. Currently open to full-time roles.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button asChild size="lg" className="uppercase cursor-pointer">
                <Link href="/work">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="uppercase cursor-pointer">
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
            </div>
            <a
              href="/assets/JC Resume 2026.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors">
              <FiDownload />
              <span>Download Resume</span>
            </a>
            <div className="my-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
