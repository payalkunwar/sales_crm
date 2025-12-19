import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-white/80 -z-10"></div>

      {/* App Layout */}
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <Topbar />

          <main className="p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
