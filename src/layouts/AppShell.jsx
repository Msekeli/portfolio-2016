import Footer from "./Footer";

export default function AppShell({ top, nav, children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden px-[clamp(1rem,9vw,10%)]">
      {/* Global top bar */}
      {top}

      {/* Global body area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Global sidebar */}
        {nav}

        {/* Content column */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Only scroll container */}
          <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
