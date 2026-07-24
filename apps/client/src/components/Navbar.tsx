import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="text-3xl font-black">
          <span className="text-violet-500">AI</span>VA
        </div>

        <nav className="hidden items-center gap-8 text-slate-300 lg:flex">
          <a href="#" className="transition hover:text-white">Home</a>
          <a href="#" className="transition hover:text-white">Features</a>
          <a href="#" className="transition hover:text-white">Pricing</a>
          <a href="#" className="transition hover:text-white">About</a>
        </nav>

        <Button className="px-6 py-3">
          Login
        </Button>
      </div>
    </header>
  );
}
