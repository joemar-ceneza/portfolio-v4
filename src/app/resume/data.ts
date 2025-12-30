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

export const skills: Skills = {
  title: "My skills",
  description:
    "I focus on building responsive, accessible, and user-friendly websites using modern web technologies. I enjoy writing clean code, solving problems, and continuously learning to improve my skills and deliver better results.",
  list: [
    {
      icon: React.createElement(FaHtml5),
      name: "HTML 5",
    },
    {
      icon: React.createElement(FaCss3),
      name: "CSS 3",
    },
    {
      icon: React.createElement(FaSass),
      name: "sass",
    },
    {
      icon: React.createElement(FaBootstrap),
      name: "bootstrap 5",
    },
    {
      icon: React.createElement(SiTailwindcss),
      name: "TailwindCSS",
    },
    {
      icon: React.createElement(FaJs),
      name: "JavaScript ES 6",
    },
    {
      icon: React.createElement(SiJquery),
      name: "JQuery",
    },
    {
      icon: React.createElement(FaReact),
      name: "React JS",
    },
    {
      icon: React.createElement(SiNextdotjs),
      name: "Next JS",
    },
    {
      icon: React.createElement(FaNodeJs),
      name: "Node JS",
    },
    {
      icon: React.createElement(SiExpress),
      name: "Express JS",
    },
    {
      icon: React.createElement(SiMongoose),
      name: "mongoose",
    },
    {
      icon: React.createElement(SiPrisma),
      name: "prisma",
    },
    {
      icon: React.createElement(SiTypescript),
      name: "TypeScript",
    },
    {
      icon: React.createElement(FaPhp),
      name: "PHP",
    },
    {
      icon: React.createElement(SiMysql),
      name: "MySQL",
    },
    {
      icon: React.createElement(SiPostgresql),
      name: "PostgreSQL",
    },
    {
      icon: React.createElement(SiMongodb),
      name: "MongoDB",
    },
    {
      icon: React.createElement(SiStrapi),
      name: "strapi",
    },
    {
      icon: React.createElement(FaStripe),
      name: "stripe",
    },
    {
      icon: React.createElement(SiGnubash),
      name: "bash command line",
    },
    {
      icon: React.createElement(FaNpm),
      name: "node package manager",
    },
    {
      icon: React.createElement(FaGit),
      name: "git",
    },
    {
      icon: React.createElement(FaGithub),
      name: "github",
    },
    {
      icon: React.createElement(SiGithubpages),
      name: "github pages",
    },
    {
      icon: React.createElement(SiNetlify),
      name: "netlify",
    },
  ],
};
