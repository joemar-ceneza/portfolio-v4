import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { ReactElement } from "react";

export type SocialItem = {
  icon: ReactElement;
  path: string;
};

export const socials: SocialItem[] = [
  {
    icon: React.createElement(FaGithub),
    path: "https://github.com/joemar-ceneza",
  },
  {
    icon: React.createElement(FaLinkedinIn),
    path: "https://www.linkedin.com/in/joemarceneza/",
  },
];
