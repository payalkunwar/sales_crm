import { useEffect } from "react";
import { useLeads } from "../context/LeadsContext";

export default function Deals() {
  const { leads, fetchLeads, updateLeadStage } = useLeads();

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const moveLead = async (id, stage) => {
    await updateLeadStage(id, stage);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-2xl font-semibold text-white mb-8">
        Sales Pipeline
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <KanbanColumn
          title="New Leads"
          color="border-sky-400"
          leads={leads.filter((l) => l.stage === "new")}
          onMove={moveLead}
          next="qualified"
        />

        <KanbanColumn
          title="Qualified"
          color="border-indigo-400"
          leads={leads.filter((l) => l.stage === "qualified")}
          onMove={moveLead}
          next="deal"
        />

        <KanbanColumn
          title="Deals"
          color="border-emerald-400"
          leads={leads.filter((l) => l.stage === "deal")}
          onMove={moveLead}
          next={null}
          showActions={true}
        />

        <KanbanColumn
          title="Won"
          color="border-green-500"
          leads={leads.filter((l) => l.stage === "won")}
        />

        <KanbanColumn
          title="Lost"
          color="border-red-500"
          leads={leads.filter((l) => l.stage === "lost")}
        />
      </div>
    </div>
  );
}

function KanbanColumn({ title, color, leads, onMove, next, showActions }) {
  return (
    <div className="bg-slate-900 rounded-lg p-4">
      <h2
        className={`text-sm font-semibold text-white mb-4 border-l-4 pl-2 ${color}`}
      >
        {title}
      </h2>

      <div className="space-y-4">
        {leads.map((lead) => (
          <KanbanCard
            key={lead._id}
            lead={lead}
            onMove={onMove}
            next={next}
            showActions={showActions}
          />
        ))}

        {leads.length === 0 && (
          <p className="text-xs text-slate-500">
            No leads here yet
          </p>
        )}
      </div>
    </div>
  );
}

function KanbanCard({ lead, onMove, next, showActions }) {
  return (
    <div className="bg-slate-800 border border-slate-700 p-4 rounded-md">
      <p className="text-white font-medium text-sm">
        {lead.name}
      </p>

      <p className="text-xs text-slate-400 mb-3">
        {lead.company}
      </p>

      {next && (
        <button
          onClick={() => onMove(lead._id, next)}
          className="text-xs text-sky-400 hover:underline"
        >
          Move to next →
        </button>
      )}

      {showActions && !next && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onMove(lead._id, "won")}
            className="text-xs text-green-400 hover:underline"
          >
            Mark Won ✓
          </button>
          <button
            onClick={() => onMove(lead._id, "lost")}
            className="text-xs text-red-400 hover:underline"
          >
            Mark Lost ✗
          </button>
        </div>
      )}
    </div>
  );
}
