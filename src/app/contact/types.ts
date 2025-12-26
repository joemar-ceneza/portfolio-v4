import { ReactNode } from "react";

export interface ContactInfo {
  icon?: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}