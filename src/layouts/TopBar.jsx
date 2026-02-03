import Icon from "../components/Icon";

export default function TopBar() {
  return (
    <header className="w-screen relative left-1/2 -translate-x-1/2 surface border-b border-gold-main/20">
      <div className="h-14 flex items-center justify-between px-[clamp(1rem,9vw,10%)]">
        <span className="font-medium tracking-wide text-text-primary">
          MSEKELI
        </span>

        <nav className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-text-primary hover:text-gold-main transition-colors"
          >
            <Icon name="Github" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-primary hover:text-gold-main transition-colors"
          >
            <Icon name="Linkedin" />
          </a>

          <a
            href="mailto:youremail@example.com"
            aria-label="Send email"
            className="text-text-primary hover:text-gold-main transition-colors"
          >
            <Icon name="Mail" />
          </a>
        </nav>
      </div>
    </header>
  );
}
