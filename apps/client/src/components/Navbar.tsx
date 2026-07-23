export default function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-wide text-white">
          AIVA
        </h1>

        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>

          <button className="rounded-lg bg-violet-600 px-4 py-2 font-medium hover:bg-violet-500">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
