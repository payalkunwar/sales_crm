import LeadCard from "./LeadCard";

export default function KanbanColumn({ title, leads }) {
  return (
    <div className="bg-[#f1f1ee] border border-[#e0ddd7] rounded-md p-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">
        {title}
      </h3>

      {leads.length === 0 ? (
        <p className="text-xs text-slate-400">
          No leads in this stage
        </p>
      ) : (
        leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))
      )}
    </div>
  );
}
