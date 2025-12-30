import { ReactElement } from "react";

type IconType = ReactElement | React.ComponentType<{className?: string}>;

export interface AboutItem {
  fieldName: string;
  fieldValue: string;
  icon?: IconType;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface SkillList {
  icon: ReactElement;
  name: string;
}

export interface About {
  title: string;
  description: string;
  info: ReadonlyArray<AboutItem>;
}

export interface Experience {
  title: string;
  description: string;
  items: ReadonlyArray<ExperienceItem>;
}

export interface Education {
  title: string;
  description: string;
  items: ReadonlyArray<EducationItem>;
}

export interface Skills {
  title: string;
  description: string;
  list: ReadonlyArray<SkillList>;
}