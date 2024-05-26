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
};
