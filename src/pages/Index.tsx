
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/SupabaseProvider";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-soft p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-primary font-inter">🚔 FrontCops</h1>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        {user ? (
          <button className="bg-primary text-white rounded-lg py-2 px-4 mt-4 font-semibold" onClick={()=>nav("/dashboard")}>
            Go to Dashboard
          </button>
        ) : (
          <form onSubmit={handleLogin} className="w-full flex flex-col">
            <input
              type="email"
              required
              placeholder="Email"
              className="p-3 mb-3 border rounded outline-none font-inter"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="p-3 mb-4 border rounded outline-none font-inter"
              value={pw}
              onChange={e=>setPw(e.target.value)}
            />
            <button className="bg-primary hover:bg-indigo-600 text-white rounded-lg py-2 font-semibold transition-colors">
              Log in
            </button>
            <a
              href="#"
              onClick={() => nav("/signup")}
              className="text-primary text-sm mt-3 block hover:underline text-center"
            >
              New? Create an Account
            </a>
            {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
          </form>
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
