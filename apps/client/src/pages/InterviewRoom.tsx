import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InterviewHeader from "../components/interview/InterviewHeader";
import CameraPreview from "../components/interview/CameraPreview";
import QuestionPanel from "../components/interview/QuestionPanel";
import InterviewFooter from "../components/interview/InterviewFooter";

export default function InterviewRoom() {
  const navigate = useNavigate();

  const [isRecording] = useState(false);

  const question =
    "Tell me about yourself and explain why you want to become a Full Stack Developer.";

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <InterviewHeader
          currentQuestion={1}
          totalQuestions={10}
          timeLeft="15:00"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <CameraPreview />

          <QuestionPanel question={question} />
        </div>

        <InterviewFooter
          isRecording={isRecording}
          onEndInterview={() => navigate("/interview/result")}
        />
      </div>
    </div>
  );
}
