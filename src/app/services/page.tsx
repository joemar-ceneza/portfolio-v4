"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end web development from frontend to backend. Building scalable, performant applications with modern technologies.",
    href: "",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces and seamless user experiences that combine aesthetics with functionality.",
    href: "",
    tech: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Crafting unique brand identities through custom logos that communicate your vision effectively.",
    href: "",
    tech: ["Illustrator", "Branding", "Vector Graphics", "Style Guides"],
  },
  {
    num: "04",
    title: "SEO",
    description: "Optimizing websites to rank higher in search results and drive qualified organic traffic.",
    href: "",
    tech: ["Analytics", "Keywords", "Technical SEO", "Content Strategy"],
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-accent/50 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl font-black text-transparent [-webkit-text-stroke:2px_#ffffff] group-hover:[-webkit-text-stroke:2px_#00ff99] transition-all duration-500">
                  {item.num}
                </div>
                <Link href={item.href}>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <BsArrowDownRight className="text-accent group-hover:text-white text-lg" />
                  </div>
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10 group-hover:border-accent/30 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
