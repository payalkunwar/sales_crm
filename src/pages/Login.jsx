import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { API_BASE_URL } from "../config/api";

export default function Login() {
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

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        {
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      // Persist auth state via AuthContext (which also writes to localStorage)
      login(res.data.user, res.data.token);

      navigate("/welcome");
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);
      setError("Login failed. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-[#f8f6f2] flex items-center justify-center">
      <div className="bg-white border p-8 w-full max-w-sm">

        <h2 className="text-2xl font-semibold mb-2">Login</h2>
        <p className="text-sm text-slate-600 mb-6">
          Access the internal sales dashboard
        </p>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
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
          onClick={handleLogin}
          className="w-full bg-slate-800 text-white py-2 text-sm"
        >
          Login
        </button>

        <div className="text-center text-xs text-slate-500 my-4">OR</div>

        <button className="w-full border py-2 text-sm mb-4">
          Continue with Google
        </button>

        <p className="text-sm text-center text-slate-600">
          New user?{" "}
          <Link to="/signup" className="underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
