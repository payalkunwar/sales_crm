import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { API_BASE_URL } from "../config/api";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      // Backend login endpoint will create the user if they don't exist
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      login(res.data.user, res.data.token);
      navigate("/welcome");
    } catch (err) {
      console.error("SIGNUP ERROR:", err.response?.data || err.message);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] flex items-center justify-center">
      <div className="bg-white border border-[#e0ddd7] p-8 w-full max-w-sm">

        <h2 className="text-2xl font-semibold mb-2">
          Create Account
        </h2>

        <p className="text-sm text-slate-600 mb-6">
          Register to access the sales CRM system
        </p>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 text-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 text-sm"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 mb-4 text-sm"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-slate-800 text-white py-2 text-sm mb-4"
        >
          Create Account
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
