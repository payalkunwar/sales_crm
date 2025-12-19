import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import manualImg from "../assets/manual.png";
import excelImg from "../assets/excel.png";
import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../config/api";

export default function Welcome() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // EXCEL UPLOAD HANDLER
  const handleExcelUpload = async () => {
    if (!file) {
      setMessage("Please select an Excel file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(`${API_BASE_URL}/api/leads/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setMessage("Excel leads imported successfully");
      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (err) {
      console.error("EXCEL UPLOAD ERROR:", err.response?.data || err.message);
      setMessage("Failed to upload Excel file");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-10 space-y-10">

      {/* WELCOME */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">
          Welcome, {user?.name || "User"} 👋
        </h1>
        <p className="text-slate-700 max-w-2xl">
          Start by adding your sales leads. Once leads are added, your dashboard
          will display pipeline insights and performance analytics.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* MANUAL ENTRY */}
        <ActionCard
          title="Add Leads Manually"
          desc="Add individual leads using a simple form."
          img={manualImg}
          link="/dashboard/leads"
        />

        {/* EXCEL UPLOAD */}
        <div className="bg-white border border-[#e0ddd7] overflow-hidden">
          <img
            src={excelImg}
            alt="Excel Upload"
            className="h-36 w-full object-cover"
          />

          <div className="p-5 space-y-3">
            <h3 className="font-semibold">Upload Excel Sheet</h3>
            <p className="text-sm text-slate-600">
              Import multiple leads from an Excel or CSV file.
            </p>

            <a
              href="/templates/leads_template.xlsx"
              download
              className="block text-xs underline text-slate-600"
            >
            </a>

            <input
              type="file"
              accept=".xlsx,.csv"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border p-2 text-sm cursor-pointer"
            />

            <button
              onClick={handleExcelUpload}
              className="w-full bg-slate-800 text-white py-2 text-sm"
            >
              Upload & Continue
            </button>

            {message && (
              <p className="text-xs text-slate-600">{message}</p>
            )}
          </div>
        </div>

      </div>

      <p className="text-sm text-slate-500">
        Excel upload supports bulk imports so you can quickly populate your
        pipeline with real or sample data.
      </p>
    </div>
  );
}

/* ---------- REUSABLE CARD ---------- */

function ActionCard({ title, desc, img, link }) {
  return (
    <Link
      to={link}
      className="bg-white border border-[#e0ddd7] overflow-hidden
                hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    >
      <img src={img} alt={title} className="h-36 w-full object-cover" />

      <div className="p-5 space-y-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>

        <button className="w-full bg-slate-800 text-white py-2 text-sm">
          Continue
        </button>
      </div>
    </Link>
  );
}
