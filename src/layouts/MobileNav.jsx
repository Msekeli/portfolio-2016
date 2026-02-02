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

export default function MobileNav() {
  const activeId = useActiveSection(items.map((i) => i.id));

  return (
    <nav className="fixed bottom-0 inset-x-0 md:hidden h-16 surface border-t border-white/5">
      <div className="h-full flex justify-around items-center">
        {items.map(({ id, label, icon, href }) => {
          const isActive = activeId === id;

          return (
            <a
              key={id}
              href={href}
              className={`flex flex-col items-center ${
                isActive ? "text-gold-main" : "text-text-muted"
              }`}
            >
              <Icon name={icon} />
              <span className="text-xs mt-1">{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
