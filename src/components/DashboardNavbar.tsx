
import { useAuth } from "@/auth/SupabaseProvider";
import { Button } from "@/components/ui/button";
import { LogOut, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DashboardNavbar() {
  const { user, supabase } = useAuth();
  const nav = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    nav("/");
    window.location.reload();
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-soft border-b z-30">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => nav("/")}
        title="Go to FrontCops landing"
      >
        <span className="text-2xl font-extrabold text-primary font-inter flex items-center gap-1">
          <Home size={22} className="text-primary" /> FrontCops
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 text-primary font-medium">
          {user && user.email}
        </span>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={handleSignOut}
        >
          <LogOut size={18} />
          Sign Out
        </Button>
      </div>
    </nav>
  );
}
