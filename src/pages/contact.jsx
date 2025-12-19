import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Contact Us
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
            Have questions about <span className="font-semibold">SalesHub CRM</span>? 
            Reach out using the form and we&apos;ll get back to you with more information 
            about features, implementation, or your college project demo.
          </p>

          <div className="space-y-3 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-800">Email</p>
              <p>support@saleshub-demo.com</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Office Hours</p>
              <p>Mon – Fri, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white border border-[#e0ddd7] rounded-lg p-6 shadow-sm">
          {submitted && (
            <div className="mb-4 text-xs text-green-800 bg-green-100 border border-green-200 px-3 py-2 rounded">
              Thank you! Your message has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#e0ddd7] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#e0ddd7] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us how you plan to use SalesHub CRM..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-[#e0ddd7] px-3 py-2 text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-2 text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;