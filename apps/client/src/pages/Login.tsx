import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your AI interview journey."
    >
      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Password
          </label>

          <Input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button
          className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-700"
        >
          Login
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

