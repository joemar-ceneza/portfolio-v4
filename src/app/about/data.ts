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
import React from "react";
import { About, Experience, Education, Skills } from "./types";

export const about: About = {
  title: "About me",
  description:
    "Before I wrote my first line of production code, I spent close to a decade in operations and compliance — work that meant tight deadlines, direct contact with stakeholders, and catching the details other people missed. In 2023 I started learning web development, and since 2025 I've been working as a freelance full-stack developer, building with Next.js, React, Node.js, and SQL/NoSQL databases — including a full e-commerce platform with live Stripe payments. I'm now looking for a full-time engineering role where I can bring that same reliability to a product team.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Joemar Ceneza",
    },
    {
      fieldName: "Email",
      fieldValue: "joemar.ceneza@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 977 739 7565",
    },
    {
      fieldName: "Location",
      fieldValue: "Quezon City, Philippines",
    },
    {
      fieldName: "Dev Experience",
      fieldValue: "1+ Year (Freelance)",
    },
    {
      fieldName: "Total Experience",
      fieldValue: "9+ Years (Ops & Compliance)",
    },
    {
      fieldName: "Availability",
      fieldValue: "Open to full-time & freelance",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tagalog",
    },
  ],
};

export const experience: Experience = {
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

export const education: Education = {
  title: "My education",
  description:
    "Combining a BS in Information Technology with hands-on web development training, I've gained both foundational knowledge and up-to-date technical skills to build real-world web applications.",
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

export const skills: Skills = {
  title: "My skills",
  description:
    "I focus on building responsive, accessible, and user-friendly websites using modern web technologies. I enjoy writing clean code, solving problems, and continuously learning to improve my skills and deliver better results.",
  categories: ["Core Stack", "Databases & ORMs", "Also Experienced With", "Tools"],
  list: [
    // Core Stack
    {
      icon: React.createElement(FaReact),
      name: "React JS",
      category: "Core Stack",
    },
    {
      icon: React.createElement(SiNextdotjs),
      name: "Next JS",
      category: "Core Stack",
    },
    {
      icon: React.createElement(FaNodeJs),
      name: "Node JS",
      category: "Core Stack",
    },
    {
      icon: React.createElement(SiExpress),
      name: "Express JS",
      category: "Core Stack",
    },
    {
      icon: React.createElement(SiTypescript),
      name: "TypeScript",
      category: "Core Stack",
    },
    {
      icon: React.createElement(SiTailwindcss),
      name: "TailwindCSS",
      category: "Core Stack",
    },
    // Databases & ORMs
    {
      icon: React.createElement(SiMysql),
      name: "MySQL",
      category: "Databases & ORMs",
    },
    {
      icon: React.createElement(SiPostgresql),
      name: "PostgreSQL",
      category: "Databases & ORMs",
    },
    {
      icon: React.createElement(SiMongodb),
      name: "MongoDB",
      category: "Databases & ORMs",
    },
    {
      icon: React.createElement(SiMongoose),
      name: "mongoose",
      category: "Databases & ORMs",
    },
    {
      icon: React.createElement(SiPrisma),
      name: "prisma",
      category: "Databases & ORMs",
    },
    // Also experienced with
    {
      icon: React.createElement(FaHtml5),
      name: "HTML 5",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(FaCss3),
      name: "CSS 3",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(FaSass),
      name: "sass",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(FaBootstrap),
      name: "bootstrap 5",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(FaJs),
      name: "JavaScript ES 6",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(SiJquery),
      name: "JQuery",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(FaPhp),
      name: "PHP",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(SiStrapi),
      name: "strapi",
      category: "Also Experienced With",
    },
    {
      icon: React.createElement(FaStripe),
      name: "stripe",
      category: "Also Experienced With",
    },
    // Tools
    {
      icon: React.createElement(SiGnubash),
      name: "bash command line",
      category: "Tools",
    },
    {
      icon: React.createElement(FaNpm),
      name: "node package manager",
      category: "Tools",
    },
    {
      icon: React.createElement(FaGit),
      name: "git",
      category: "Tools",
    },
    {
      icon: React.createElement(FaGithub),
      name: "github",
      category: "Tools",
    },
    {
      icon: React.createElement(SiGithubpages),
      name: "github pages",
      category: "Tools",
    },
    {
      icon: React.createElement(SiNetlify),
      name: "netlify",
      category: "Tools",
    },
  ],
};
