import Image from "next/image";
import Link from "next/link";
import logoImage from "@/images/logo.svg";

export default function Nav() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-xl z-50">
      <nav className="flex items-center justify-between px-5 py-4 md:max-w-4xl lg:max-w-[1110px] mx-auto">
        <div>
          <Link href="/">
            <Image
              src={logoImage}
              alt="Logo image"
              width={42}
              height={42}
              priority
            />
          </Link>
        </div>

        <ul className="flex items-center gap-7 font-medium">
          <li>
            <Link href="#experience" className="hover:text-emerald-400">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-emerald-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-emerald-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
