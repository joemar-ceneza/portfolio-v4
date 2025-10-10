import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icons: <FaGithub />,
    path: "",
  },
  {
    icons: <FaLinkedinIn />,
    path: "",
  },
];

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link key={idx} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
}
