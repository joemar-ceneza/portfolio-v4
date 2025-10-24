import { socials } from "./data";
import SocialLink from "./SocialLink";

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => (
        <SocialLink key={idx} item={item} iconStyles={iconStyles} />
      ))}
    </div>
  );
}
