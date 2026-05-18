import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#bf000d",
    lang: "fr-FR",
    orientation: "portrait",
    categories: ["education", "business", "training"],
    icons: [
      {
        src: "/brand/logo-alertis.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
