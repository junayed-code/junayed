import config from "@/config";

/**@type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://junayedakbor.vercel.app"),
  title: `Junayed Akbor | ${config.title}`,
  creator: "Junayed Akbor",
  authors: [{ name: "Junayed Akbor", url: "https://junayedakbor.vercel.app" }],
  description: config.description,
  keywords: ["Junayed Akbor", "junayedakbor", "junayedakbor.vercel.app"],
  openGraph: {
    type: "website",
    url: "/",
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
