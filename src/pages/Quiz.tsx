
import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

const quizQuestions = [
  {
    q: "Which HTML element is used for the largest heading?",
    choices: ["<head>", "<h6>", "<h1>", "<title>"],
    correct: 2,
    topic: "HTML"
  },
  {
    q: "Which CSS property is used to change text color?",
    choices: ["font-color", "color", "text-style", "text-color"],
    correct: 1,
    topic: "CSS"
  },
  {
    q: "What will 'typeof null' return in JS?",
    choices: ["'object'", "'null'", "'undefined'", "'number'"],
    correct: 0,
    topic: "JavaScript"
  },
  {
    q: "Which hook runs side effects in React?",
    choices: ["useState", "useContext", "useEffect", "useMemo"],
    correct: 2,
    topic: "React"
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  function onSelect(idx: number) {
    setChecked(idx);
    if (idx === quizQuestions[step].correct) setScore(s => s + 1);
  }
  function nextQ() {
    setChecked(null);
    setStep(s => s + 1);
  }
  function resetQuiz() {
    setStep(0);
    setScore(0);
    setChecked(null);
  }
  if (step >= quizQuestions.length)
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-bg flex items-center justify-center font-inter">
          <div className="bg-white rounded-2xl shadow-soft p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Quiz Complete!</h2>
            <p className="text-xl mb-4">Score: <span className="font-bold">{score}/{quizQuestions.length}</span></p>
            <button className="bg-primary text-white rounded-lg py-2 px-5 font-semibold" onClick={resetQuiz}>Try Again</button>
          </div>
        </div>
      </ProtectedRoute>
    );
  const q = quizQuestions[step];

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-bg font-inter">
        <div className="bg-white shadow-soft rounded-2xl p-8 w-full max-w-md">
          <div className="mb-2 text-accent text-sm">{q.topic}</div>
          <h2 className="text-xl font-bold mb-6">{q.q}</h2>
          <div className="space-y-3">
            {q.choices.map((choice, i) => (
              <button
                key={choice}
                className={`block w-full py-2 px-4 rounded-lg border text-left
                  ${checked === i
                    ? i === q.correct
                      ? "bg-green-100 border-green-400"
                      : "bg-red-100 border-red-400"
                    : "bg-gray-50 border-gray-200 hover:bg-primary/10"} font-inter`}
                disabled={checked !== null}
                onClick={() => onSelect(i)}
              >
                {choice}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-gray-400 text-xs">Question {step + 1} of {quizQuestions.length}</span>
            <button
              className="ml-3 text-primary font-bold disabled:text-gray-300"
              onClick={nextQ}
              disabled={checked === null}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
