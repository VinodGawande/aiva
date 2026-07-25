type QuestionPanelProps = {
  question: string;
};

export default function QuestionPanel({
  question,
}: QuestionPanelProps) {
  return (
    <div className="flex h-[450px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold">
        🤖 AI Interviewer
      </h2>

      <div className="mt-6 flex-1 rounded-xl bg-slate-800 p-6">
        <p className="text-lg leading-8 text-slate-200">
          {question}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-violet-500/30 bg-violet-600/10 p-4">
        <p className="text-sm text-violet-300">
          🎤 Listen carefully and answer naturally. The AI
          will evaluate your communication and technical
          skills.
        </p>
      </div>
    </div>
  );
}
