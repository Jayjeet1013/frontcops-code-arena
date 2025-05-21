
import { useAuth } from "@/auth/SupabaseProvider";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingNavbar() {
  const { user, supabase } = useAuth();
  const nav = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    nav("/");
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-soft border-b z-30">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => nav("/")}>
        <span className="text-2xl font-extrabold text-primary font-inter">🚔 FrontCops</span>
      </div>
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Button className="flex items-center gap-2" onClick={() => nav("/auth")}>
              <LogIn size={18} /> Sign In
            </Button>
            <Button variant="outline" onClick={() => nav("/auth")}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <span className="flex items-center gap-2 text-primary font-medium">
              <User size={18} />
              {user.email}
            </span>
            <Button className="flex items-center gap-2" onClick={() => nav("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="outline" className="flex items-center gap-2" onClick={handleSignOut}>
              <LogOut size={18} /> Sign Out
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
