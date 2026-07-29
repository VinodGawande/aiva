export interface InterviewQuestion {
  id: number;
  question: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface InterviewAnswer {
  questionId: number;
  answer: string;
}
