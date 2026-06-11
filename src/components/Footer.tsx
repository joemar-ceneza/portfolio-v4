import Link from "next/link";
import Social from "@/components/social/Social";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto py-12 grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/">
            <h2 className="text-2xl font-semibold">
              Joemar<span className="text-accent">.</span>
            </h2>
          </Link>
          <p className="max-w-[280px] text-sm text-white/60">
            Full-stack developer building fast, reliable web apps with Next.js, React, and Node.js.
          </p>
          <Social
            containerStyles="flex gap-4"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
        <div className="flex flex-col items-center gap-3 md:items-start">
          <h3 className="text-xs uppercase tracking-[2px] text-white/40">Navigate</h3>
          {footerLinks.map((link) => (
            <Link key={link.path} href={link.path} className="text-white/60 transition-colors hover:text-accent">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 md:items-start">
          <h3 className="text-xs uppercase tracking-[2px] text-white/40">Get in Touch</h3>
          <a href="mailto:joemar.ceneza@gmail.com" className="text-white/60 transition-colors hover:text-accent">
            joemar.ceneza@gmail.com
          </a>
          <p className="text-white/60">Quezon City, Philippines</p>
          <Link href="/contact" className="text-white/60 transition-colors hover:text-accent">
            Let&apos;s work together
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 text-center">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Joemar Ceneza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
