import Icon from "../components/Icon";

const items = [
  { label: "Home", icon: "Home" },
  { label: "About", icon: "User" },
  { label: "Certificates", icon: "Award" },
  { label: "Projects", icon: "FolderGit2" },
  { label: "Contact", icon: "Mail" },
];

const activeItem = "Home"; // TEMP

export default function MobileNav() {
  return (
    <nav
      className="
        fixed bottom-0 inset-x-0 lg:hidden
        h-16
        pb-[env(safe-area-inset-bottom)]
        surface
        border-t border-gold-main/20
      "
    >
      <div className="h-full flex items-center justify-around">
        {items.map(({ label, icon }) => {
          const isActive = label === activeItem;

          return (
            <div
              key={label}
              className={`
                w-10 h-10 rounded-full
                flex items-center justify-center
                ${isActive ? "text-gold-main gold-glow" : "text-text-muted"}
                transition-colors
              `}
            >
              <Icon name={icon} />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
