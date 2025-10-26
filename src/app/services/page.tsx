"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { services } from "./data";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.num}
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
