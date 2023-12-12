import Image from "next/image";
import Link from "next/link";
import profileImage from "@/images/profile.jpg";

export default function Hero() {
  return (
    <section className="mt-[74px] flex flex-col md:flex-row py-16 sm:py-20 px-6 w-full md:max-w-4xl lg:max-w-[1110px] mx-auto gap-y-10">
      <div className="md:w-1/2">
        <h5 className="text-xl font-medium font-secondary text-emerald-300">
          Hi, I am
        </h5>
        <h1 className="text-5xl md:text-6xl font-secondary font-black text-slate-100 mb-3">
          junayed akbor
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold mb-5 text-slate-300">
          Self-Taught Front-End Web Developer
        </h3>
        <p className="text-lg max-w-xl font-medium">
          I'm a front-end{" "}
          <Link
            href="https://react.dev"
            target="_blank"
            className="text-slate-100 hover:text-green-400"
          >
            React
          </Link>
          -based web developer who enjoys exploring new technologies on the
          internet. I have a great passion for discovering and learning new
          things, and I'm particularly fascinated by{" "}
          <span className="text-green-400">AI</span> technology.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src={profileImage}
          alt="Junayed profile"
          height={350}
          width={350}
          priority
          className="mx-auto md:mr-0 border-2 border-emerald-400 duration-300 md:hover:shadow-[10px_10px_#34d399] cursor-crosshair"
        />
      </div>
    </section>
  );
}
