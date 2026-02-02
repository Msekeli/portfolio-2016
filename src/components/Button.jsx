export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="
        px-6 py-3 rounded-full
        border border-gold-main
        text-gold-main
        interactive
      "
    >
      {children}
    </button>
  );
}
