import Link from "next/link";
import type { SocialItem } from "./data";

type SocialLinkProps = {
  item: SocialItem;
  idx?: number;
  iconStyles?: string;
};

export default function SocialLink({ item, idx, iconStyles }: SocialLinkProps) {
  return (
    <Link
      href={item.path}
      key={idx}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${idx} profile`}
      className={iconStyles}>
      {item.icon}
    </Link>
  );
}
