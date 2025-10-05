import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideMenu } from "@/components/sidemenu/sidemenu";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <SidebarProvider>
          <SideMenu />
          <main>
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
