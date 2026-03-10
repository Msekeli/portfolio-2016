export default function Container({ children, className = "" }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 md:px-10 lg:pl-24 lg:pr-20 ${className}`}
    >
      {children}
    </div>
  );
}
