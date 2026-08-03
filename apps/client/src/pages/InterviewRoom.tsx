import { useNavigate } from "react-router-dom";

import InterviewHeader from "../components/interview/InterviewHeader";
import ProgressBar from "../components/interview/ProgressBar";
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
  resetTranscript,
} = useSpeechRecognition();

  const {
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  progress,
  nextQuestion,
  previousQuestion,
  saveAnswer,
} = useInterview();

const handleNextQuestion = () => {
  stopListening();

  saveAnswer(transcript);

  resetTranscript();

  nextQuestion();
};

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <InterviewHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          timeLeft={formattedTime}
        />

        <div className="mb-6">
          <ProgressBar progress={progress} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
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
  isFirstQuestion={currentQuestionIndex === 0}
  isLastQuestion={currentQuestionIndex === totalQuestions - 1}
  onStartRecording={startListening}
  onStopRecording={stopListening}
  onPreviousQuestion={previousQuestion}
  onNextQuestion={handleNextQuestion}
  onEndInterview={() => navigate("/interview/result")}
/>
        </div>
      </div>
    </div>
  );
}

