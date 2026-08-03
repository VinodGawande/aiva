type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-2 flex justify-between text-sm">
        <span>Interview Progress</span>

        <span>{progress}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
