import { ReactElement } from "react";

export type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

export type SocialItem = {
  icon: ReactElement;
  name: string;
  path: string;
};

export type SocialLinkProps = {
  item: SocialItem;
  iconStyles?: string;
};
