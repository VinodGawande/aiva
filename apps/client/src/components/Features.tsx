import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-black">
          Why Choose AIVA?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Everything you need to prepare for technical interviews.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <FeatureCard
            emoji="🎤"
            title="AI Voice Interview"
            description="Talk naturally with an AI interviewer that behaves like a real recruiter."
          />

          <FeatureCard
            emoji="📄"
            title="Resume Analysis"
            description="Questions are generated according to your resume and experience."
          />

          <FeatureCard
            emoji="📊"
            title="Performance Report"
            description="Receive detailed reports with strengths and improvement areas."
          />

          <FeatureCard
            emoji="🧠"
            title="Adaptive Questions"
            description="The AI asks follow-up questions based on your previous answers."
          />

          <FeatureCard
            emoji="🎥"
            title="Camera Analysis"
            description="Eye contact, confidence and facial engagement are analyzed."
          />

          <FeatureCard
            emoji="💼"
            title="Company Specific"
            description="Practice interviews for Google, Amazon, Microsoft and more."
          />

        </div>
      </div>
    </section>
  );
}
