export default function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:pl-24 lg:pr-20">
      {children}
    </div>
  );
}
