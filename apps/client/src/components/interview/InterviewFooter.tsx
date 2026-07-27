type InterviewFooterProps = {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onEndInterview: () => void;
};

export default function InterviewFooter({
  isRecording,
  onStartRecording,
  onStopRecording,
  onEndInterview,
}: InterviewFooterProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
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

      <div className="flex flex-wrap gap-3">
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
            className="rounded-xl bg-yellow-600 px-5 py-3 font-semibold transition hover:bg-yellow-700"
          >
            ⏹️ Stop Recording
          </button>
        )}

        <button
          onClick={onEndInterview}
          className="rounded-xl bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
        >
          ❌ End Interview
        </button>
      </div>
    </div>
  );
}
