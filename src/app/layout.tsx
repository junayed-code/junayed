import type React from "react";
import { cn } from "@/utils";
import { urbanist, rubik } from "@/fonts";
import "./globals.css";

import Nav from "@components/nav";
import Footer from "@components/footer";
import { Toaster } from "react-hot-toast";

export { metadata } from "@/app/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(urbanist.variable, rubik.variable, "font-primary")}>
        <Nav />
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            success: { className: "min-w-fit max-w-md" },
            error: { className: "min-w-fit max-w-md" },
          }}
        />
      </body>
    </html>
  );
}
