
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/auth/SupabaseProvider";
import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/theory", label: "Theory", desc: "Key concepts for interviews" },
  { to: "/quiz", label: "Quizzes", desc: "Test your knowledge" },
  { to: "/challenges", label: "Code Challenges", desc: "Solve code problems" },
  { to: "/notes", label: "Notes", desc: "Your personal cheat-sheet" },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-bg p-4 pt-12 max-w-2xl mx-auto font-inter">
        <h2 className="text-2xl font-bold mb-2">👋 Welcome, {user?.email?.split("@")[0] || "Frontend Developer"}!</h2>
        <p className="mb-6 text-gray-600">Let’s level up your frontend skills and prep for interviews – one topic at a time.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {quickLinks.map(link => (
            <Link to={link.to} key={link.label} className="bg-white shadow-soft rounded-2xl p-6 flex flex-col gap-1 border hover:scale-105 transition-transform duration-150">
              <span className="text-lg font-semibold text-primary">{link.label}</span>
              <span className="text-gray-400 text-sm">{link.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
