export default function CameraPreview() {
  return (
    <div className="flex h-[450px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
      <div className="text-center">
        <div className="mb-4 text-7xl">📷</div>

        <h2 className="text-2xl font-semibold">
          Camera Preview
        </h2>

        <p className="mt-2 text-slate-400">
          Webcam will appear here.
        </p>
      </div>
    </div>
  );
}
