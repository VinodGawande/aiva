type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  emoji,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500">
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400 leading-7">
        {description}
      </p>
    </div>
  );
}
