import Image from "next/image";
import githubIcon from "@/images/icons/github.svg";
import facebookIcon from "@/images/icons/facebook.svg";
import linkedinIcon from "@/images/icons/linkedin.svg";
import upArrowIcon from "@/images/icons/up-arrow.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-5 flex flex-col items-center relative">
      <div className="flex items-center gap-5 justify-center pb-2.5 border-b-2 border-slate-400 hover:border-emerald-300">
        <Link href="https://github.com/junayed-code" target="_blank">
          <Image src={githubIcon} alt="GitHub icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/junayed-akbor-84225b2a4"
          target="_blank"
        >
          <span className="block p-1 rounded-full border-2">
            <Image src={linkedinIcon} alt="Linkedin icon" />
          </span>
        </Link>
        <Link href="https://www.facebook.com/junayedakbour" target="_blank">
          <Image src={facebookIcon} alt="Facebook icon" />
        </Link>
      </div>
      <Link
        href="#hero"
        className="inline-block absolute bg-slate-700 p-2 rounded-full top-6 right-5 sm:right-10 animate-bounce"
      >
        <Image src={upArrowIcon} width={30} height={30} alt="Up arrow icon" />
      </Link>
    </footer>
  );
}
