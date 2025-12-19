import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f2]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About SalesHub CRM
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Empowering sales teams with intelligent lead management, seamless deal tracking, 
            and powerful analytics to accelerate revenue growth and streamline your sales process.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Mission Section */}
        <section className="mb-12">
          <div className="bg-white border border-[#e0ddd7] rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              SalesHub was built to solve a critical challenge facing modern sales organizations: 
              the need for a unified platform that seamlessly manages leads, tracks deals, and 
              provides actionable insights. We provide a centralized solution that empowers 
              sales teams to work more efficiently, close deals faster, and drive sustainable growth.
            </p>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="mb-12">
          <div className="bg-white border border-[#e0ddd7] rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Comprehensive lead and contact management",
                "Advanced deal tracking across multiple pipelines",
                "Intuitive Kanban-style pipeline visualization",
                "Enterprise-grade security and authentication",
                "Real-time sales dashboards with analytics",
                "Bulk lead import via Excel integration"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 text-xl mt-1">✓</span>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <div className="bg-white border border-[#e0ddd7] rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              How It Works
            </h2>
            <div className="space-y-4">
              {[
                "Import leads manually or upload bulk data via Excel",
                "Monitor your sales pipeline with real-time dashboard analytics",
                "Manage deals through intuitive Kanban board workflows",
                "Qualify and nurture leads through each stage",
                "Close deals and track performance metrics"
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 pt-1 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-[#e0ddd7] rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              What's Coming Next
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              We're continuously evolving SalesHub to meet the changing needs of modern sales teams. 
              Our roadmap includes advanced features designed to further enhance productivity and drive results.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Email Integration", "Sales Forecasting", "Advanced Analytics", "Automated Reminders", "Team Collaboration"].map((enhancement, idx) => (
                <span key={idx} className="px-4 py-2 bg-white border border-slate-300 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  {enhancement}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            to="/login"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors"
          >
            Get Started with SalesHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;