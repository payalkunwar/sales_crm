import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-screen">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
          alt="Sales CRM"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Internal Sales CRM System
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-6">
              SalesHub helps sales teams manage leads, track deal progress,
              and visualize the sales pipeline using a simple Kanban workflow.
            </p>

            <Link
              to="/login"
              className="inline-block bg-white text-slate-800 px-6 py-3 text-sm font-medium"
            >
              Login to Dashboard
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
