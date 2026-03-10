export default function Text({
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
  };

  return (
    <p
      className={`${styles[variant]} leading-relaxed text-sm md:text-base ${className}`}
    >
      {children}
    </p>
  );
}
