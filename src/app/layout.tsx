import type React from "react";
import Nav from "@components/nav";
import Footer from "@components/footer";

import { cn } from "@/utils";
import { Toaster } from "react-hot-toast";
import { urbanist, rubik } from "@/fonts";
import "./globals.css";

export { metadata } from "@/app/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          urbanist.variable,
          rubik.variable,
          "bg-slate-900 text-slate-400 font-primary"
        )}
      >
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
