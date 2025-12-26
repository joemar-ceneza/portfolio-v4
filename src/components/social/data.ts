import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SocialItem } from "./types";

export const socials: SocialItem[] = [
  {
    icon: React.createElement(FaGithub),
    name: "GitHub",
    path: "https://github.com/joemar-ceneza",
  },
  {
    icon: React.createElement(FaLinkedinIn),
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/joemarceneza/",
  },
];
