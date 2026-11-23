import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "lcdamy Portfolio",
    short_name: "lcdamy's Portfolio",
    description:
      "Portfolio of Pierre Damien Murindangabo Cyuzuzo (lcdamy), full stack developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logo.png",
        sizes: "200x200",
        type: "image/png",
      },
    ],
    categories: [
      "portfolio",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
