import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm">
            AI Powered Interviews
          </p>

          <h1 className="mt-5 text-6xl font-extrabold">
            Ace Every Interview
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Practice realistic AI interviews, receive detailed feedback,
            and become job-ready with AIVA.
          </p>

          <button className="mt-10 rounded-xl bg-violet-600 px-7 py-3 font-semibold transition hover:bg-violet-500">
            Start Free
          </button>
        </div>
      </section>
    </main>
  );
}

