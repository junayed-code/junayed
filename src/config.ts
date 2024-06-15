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
      path: "#experience",
      text: "Experience",
    },
    {
      path: "#projects",
      text: "Projects",
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
  skills: [
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=js",
      wikiTitle: "JavaScript",
    },
    {
      name: "TypeScript",
      icon: "https://skillicons.dev/icons?i=ts",
      wikiTitle: "TypeScript",
    },
    {
      name: "React JS",
      icon: "https://skillicons.dev/icons?i=react",
      wikiTitle: "React_(JavaScript_library)",
    },
    {
      name: "Next JS",
      icon: "https://skillicons.dev/icons?i=nextjs",
      wikiTitle: "Next.js",
    },
    {
      name: "Node JS",
      icon: "https://skillicons.dev/icons?i=nodejs",
      wikiTitle: "Node.js",
    },
    {
      name: "Express",
      icon: "https://skillicons.dev/icons?i=express",
      wikiTitle: "Express.js",
    },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb",
      wikiTitle: "MongoDB",
    },
    {
      name: "Prisma",
      icon: "https://skillicons.dev/icons?i=prisma",
      wikiTitle: "Prisma",
    },
    {
      name: "Firebase",
      icon: "https://skillicons.dev/icons?i=firebase",
      wikiTitle: "Firebase",
    },
    {
      name: "Tailwind CSS",
      icon: "https://skillicons.dev/icons?i=tailwind",
      wikiTitle: "Tailwind_CSS",
    },
    {
      name: "HTML",
      icon: "https://skillicons.dev/icons?i=html",
      wikiTitle: "HTML",
    },
    {
      name: "CSS",
      icon: "https://skillicons.dev/icons?i=css",
      wikiTitle: "CSS",
    },
    {
      name: "SASS",
      icon: "https://skillicons.dev/icons?i=sass",
      wikiTitle: "Sass_(style_sheet_language)",
    },
    {
      name: "GitHub",
      icon: "https://skillicons.dev/icons?i=github",
      wikiTitle: "GitHub",
    },
    {
      name: "VS code",
      icon: "https://skillicons.dev/icons?i=vscode",
      wikiTitle: "Visual_Studio_Code",
    },
  ],
};
