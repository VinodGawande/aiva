import { useMemo, useState } from "react";
import { interviewQuestions } from "../data/questions";
import type { InterviewAnswer } from "../types/interview";

export const useInterview = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<InterviewAnswer[]>([]);

  const currentQuestion = useMemo(
    () => interviewQuestions[currentQuestionIndex],
    [currentQuestionIndex]
  );

  const totalQuestions = interviewQuestions.length;

  const progress = Math.round(
    ((currentQuestionIndex + 1) / totalQuestions) * 100
  );

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const saveAnswer = (answer: string) => {
    setAnswers((prev) => {
      const existing = prev.find(
        (item) => item.questionId === currentQuestion.id
      );

      if (existing) {
        return prev.map((item) =>
          item.questionId === currentQuestion.id
            ? { ...item, answer }
            : item
        );
      }

      return [
        ...prev,
        {
          questionId: currentQuestion.id,
          answer,
        },
      ];
    });
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answers,
    nextQuestion,
    previousQuestion,
    saveAnswer,
  };
};
