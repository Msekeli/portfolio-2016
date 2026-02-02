import AppShell from "./layouts/AppShell";
import TopBar from "./layouts/TopBar";
import DesktopNav from "./layouts/DesktopNav";
import MobileNav from "./layouts/MobileNav";

export default function App() {
  return (
    <AppShell top={<TopBar />} nav={<DesktopNav />} mobileNav={<MobileNav />}>
      <div className="flex-1" />
    </AppShell>
  );
}
