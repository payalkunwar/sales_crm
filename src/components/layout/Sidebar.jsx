import { Link } from "react-router-dom";

// Static sidebar for the authenticated dashboard layout
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white/90 border-r border-[#e0ddd7] p-6 hidden md:block">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>

      <nav className="space-y-4 text-sm">
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
      </nav>
    </aside>
  );
}
