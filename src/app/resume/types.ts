import { ReactElement } from "react";

type IconType = string | ReactElement;

interface BaseSection {
  icon?: IconType;
  title: string;
  description: string;
}

interface AboutItem {
  fieldName: string;
  fieldValue: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface SkillList {
  icon: ReactElement;
  name: string;
}

export interface About {
  title: string;
  description: string;
  info: ReadonlyArray<AboutItem>;
}

export interface Experience extends BaseSection {
  items: ReadonlyArray<ExperienceItem>;
}

export interface Education extends BaseSection {
  items: ReadonlyArray<EducationItem>;
}

export interface Skill extends BaseSection {
  list: ReadonlyArray<SkillList>;
}
