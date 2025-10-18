"use client";

import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaStripe,
  FaNpm,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiMongoose,
  SiPrisma,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiStrapi,
  SiGnubash,
  SiGithubpages,
  SiNetlify,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Hi there! I'm Joemar, I thrive on building user-friendly interfaces and creating seamless digital experiences. Whether working solo or collaborating with a team, I’m always looking for ways to solve problems and bring creative ideas to life.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Joemar Ceneza",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 977 739 7565",
    },
    {
      fieldName: "Experience",
      fieldValue: "9+ Years",
    },
    {
      fieldName: "Teams",
      fieldValue: "joemar.ceneza",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Email",
      fieldValue: "joemar.ceneza@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tagalog",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "I bring a solid background in professional operations along with hands-on experience in web development. Currently working as a freelance web developer, I focus on building responsive, user-friendly websites using modern tools and best practices. My previous roles in compliance and advertising have helped shape my attention to detail, communication skills, and ability to work in fast-paced environments.",
  items: [
    {
      company: "Freelance (Remote)",
      position: "Freelance Web Developer",
      duration: "2025 - Present",
    },
    {
      company: "Leekie Enterprise Inc.",
      position: "Account Compliance",
      duration: "2016 - Present",
    },
    {
      company: "Wide-Out Workforces Inc.",
      position: "Advertising Operation Specialist",
      duration: "2015 - 2016",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "Combining a BS in Information Technology with hands-on web development training, I’ve gained both foundational knowledge and up-to-date technical skills to build real-world web applications.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Web Development Bootcamp",
      duration: "2023 - 2024",
    },
    {
      institution: "STI College Muñoz - EDSA",
      degree: "BS in Information Technology",
      duration: "2011 - 2015",
    },
  ],
};

const skills = {
  icon: "",
  title: "My skills",
  description:
    "I focus on building responsive, accessible, and user-friendly websites using modern web technologies. I enjoy writing clean code, solving problems, and continuously learning to improve my skills and deliver better results.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaSass />,
      name: "sass",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap 5",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript ES 6",
    },
    {
      icon: <SiJquery />,
      name: "JQuery",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <SiMongoose />,
      name: "mongoose",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiStrapi />,
      name: "strapi",
    },
    {
      icon: <FaStripe />,
      name: "stripe",
    },
    {
      icon: <SiGnubash />,
      name: "bash command line",
    },
    {
      icon: <FaNpm />,
      name: "node package manager",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <SiGithubpages />,
      name: "github pages",
    },
    {
      icon: <SiNetlify />,
      name: "netlify",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about-me">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:max-w-full xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:max-w-full xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:max-w-full xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about-me" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:max-w-full xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, idx) => {
                    return (
                      <li key={idx} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
