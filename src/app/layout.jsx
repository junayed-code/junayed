import Nav from "@/components/nav/index";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/footer";

/**@type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://junayedakbor.vercel.app"),
  title: "Junayed Akbor | Web Developer",
  creator: "Junayed Akbor",
  description:
    "Junayed Akbor is a React-based Front-End web developer who builds modern, responsive, and innovative web applications.",
  keywords: ["Junayed", "Akbor", "Web", "Developer", "Front-End", "MERN"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Junayed Akbor",
    locale: "en_bg",
    description:
      "Junayed Akbor is a React-based Front-End web developer who builds modern, responsive, and innovative web applications.",
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
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
