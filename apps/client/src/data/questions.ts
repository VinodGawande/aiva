import type { InterviewQuestion } from "../types/interview";

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 1,
    category: "Introduction",
    difficulty: "Easy",
    question: "Tell me about yourself.",
  },
  {
    id: 2,
    category: "JavaScript",
    difficulty: "Easy",
    question: "What is the difference between var, let and const?",
  },
  {
    id: 3,
    category: "React",
    difficulty: "Medium",
    question: "Explain the Virtual DOM.",
  },
  {
    id: 4,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is middleware in Express.js?",
  },
  {
    id: 5,
    category: "MongoDB",
    difficulty: "Medium",
    question: "What is indexing in MongoDB?",
  },
];
