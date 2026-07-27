import { useEffect, useState } from "react";

export default function MicrophoneStatus() {
  const [permission, setPermission] = useState<
    "loading" | "granted" | "denied"
  >("loading");

  useEffect(() => {
    const checkMicrophone = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setPermission("granted");
      } catch {
        setPermission("denied");
      }
    };

    checkMicrophone();
  }, []);

  if (permission === "loading") {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        🎤 Checking microphone...
      </div>
    );
  }

  if (permission === "denied") {
    return (
      <div className="rounded-xl border border-red-700 bg-red-900/20 p-4 text-red-400">
        ❌ Microphone permission denied
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-green-700 bg-green-900/20 p-4 text-green-400">
      🎤 Microphone Ready
    </div>
  );
}
