// export default function AppShell({ top, nav, mobileNav, children }) {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {top}

//       <div
//         className="
//           flex flex-1 px-3.75
//           pb-[calc(4rem+env(safe-area-inset-bottom))]
//           lg:pb-0
//         "
//       >
//         {nav}
//         <main className="flex-1">{children}</main>
//       </div>

//       {mobileNav}
//     </div>
//   );
// }
import Footer from "./Footer";

export default function AppShell({ top, nav, children }) {
  return (
    <div className="h-screen flex">
      {nav}

      <div className="flex-1 flex flex-col">
        {top}

        {/* SINGLE scroll container */}
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
          {children}
        </main>

        {/* Desktop-only footer */}
        <Footer />
      </div>
    </div>
  );
}
