
import { Book, PieChart, Code, FileText } from "lucide-react";

const features = [
  {
    icon: <Book className="text-violet-600" size={32} />,
    title: "Rich Theory Content",
    desc: "Learn HTML, CSS, JavaScript, React, Next.js and more with comprehensive guides.",
  },
  {
    icon: <PieChart className="text-pink-500" size={32} />,
    title: "Practice Quizzes",
    desc: "Sharpen your skills with topic-specific quizzes and get instant explanations.",
  },
  {
    icon: <Code className="text-orange-400" size={32} />,
    title: "Coding Challenges",
    desc: "Tackle real-world frontend problems, write code, and get immediate feedback.",
  },
  {
    icon: <FileText className="text-green-600" size={32} />,
    title: "Notes & Progress",
    desc: "Take notes and track your interview preparation with ease.",
  }
];

export function LandingFeatures() {
  return (
    <section id="features" className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Why Choose FrontCops?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(f => (
            <div key={f.title} className="flex items-start gap-5 bg-purple-50 rounded-xl p-6 shadow-soft hover:scale-105 transition-transform">
              <div>{f.icon}</div>
              <div>
                <div className="text-lg font-semibold mb-1">{f.title}</div>
                <div className="text-gray-700">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
