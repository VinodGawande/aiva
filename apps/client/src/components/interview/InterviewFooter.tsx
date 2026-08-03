type InterviewFooterProps = {
  isRecording: boolean;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;

  onStartRecording: () => void;
  onStopRecording: () => void;

  onPreviousQuestion: () => void;
  onNextQuestion: () => void;

  onEndInterview: () => void;
};

export default function InterviewFooter({
  isRecording,
  isFirstQuestion,
  isLastQuestion,
  onStartRecording,
  onStopRecording,
  onPreviousQuestion,
  onNextQuestion,
  onEndInterview,
}: InterviewFooterProps) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Status */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-lg bg-slate-800 px-4 py-2">
            🎤 Microphone: Ready
          </div>

          <div
            className={`rounded-lg px-4 py-2 font-semibold ${
              isRecording
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {isRecording ? "🔴 Recording" : "⚪ Not Recording"}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onPreviousQuestion}
            disabled={isFirstQuestion}
            className="rounded-xl bg-slate-700 px-5 py-3 font-semibold transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ⬅ Previous
          </button>

          {!isRecording ? (
            <button
              onClick={onStartRecording}
              className="rounded-xl bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-700"
            >
              🎤 Start Recording
            </button>
          ) : (
            <button
              onClick={onStopRecording}
              className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              ⏹ Stop Recording
            </button>
          )}

          <button
            onClick={onNextQuestion}
            disabled={isLastQuestion}
            className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ➡ Next
          </button>

          <button
            onClick={onEndInterview}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
          >
            ❌ End Interview
          </button>
        </div>
      </div>
    </div>
  );
}
