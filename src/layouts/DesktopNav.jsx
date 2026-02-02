import Icon from "../components/Icon";
import useActiveSection from "../hooks/useActiveSection";

const items = [
  { id: "home", label: "Home", icon: "Home", href: "#home" },
  { id: "about", label: "About", icon: "User", href: "#about" },
  {
    id: "certificates",
    label: "Certificates",
    icon: "Award",
    href: "#certificates",
  },
  { id: "projects", label: "Projects", icon: "FolderGit2", href: "#projects" },
  { id: "contact", label: "Contact", icon: "Mail", href: "#contact" },
];

export default function DesktopNav() {
  const activeId = useActiveSection(items.map((i) => i.id));

  return (
    <aside className="hidden md:flex w-24">
      <div className="mt-24 ml-4 surface rounded-2xl p-3 flex flex-col gap-4 gold-glow">
        {items.map(({ id, label, icon, href }) => {
          const isActive = activeId === id;

          return (
            <a
              key={id}
              href={href}
              className="group relative flex justify-center"
            >
              <div
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  border
                  interactive
                  ${
                    isActive
                      ? "border-gold-main text-gold-main gold-glow"
                      : "border-gold-main/30 text-text-muted"
                  }
                `}
              >
                <Icon name={icon} />
              </div>

              <span
                className="
                  absolute left-14 top-1/2 -translate-y-1/2
                  px-3 py-1 rounded-md
                  surface
                  text-text-primary text-sm
                  opacity-0 translate-x-2
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all
                  whitespace-nowrap
                "
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
