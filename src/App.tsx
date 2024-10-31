import { Outlet } from "react-router-dom";
import AppSidebar from "./components/app-sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <div>
            {/* Main */}
            <SidebarTrigger />
            <Outlet />
          </div>
          <Toaster richColors />
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
