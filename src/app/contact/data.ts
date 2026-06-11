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
    title: "Location",
    description: "Quezon City, Philippines",
  },
];

export const services: ServiceOption[] = [
  { value: "development", label: "Full-Stack Development" },
  { value: "seo", label: "SEO" },
  { value: "other", label: "Something else" },
];
