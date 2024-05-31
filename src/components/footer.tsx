import config from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ariaLabel = (social: string) => `Junayed Akbor's ${social} page`;

  return (
    <footer className="py-6 px-6 flex flex-col items-center gap-4 justify-center sm:flex-row sm:justify-between relative border-t bg-background border-slate-600 z-40">
      <p className="text-sm sm:text-base">
        ©{currentYear}. Designed and Made by{" "}
        <a
          rel="noreferrer noopener"
          href={config.socials[0].link}
          aria-label={ariaLabel("GitHub")}
          className="text-primary-foreground transition-all hover:text-primary hover:underline"
        >
          Junayed Akbor
        </a>
      </p>
      <div className="flex items-center gap-5 justify-center">
        {config.socials.map(({ name, link, icon: Icon }) => (
          <a
            key={name}
            href={link}
            title={name}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={ariaLabel(name)}
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </footer>
  );
}
