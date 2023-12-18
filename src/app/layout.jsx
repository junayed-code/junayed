import Nav from "@/components/nav/index";
import { Toaster } from "react-hot-toast";
import "./globals.css";

/**@type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://junayedakbor.vercel.app"),
  title: "Junayed Akbor | Web Developer",
  creator: "Junayed Akbor",
  description:
    "Junayed Akbor is a React-based Front-End web developer who builds modern, responsive, and innovative web applications.",
  keywords: ["React", "Next JS", "Web", "Developer", "Front-End", "MERN"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Junayed Akbor",
    locale: "en_bg",
    description:
      "Hi there, I'm a front-end React-based web developer who enjoys exploring new technologies on the internet.",
    images: [
      {
        url: "/og.png",
        width: 1662,
        height: 935,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-400 font-primary">
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
