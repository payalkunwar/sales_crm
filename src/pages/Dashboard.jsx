import { useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useLeads } from "../context/LeadsContext";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const { leads, fetchLeads } = useLeads();

  useEffect(() => {
    fetchLeads();
  }, []);

  const newLeads = leads.filter(l => l.stage === "new").length;
  const qualified = leads.filter(l => l.stage === "qualified").length;
  const deals = leads.filter(l => l.stage === "deal").length;
  const won = leads.filter(l => l.stage === "won").length;
  const lost = leads.filter(l => l.stage === "lost").length;

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Sales Dashboard</h1>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <Stat title="New Leads" value={newLeads} />
        <Stat title="Qualified" value={qualified} />
        <Stat title="Deals" value={deals} />
        <Stat title="Won" value={won} />
        <Stat title="Lost" value={lost} />
      </div>

      {/* GRAPHS */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

{/* BAR CHART */}
<div className="bg-slate-900 p-6 rounded-lg">
  <h3 className="text-white text-sm mb-4">Pipeline Overview</h3>

  <Bar
    data={{
      labels: ["New", "Qualified", "Deals", "Won", "Lost"],
      datasets: [
        {
          label: "Leads",
          data: [newLeads, qualified, deals, won, lost],
          backgroundColor: ["#38bdf8", "#818cf8", "#22c55e", "#10b981", "#ef4444"],
          borderRadius: 6,
        },
      ],
    }}
    options={{
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb",
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#e5e7eb" },
          grid: { color: "#334155" },
        },
        y: {
          ticks: { color: "#e5e7eb" },
          grid: { color: "#334155" },
        },
      },
    }}
  />
</div>

{/* DOUGHNUT CHART */}
<div className="bg-slate-900 p-6 rounded-lg flex flex-col items-center">
  <h3 className="text-white text-sm mb-4">Pipeline Distribution</h3>

  <Doughnut
    data={{
      labels: ["New", "Qualified", "Deals", "Won", "Lost"],
      datasets: [
        {
          data: [newLeads, qualified, deals, won, lost],
          backgroundColor: ["#38bdf8", "#818cf8", "#22c55e", "#10b981", "#ef4444"],
          borderWidth: 0,
        },
      ],
    }}
    options={{
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb",
          },
        },
      },
    }}
  />
</div>
</div>

    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white border p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
}
