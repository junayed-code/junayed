import type { Metadata } from "next";
import config from "@/config";

export const metadata: Metadata = {
  metadataBase: new URL(config.baseURL),
  title: `Junayed Akbor | ${config.title}`,
  creator: "Junayed Akbor",
  authors: { name: "Junayed Akbor", url: "https://junayedakbor.vercel.app" },
  description: config.description,
  keywords: ["junayed", "junayed akbor", "Junayed", "Junayed Akbor"],
  openGraph: {
    url: "/",
    type: "website",
    siteName: "Junayed Akbor",
    locale: "en_bg",
    description: config.description,
    images: [
      {
        url: "/og.png",
        width: 1662,
        height: 935,
      },
    ],
  },
};
