export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  ...props
}) {
  const handleClick = (e) => {
    if (to) {
      const el = document.getElementById(to);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", location.pathname);
      }
    }

    if (onClick) onClick(e);
  };

  const baseClasses = `
    px-6 py-3 rounded-full
    interactive cursor-pointer
  `;

  const variants = {
    primary: `
      border border-gold-main
      text-gold-main
    `,
    secondary: `
      surface
      text-text-secondary
      hover:text-gold-main
    `,
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
