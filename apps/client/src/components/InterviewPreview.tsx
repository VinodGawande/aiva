export default function InterviewPreview() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-5 rounded-3xl bg-violet-600/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        {/* Camera */}
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400">
            <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
            Recording
          </div>

          <span className="text-8xl">🤖</span>
        </div>

        <div className="mt-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">
                AI Interviewer
              </h3>

              <p className="text-sm text-slate-400">
                Full Stack Developer Round
              </p>
            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
              Live
            </span>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-slate-300">
              Tell me about yourself and explain one challenging project you
              have built.
            </p>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-slate-400">
                Confidence Score
              </span>

              <span className="font-semibold text-violet-400">
                92%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-slate-800 p-3 text-center">
              <h4 className="text-lg font-bold text-green-400">
                98%
              </h4>

              <p className="text-xs text-slate-400">
                Eye Contact
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              <h4 className="text-lg font-bold text-yellow-400">
                91%
              </h4>

              <p className="text-xs text-slate-400">
                Fluency
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              <h4 className="text-lg font-bold text-violet-400">
                95%
              </h4>

              <p className="text-xs text-slate-400">
                Accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

