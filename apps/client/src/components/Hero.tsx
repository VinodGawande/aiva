import Button from "./Button";
import InterviewPreview from "./InterviewPreview";
import Badge from "./Badge";


export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Badge text="🚀 AI Powered Interview Platform" />

          <h1 className="mt-6 text-6xl font-black leading-tight">
            Crack Your Next
            <span className="block text-violet-500">
              Technical Interview
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Practice with an AI interviewer that asks follow-up questions,
            analyzes your answers, and provides detailed feedback just like a
            real interviewer.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>Start Interview</Button>

            <Button variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <InterviewPreview />
        </div>
      </div>
    </section>
  );
}