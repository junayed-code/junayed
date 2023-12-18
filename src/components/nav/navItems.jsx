import config from "@/config";
import Link from "next/link";

const NavItems = ({ className, onClick }) => {
  return (
    <ul className={className}>
      {config.navItems.map(item => (
        <li key={item.path}>
          <Link
            onClick={onClick}
            href={item.path}
            className="hover:text-emerald-400"
          >
            {item.text}
          </Link>
        </li>
      ))}
      <li>
        <Link
          onClick={onClick}
          href="/resume.pdf"
          target="_blank"
          className="inline-block text-emerald-400 border border-emerald-400 px-3 py-1 hover:shadow-[2.5px_2.5px_rgb(52,211,153)] hover:-translate-x-0.5 hover:-translate-y-0.5 duration-200"
        >
          Resume
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
