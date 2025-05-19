
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SupabaseProvider } from "@/auth/SupabaseProvider";
import { AppSidebar } from "@/components/app-sidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Theory from "./pages/Theory";
import Quiz from "./pages/Quiz";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
import Challenges from "./pages/Challenges";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-bg flex w-full font-inter">
    <AppSidebar />
    <main className="flex-1">
      {children}
    </main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SupabaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/theory" element={<Layout><Theory /></Layout>} />
            <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
            <Route path="/challenges" element={<Layout><Challenges /></Layout>} />
            <Route path="/notes" element={<Layout><Notes /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SupabaseProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
