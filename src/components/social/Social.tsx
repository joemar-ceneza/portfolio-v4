import { socials } from "./data";
import SocialLink from "./SocialLink";
import { SocialProps } from "./types";

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <SocialLink key={item.name} item={item} iconStyles={iconStyles} />
      ))}
    </div>
  );
}
