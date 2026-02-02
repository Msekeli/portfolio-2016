export default function Text({ children, variant = "primary" }) {
  const styles = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
  };

  return <p className={`${styles[variant]} leading-relaxed`}>{children}</p>;
}
