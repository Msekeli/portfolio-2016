import Icon from "../components/Icon";

const items = [
  { label: "Home", icon: "Home" },
  { label: "About", icon: "User" },
  { label: "Certificates", icon: "Award" },
  { label: "Projects", icon: "FolderGit2" },
  { label: "Contact", icon: "Mail" },
];

const activeItem = "Home"; // TEMP

export default function DesktopNav() {
  return (
    <aside className="hidden lg:flex">
      <div className="mt-20 ml-8 inline-flex flex-col gap-4 surface rounded-2xl p-3 max-h-100 gold-glow">
        {items.map(({ label, icon }) => {
          const isActive = label === activeItem;

          return (
            <div key={label} className="group relative flex justify-center">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  border
                  ${
                    isActive
                      ? "border-gold-main text-gold-main gold-glow"
                      : "border-white/10 text-text-muted hover:text-gold-main"
                  }
                  transition-colors
                `}
              >
                <Icon name={icon} />
              </div>

              {/* Desktop hover label */}
              {!isActive && (
                <span
                  className="
                    absolute left-14 top-1/2 -translate-y-1/2
                    px-3 py-1 rounded-md
                    surface text-sm whitespace-nowrap
                    text-text-primary
                    opacity-0 translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all
                  "
                >
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
