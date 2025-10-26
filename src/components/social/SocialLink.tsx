import Link from "next/link";
import type { SocialLinkProps } from "./type";

export default function SocialLink({ item, iconStyles }: SocialLinkProps) {
  return (
    <Link
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${item.name} profile`}
      className={iconStyles}>
      {item.icon}
    </Link>
  );
}
