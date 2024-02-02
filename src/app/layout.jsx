import Nav from "@/components/nav/index";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
export { metadata } from "@/data/metadata";
import { urbanist, rubik } from "@/fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${rubik.variable}`}>
      <body className="bg-slate-900 text-slate-400 font-primary">
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
