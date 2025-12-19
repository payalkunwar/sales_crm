import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

export default function Topbar() {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <header className="border-b border-[#e0ddd7] bg-[#f8f6f2] px-6 py-4 flex justify-between items-center">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">SalesHub</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* PROFILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="
              w-9 h-9 rounded-full 
              bg-slate-800 text-white 
              flex items-center justify-center
              transition hover:bg-slate-700
            "
          >
            👤
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* SLIDE-IN DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64
          bg-[#f8f6f2] border-l border-[#e0ddd7]
          z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#e0ddd7] flex justify-between items-center">
          <span className="font-semibold">My Account</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Menu */}
        <nav className="p-4 text-sm text-slate-700 space-y-3">
          <Link to="/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/dashboard/leads" className="block hover:underline">
            Leads
          </Link>
          <Link to="/dashboard/deals" className="block hover:underline">
            Deals
          </Link>
          <Link to="/dashboard/contacts" className="block hover:underline">
            Contacts
          </Link>

          <hr className="my-3" />

          {/* Profile route not implemented yet, so hide this to avoid 404 */}
          {/* <Link to="/profile" className="block hover:underline">
            Edit Profile
          </Link> */}

          <button
            onClick={logout}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        </nav>
      </div>
    </>
  );
}
