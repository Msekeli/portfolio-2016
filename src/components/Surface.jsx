export default function Surface({
  children,
  elevated = false,
  className = "",
  noPadding = false,
  ...props
}) {
  return (
    <div
      {...props}
      className={`
        surface
        rounded-2xl
        ${noPadding ? "" : "p-6"}
        ${elevated ? "surface--elevated" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
