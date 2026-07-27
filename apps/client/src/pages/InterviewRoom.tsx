import { useNavigate } from "react-router-dom";

import InterviewHeader from "../components/interview/InterviewHeader";
import CameraPreview from "../components/interview/CameraPreview";
import MicrophoneStatus from "../components/interview/MicrophoneStatus";
import QuestionPanel from "../components/interview/QuestionPanel";
import InterviewFooter from "../components/interview/InterviewFooter";
import useInterviewTimer from "../hooks/useInterviewTimer";
import TranscriptPanel from "../components/interview/TranscriptPanel";
import useSpeechRecognition from "../hooks/useSpeechRecognition";

export default function InterviewRoom() {
  const navigate = useNavigate();
  
  const { formattedTime } = useInterviewTimer({
    initialTime: 15 * 60,
    onComplete: () => navigate("/interview/result"),
  });

  const {
    transcript,
    isListening,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  const question =
    "Tell me about yourself and explain why you want to become a Full Stack Developer.";

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <InterviewHeader
          currentQuestion={1}
          totalQuestions={10}
          timeLeft={formattedTime}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-4">
            <CameraPreview />
            <MicrophoneStatus />
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <QuestionPanel question={question} />

            <TranscriptPanel
              transcript={transcript}
              isListening={isListening}
            />
          </div>
        </div>

        <div className="mt-6">
          <InterviewFooter
            isRecording={isListening}
            onStartRecording={startListening}
            onStopRecording={stopListening}
            onEndInterview={() => navigate("/interview/result")}
          />
        </div>
      </div>
    </div>
  );
}
