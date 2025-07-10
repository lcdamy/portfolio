import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@lcdamy",
    icon: Icons.gitHub,
    link: "https://github.com/lcdamy",
  },
  {
    name: "LinkedIn",
    username: "lcdamy",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/pierre-damien-murindangabo-cyuzuzo-709b53151",
  },
  {
    name: "Twitter",
    username: "@lcdamy",
    icon: Icons.twitter,
    link: "https://twitter.com/lcdamy",
  }
];
