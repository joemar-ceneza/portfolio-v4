import Link from "next/link";
import Social from "@/components/social/Social";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container mx-auto py-10 flex flex-col items-center gap-6 text-center">
        <Link href="/">
          <h2 className="text-2xl font-semibold">
            Joemar<span className="text-accent">.</span>
          </h2>
        </Link>
        <Social
          containerStyles="flex gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
        <p className="text-white/60 text-sm">
          <a href="mailto:joemar.ceneza@gmail.com" className="hover:text-accent">
            joemar.ceneza@gmail.com
          </a>
          {" · "}
          <Link href="/contact" className="hover:text-accent">
            Let&apos;s work together
          </Link>
        </p>
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Joemar Ceneza. All rights reserved.</p>
      </div>
    </footer>
  );
}
