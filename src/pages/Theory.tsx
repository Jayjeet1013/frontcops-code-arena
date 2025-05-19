
import ProtectedRoute from "@/components/ProtectedRoute";

const theoryQ = [
  { topic: "HTML", q: "What are semantic elements in HTML? Name a few.", a: "Semantic elements clearly describe their meaning (e.g., <header>, <main>, <footer>, <article>). They help with SEO, accessibility, and code clarity." },
  { topic: "CSS", q: "Explain Flexbox and a scenario to use it.", a: "Flexbox is a layout model for 1D layouts. Use it for aligning content in a row or column and managing spacing/distribution easily." },
  { topic: "JavaScript", q: "What's the difference between let, const, and var?", a: "var is function-scoped, while let/const are block-scoped. const cannot be reassigned after declaration." },
  { topic: "React", q: "What is a React hook? Give an example.", a: "A hook is a function to manage state/lifecycle in functional components. Example: useState, useEffect." },
  { topic: "Next.js", q: "What features make Next.js different from CRA?", a: "Next.js supports SSR, file-based routing, API routes, static site gen, and better performance out of the box." }
];

export default function Theory() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-bg p-6 pb-24 max-w-2xl mx-auto font-inter">
        <h2 className="text-2xl font-bold mb-6 text-primary">Theory Questions</h2>
        <div className="flex flex-col gap-6">
          {theoryQ.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-soft">
              <h4 className="font-semibold text-lg mb-1">{t.topic}: <span className="text-gray-700">{t.q}</span></h4>
              <p className="text-accent mt-2">{t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
