import { useEffect, useState } from "react";
import { useLeads } from "../context/LeadsContext";

export default function Contacts() {
  const { leads, fetchLeads } = useLeads();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Extract unique contacts from leads (by email or name+company)
  const contacts = leads
    .filter((lead) => lead.email || lead.name)
    .map((lead) => ({
      id: lead._id,
      name: lead.name,
      email: lead.email || "No email",
      company: lead.company,
      stage: lead.stage,
    }))
    .filter((contact, index, self) =>
      index === self.findIndex((c) => c.email === contact.email && c.email !== "No email")
    );

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f6f2] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#e0ddd7] rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            Contacts Management
          </h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search contacts by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-[#e0ddd7] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Contacts List */}
          {filteredContacts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">
                {searchTerm ? "No contacts found matching your search." : "No contacts available yet."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredContacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          )}

          {/* Summary */}
          <div className="mt-8 pt-6 border-t border-[#e0ddd7]">
            <p className="text-sm text-slate-600">
              Total Contacts: <span className="font-semibold">{contacts.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ contact }) {
  const getStageColor = (stage) => {
    const colors = {
      new: "bg-sky-100 text-sky-800",
      qualified: "bg-indigo-100 text-indigo-800",
      deal: "bg-emerald-100 text-emerald-800",
      won: "bg-green-100 text-green-800",
      lost: "bg-red-100 text-red-800",
    };
    return colors[stage] || "bg-slate-100 text-slate-800";
  };

  return (
    <div className="bg-slate-50 border border-[#e0ddd7] rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-slate-800">{contact.name}</h3>
          <p className="text-sm text-slate-600">{contact.company}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${getStageColor(contact.stage)}`}>
          {contact.stage}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-xs text-slate-500">Email</p>
        <p className="text-sm text-slate-700">{contact.email}</p>
      </div>
    </div>
  );
}

