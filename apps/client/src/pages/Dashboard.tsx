
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMe } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";

type User = {
  name: string;
  email: string;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        if (!token) return;

        const data = await getMe(token);

        setUser(data.user);
      } catch (error) {
        logout();
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [token, logout, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-2xl bg-slate-900 p-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          Welcome, {user?.name} 👋
        </h1>

        <p className="mt-4 text-slate-300">
          {user?.email}
        </p>

        <button
          onClick={() => navigate("/interview/setup")}
          className="mb-4 w-full rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700"
        >
          🚀 Start Interview
        </button>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="mt-4 w-full rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
