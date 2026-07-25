import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { registerUser } from "../api/auth.api";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

      await registerUser(formData);

      alert("Registration Successful ✅");

      navigate("/login");
    } catch (error: any) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Start your AI interview journey."
    >
      <form
        className="space-y-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Name
          </label>

          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

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
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="ml-2 cursor-pointer text-violet-400 hover:text-violet-300"
          >
            Login
          </span>
        </p>
      </form>
    </AuthLayout>
  );
}
