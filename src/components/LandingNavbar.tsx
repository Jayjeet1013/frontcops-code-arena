
import { useAuth } from "@/auth/SupabaseProvider";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingNavbar() {
  const { user } = useAuth();
  const nav = useNavigate();

  const handleDashboard = () => nav("/dashboard");

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-soft border-b z-30">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => nav("/")}>
        <span className="text-2xl font-extrabold text-primary font-inter">🚔 FrontCops</span>
      </div>
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            {/* If NOT signed in, show Sign In / Up */}
            <Button className="flex items-center gap-2" onClick={() => nav("/auth")}>
              <LogIn size={18} /> Sign In
            </Button>
            <Button variant="outline" onClick={() => nav("/auth")}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            {/* If signed in, show Dashboard button */}
            <span className="flex items-center gap-2 text-primary font-medium">
              <User size={18} />
              {user.email}
            </span>
            <Button className="flex items-center gap-2" onClick={handleDashboard}>
              Dashboard
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
