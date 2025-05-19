
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/SupabaseProvider";
import { Button } from "@/components/ui/button";

const heroTopics = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
const description =
  "Your AI-powered platform for mastering frontend interviews. Practice theory, quizzes, coding challenges and track your progress seamlessly.";

export default function Index() {
  const { user, supabase } = useAuth();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
    if (error) setError(error.message);
    else nav("/dashboard");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    nav("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-soft p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-primary font-inter">🚔 FrontCops</h1>
        <p className="text-gray-600 text-center mb-6">{description}</p>

        {/* --- New content blocks depending on auth state --- */}
        {user ? (
          <div className="w-full flex flex-col items-center mb-4">
            <div className="mb-2 text-primary text-lg font-semibold">
              👋 Welcome back, {user.email}
            </div>
            <Button
              className="bg-primary text-white rounded-lg py-2 px-4 mt-2 font-semibold w-full"
              onClick={()=>nav("/dashboard")}
            >
              Go to Dashboard
            </Button>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2 mb-4">
            <Button className="w-full" onClick={() => nav("/auth")}>
              Sign In
            </Button>
            <Button className="w-full" variant="outline" onClick={() => nav("/auth")}>
              Sign Up
            </Button>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {heroTopics.map(topic => (
            <span key={topic} className="bg-primary/10 text-primary py-1 px-3 rounded-full text-xs font-medium">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
