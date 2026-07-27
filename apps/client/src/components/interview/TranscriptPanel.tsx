type TranscriptPanelProps = {
  transcript: string;
  isListening: boolean;
};

export default function TranscriptPanel({
  transcript,
  isListening,
}: TranscriptPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Live Transcript
        </h2>

        {isListening ? (
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white animate-pulse">
            🎤 Listening...
          </span>
        ) : (
          <span className="rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-300">
            Idle
          </span>
        )}
      </div>

      <div className="min-h-[180px] rounded-xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
        {transcript.length > 0 ? (
          transcript
        ) : (
          <span className="text-slate-500">
            Start speaking to see your transcript here...
          </span>
        )}
      </div>
    </div>
  );
}
