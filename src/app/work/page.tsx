"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    number: "01",
    category: "front-end",
    title: "CSV Session Processor",
    description:
      "A web tool that automatically analyzes gaming CSV data and detects separate playing sessions based on time gaps between games.",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "TypeScript",
      },
    ],
    image: "/assets/work/csv-session-processor.jpg",
    live: "https://csv-session-processor.vercel.app/",
    github: "",
  },
  {
    number: "02",
    category: "full stack",
    title: "mood tracker app",
    description:
      "A mood tracker app that allows users to log in and out, track their emotional well-being, and record their daily mood",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "TypeScript",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/mood-tracking-app.jpg",
    live: "",
    github: "",
  },
  {
    number: "03",
    category: "fullstack",
    title: "Our Home e-commerce",
    description:
      "A full stack e-commerce website for home furniture, featuring product listings, shopping cart functionality, user checkout, and secure payment processing via Stripe integration.",
    stack: [
      {
        name: "React JS",
      },
      {
        name: "Node/Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Stripe API",
      },
    ],
    image: "/assets/work/our-home.jpg",
    live: "",
    github: "",
  },
  {
    number: "04",
    category: "fullstack",
    title: "photo land",
    description:
      "A full stack e-commerce website for selling cameras. Users can browse camera products, add items to a shopping cart, and securely check out using Stripe for payment processing.",
    stack: [
      {
        name: "React JS",
      },
      {
        name: "Node/Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Stripe API",
      },
    ],
    image: "/assets/work/camera-haus.jpg",
    live: "",
    github: "",
  },
  {
    number: "05",
    category: "frontend",
    title: "portfolio v3",
    description:
      "A modern personal portfolio website showcasing projects, skills, and experience. Built with a responsive design and smooth animations for a clean, professional user experience.",
    stack: [
      {
        name: "Next JS",
      },
      {
        name: "TailwinCSS",
      },
      {
        name: "TypeScript",
      },
    ],
    image: "/assets/work/portfolio-v3.jpg",
    live: "",
    github: "",
  },
  {
    number: "06",
    category: "frontend",
    title: "portfolio v2",
    description:
      "A personal portfolio website (v2) built with HTML and CSS, showcasing projects, skills, and contact information with a clean and responsive design.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/portfolio-v2.jpg",
    live: "",
    github: "",
  },
  {
    number: "07",
    category: "frontend",
    title: "portfolio v1",
    description:
      "A personal portfolio website (v1) built with HTML and CSS, showcasing projects, skills, and contact information with a clean and responsive design.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/portfolio-v1.jpg",
    live: "",
    github: "",
  },
  {
    number: "08",
    category: "frontend",
    title: "e-shopping",
    description:
      "A front-end e-commerce website for clothing, built with React and styled using Tailwind CSS. It fetches product data from a ready-to-use clothing API and allows users to browse items with a clean, responsive interface.",
    stack: [
      {
        name: "React JS",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Clothing API",
      },
    ],
    image: "/assets/work/e-shopping.jpg",
    live: "",
    github: "",
  },
  {
    number: "09",
    category: "frontend",
    title: "huddle landing page",
    description:
      "A responsive landing page for Huddle, built with React JS and TailwindCSS. The design features a clean layout, call-to-action sections, and modern styling for a professional web presence.",
    stack: [
      {
        name: "React JS",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/huddle-landing-page.jpg",
    live: "",
    github: "",
  },
  {
    number: "10",
    category: "frontend",
    title: "simon game",
    description:
      "A classic Simon memory game built with HTML, CSS, and JavaScript. Players repeat increasingly complex sequences of colors and sounds, testing their memory and concentration skills.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/assets/work/simon-game.jpg",
    live: "",
    github: "",
  },
];

export default function Services() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperInstance) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl font-black text-transparent [-webkit-text-stroke:2px_#ffffff]">
                {project.number}
              </div>
              <span className="w-fit px-6 py-1 text-sm font-semibold text-black bg-accent rounded-full capitalize">
                {project.category}
              </span>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, idx) => {
                  return (
                    <li key={idx} className="text-xl text-accent">
                      {item.name}
                      {idx !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"> </div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((item, idx) => {
                return (
                  <SwiperSlide key={idx} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt=""></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-black"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
