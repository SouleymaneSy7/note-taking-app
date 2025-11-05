import AppSidebar from "../features/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
