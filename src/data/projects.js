import wislioImage from "@/images/projects/wislio.png";
import voltRealmImage from "@/images/projects/volt-realm.png";
import ticTacToeImage from "@/images/projects/tic-tac-toe.png";
import eventfulBlissImage from "@/images/projects/eventful-bliss.png";
import restCountriesAPI from "@/images/projects/rest-countries-api.png";
import neotericCalculatorImage from "@/images/projects/neoteric-calculator.png";

/** @type {import("@/types").Project[]} */
const projects = [
  {
    name: "Wislio",
    image: wislioImage,
    live: "https://wislio.firebaseapp.com/",
    description: "Book library management application to help book lovers.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Express", "Mongoose"],
  },
  {
    name: "Eventful Bliss",
    image: eventfulBlissImage,
    live: "http://eventfulbliss.surge.sh/",
    description:
      "Social event management website, that exposes organizer events and achievements.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    name: "Tic Tac Toe Game",
    image: ticTacToeImage,
    live: "https://junayed-code.github.io/tic-tac-toe-game",
    description:
      "Tic Tac Toe game has a computer player with the minimax algorithm.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "MiniMax Algorithm"],
  },
  {
    name: "REST Countries API",
    image: restCountriesAPI,
    live: "https://countryquery.vercel.app/",
    description:
      "It's a RESTful countries API project that provides necessary information about countries.",
    technologies: ["React.js", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    name: "Volt Realm",
    image: voltRealmImage,
    live: "https://voltrealm.surge.sh/",
    description: "Affiliate e-commerce web application.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Express", "MongoDB"],
  },
  {
    name: "Neoteric Calculator",
    image: neotericCalculatorImage,
    live: "https://neoteric-calculator.surge.sh",
    description: "A beautiful design neoteric calculator app.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
  },
];

export default projects;
