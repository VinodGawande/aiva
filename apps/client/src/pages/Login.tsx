import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { loginUser } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      login(data.token);

      alert("Login Successful ✅");

      navigate("/dashboard");
    } catch (error: any) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your AI interview journey."
    >
      <form
        className="space-y-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email
          </label>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Password
          </label>

          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?
          <span className="ml-2 cursor-pointer text-violet-400 hover:text-violet-300">
            Register
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
