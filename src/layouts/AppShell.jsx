import Footer from "./Footer";

export default function AppShell({ top, nav, children }) {
  return (
    /* Removed the 10% constraint and replaced with responsive padding */
    <div className="h-screen flex flex-col overflow-hidden px-4 md:px-[clamp(2rem,6vw,8rem)]">
      {/* Global top bar */}
      {top}

      {/* Global body area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Global sidebar */}
        {nav}

        {/* Content column */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Only scroll container */}
          <main
            id="scroll-container"
            className="flex-1 overflow-y-auto snap-y snap-mandatory"
          >
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
