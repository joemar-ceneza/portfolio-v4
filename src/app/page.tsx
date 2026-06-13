import Link from "next/link";
import { Button } from "@/components/ui/button";
import Social from "@/components/social/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <section className="flex-1 flex flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-14">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-base sm:text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />
              <span className="text-accent">Joemar Ceneza</span>
            </h1>
            <p className="max-w-[600px] mb-8 sm:mb-9 text-white/80 mx-auto xl:mx-0">
              I build modern web applications with Next.js, React, Node.js, and TypeScript. 
              Over the past 11 years in operations and compliance, I have developed strong problem-solving skills and used Python automation to improve workflows and efficiency.
              Today, I focus on building full-stack web applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Button asChild size="lg" className="uppercase cursor-pointer w-full sm:w-auto">
                <Link href="/work">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="uppercase cursor-pointer w-full sm:w-auto">
                <Link href="/contact">Let&apos;s Talk</Link>
              </Button>
            </div>
            <div className="my-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6 justify-center xl:justify-start"
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
