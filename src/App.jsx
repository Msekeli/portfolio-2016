import AppShell from "./layouts/AppShell";
import TopBar from "./layouts/TopBar";
import DesktopNav from "./layouts/DesktopNav";
import MobileNav from "./layouts/MobileNav";
import Home from "./pages/Home";

export default function App() {
  return (
    <AppShell top={<TopBar />} nav={<DesktopNav />}>
      <Home />
      <MobileNav />
    </AppShell>
  );
}
