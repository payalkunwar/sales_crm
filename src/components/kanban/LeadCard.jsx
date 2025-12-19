export default function LeadCard({ lead }) {
  return (
    <div className="bg-white border border-[#e0ddd7] rounded-sm p-3 mb-3">
      <p className="text-sm font-medium text-slate-800">
        {lead.name}
      </p>

      <p className="text-xs text-slate-500">
        {lead.company}
      </p>

      <button className="mt-2 text-xs text-blue-600 underline">
        Move to next stage
      </button>
    </div>
  );
}
