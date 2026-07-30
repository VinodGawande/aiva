import { useNavigate } from "react-router-dom";

import InterviewHeader from "../components/interview/InterviewHeader";
import CameraPreview from "../components/interview/CameraPreview";
import MicrophoneStatus from "../components/interview/MicrophoneStatus";
import QuestionPanel from "../components/interview/QuestionPanel";
import InterviewFooter from "../components/interview/InterviewFooter";
import TranscriptPanel from "../components/interview/TranscriptPanel";

import useInterviewTimer from "../hooks/useInterviewTimer";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import { useInterview } from "../hooks/useInterview";

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

  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
  } = useInterview();

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <InterviewHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
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
            <QuestionPanel question={currentQuestion.question} />

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
