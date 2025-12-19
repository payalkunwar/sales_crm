import KanbanColumn from "./KanbanColumn";

const leadsData = {
  new: [
    { id: 1, name: "Aman Sharma", company: "TCS" },
    { id: 2, name: "Riya Patel", company: "Infosys" },
  ],
  qualified: [
    { id: 3, name: "Kunal Mehta", company: "Wipro" },
  ],
  converted: [
    { id: 4, name: "Sneha Iyer", company: "Accenture" },
  ],
};

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KanbanColumn title="New Leads" leads={leadsData.new} />
      <KanbanColumn title="Qualified Leads" leads={leadsData.qualified} />
      <KanbanColumn title="Converted Leads" leads={leadsData.converted} />
    </div>
  );
}
