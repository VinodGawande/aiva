type InterviewHeaderProps = {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: string;
};

export default function InterviewHeader({
  currentQuestion,
  totalQuestions,
  timeLeft,
}: InterviewHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div>
        <h1 className="text-3xl font-bold">
          AI Interview
        </h1>

        <p className="mt-1 text-slate-400">
          Question {currentQuestion} of {totalQuestions}
        </p>
      </div>

      <div className="rounded-xl bg-red-600 px-5 py-3 text-lg font-semibold">
        ⏱️ {timeLeft}
      </div>
    </div>
  );
}
