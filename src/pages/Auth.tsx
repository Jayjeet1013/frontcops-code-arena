
import { useEffect, useState } from "react";
import { useAuth } from "@/auth/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Mode = "login" | "signup";

export default function AuthPage() {
  const { user, supabase } = useAuth();
  const nav = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If already logged in, go straight to dashboard
    if (user) nav("/dashboard");
  }, [user, nav]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: pw,
      });
      if (error) setError(error.message);
    }
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password: pw,
      });
      if (error) setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-soft p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4 text-primary font-inter">FrontCops {mode === "signup" ? "Signup" : "Login"}</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <input
            type="email"
            required
            placeholder="Email"
            className="p-3 mb-3 border rounded outline-none font-inter"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="p-3 mb-4 border rounded outline-none font-inter"
            value={pw}
            onChange={e=>setPw(e.target.value)}
            disabled={loading}
          />
          <Button className="w-full mb-2" disabled={loading}>
            {mode === "login" ? "Log In" : "Sign Up"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="text-primary text-sm w-full"
            onClick={() => setMode(m => m === "login" ? "signup" : "login")}
            disabled={loading}
          >
            {mode === "login" ? "New? Create an Account" : "Have an account? Log In"}
          </Button>
          {error && (<div className="text-red-600 mt-3 text-sm">{error}</div>)}
        </form>
      </div>
    </div>
  );
}
