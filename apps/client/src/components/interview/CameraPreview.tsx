import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function CameraPreview() {
  const webcamRef = useRef<Webcam>(null);

  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div className="relative flex h-[450px] items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      {!cameraReady && !cameraError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900">
          <div className="mb-4 text-6xl">📷</div>

          <h2 className="text-xl font-semibold text-white">
            Starting Camera...
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Please allow camera permission.
          </p>
        </div>
      )}

      {cameraError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900">
          <div className="mb-4 text-6xl">❌</div>

          <h2 className="text-xl font-semibold text-red-400">
            Camera Access Denied
          </h2>

          <p className="mt-2 max-w-sm text-center text-sm text-slate-400">
            Please allow camera access from your browser and refresh the page.
          </p>
        </div>
      )}

      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored
        videoConstraints={videoConstraints}
        onUserMedia={() => {
          setCameraReady(true);
          setCameraError(false);
        }}
        onUserMediaError={() => {
          setCameraError(true);
          setCameraReady(false);
        }}
        className="h-full w-full object-cover"
      />

      {cameraReady && (
        <div className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white shadow-lg">
          ● Live
        </div>
      )}
    </div>
  );
}

