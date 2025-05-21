import { Home, Book, PieChart, Code, FileText, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/theory", label: "Theory", icon: Book },
  { to: "/quiz", label: "Quizzes", icon: PieChart },
  { to: "/challenges", label: "Code Challenges", icon: Code },
  { to: "/notes", label: "Notes", icon: FileText },
];

export function AppSidebar() {
  const nav = useNavigate();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <button
              type="button"
              className="text-primary hover:underline text-lg font-extrabold font-inter p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
              onClick={() => nav("/")}
              title="Go to FrontCops landing"
            >
              FrontCops
            </button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to} className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-primary/10 transition-colors">
                      <item.icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-gray-400 px-4 py-2">v1.0</div>
      </SidebarFooter>
    </Sidebar>
  );
}
