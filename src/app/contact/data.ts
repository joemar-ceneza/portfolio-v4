import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ContactInfo, ServiceOption } from "./types";
import React from "react";

export const contactInfo: ContactInfo[] = [
  {
    icon: React.createElement(FaPhoneAlt),
    title: "Phone",
    description: "(+63) 977 739 7565",
  },
  {
    icon: React.createElement(FaEnvelope),
    title: "Email",
    description: "joemar.ceneza@gmail.com",
  },
  {
    icon: React.createElement(FaMapMarkerAlt),
    title: "Address",
    description: "Jojo St, Baesa Quezon City",
  },
];

export const services: ServiceOption[] = [
  { value: "development", label: "Web Development" },
  { value: "seo", label: "SEO Optimization" },
  { value: "uiux", label: "UI/UX Design" },
  { value: "logo", label: "Logo Design" },
];
