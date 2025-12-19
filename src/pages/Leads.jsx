import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLeads } from "../context/LeadsContext";

export default function Leads() {
  const { addLead } = useLeads();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    company: "",
    stage: "new",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead({
      name: form.name,
      company: form.company,
      stage: form.stage,
    })
      .then(() => {
        setForm({ name: "", company: "", stage: "new" });
        setSuccess(true);
        // Redirect to dashboard after 1.5 sec
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      })
      .catch(() => {
        // In a real app you might surface an error message here
        setSuccess(false);
      });
  };

  return (
    <div className="relative min-h-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto pt-20 px-6">
        <div className="bg-white border border-[#e0ddd7] p-8">

          <h2 className="text-2xl font-semibold mb-2">
            Add Lead Manually
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Enter lead details to add them to your sales pipeline.
          </p>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mb-4 text-sm text-green-700 bg-green-100 p-2">
              Lead added successfully! Redirecting to dashboard…
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Lead Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-2 text-sm"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full border p-2 text-sm"
            />

            <select
              name="stage"
              value={form.stage}
              onChange={handleChange}
              className="w-full border p-2 text-sm"
            >
              <option value="new">New Lead</option>
              <option value="qualified">Qualified</option>
              <option value="deal">Deal</option>
            </select>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-2 text-sm"
            >
              Add Lead
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
