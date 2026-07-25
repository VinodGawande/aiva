type InterviewFooterProps = {
  isRecording: boolean;
  onEndInterview: () => void;
};

export default function InterviewFooter({
  isRecording,
  onEndInterview,
}: InterviewFooterProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-6">
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

      <button
        onClick={onEndInterview}
        className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
      >
        End Interview
      </button>
    </div>
  );
}
