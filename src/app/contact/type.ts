import { ReactElement } from "react";

type IconType = string | ReactElement;

export interface ContactInfo {
  icon?: IconType;
  title: string;
  description: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}
