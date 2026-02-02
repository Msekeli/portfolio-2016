export default function Surface({
  children,
  elevated = false,
  className = "",
}) {
  return (
    <div
      className={`surface rounded-2xl p-6 ${
        elevated ? "surface--elevated" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
