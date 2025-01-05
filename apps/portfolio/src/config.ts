import { Facebook, Github, Linkedin } from "lucide-react";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://junayedakbor.vercel.app";

export default {
  baseURL,
  title: "Full Stack Engineer",
  description: `Junayed Akbor is a Full Stack Engineer. He specialize in developing responsive, scalable, and pixel-perfect web applications using the MERN Stack.`,
  navItems: [
    {
      path: "#about",
      text: "About",
    },
    {
      path: "#projects",
      text: "Projects",
    },
    {
      path: "#experience",
      text: "Experience",
    },
    {
      path: "#contact",
      text: "Contact",
    },
  ],
  socials: [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/junayed-code",
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://www.facebook.com/junayedakbour",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/junayedakbor",
    },
  ],
};
