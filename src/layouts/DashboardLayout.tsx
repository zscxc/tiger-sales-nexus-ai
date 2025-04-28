
import React from 'react';
import { Navigation } from '@/components/common/Navigation';
import { SidebarProvider, SidebarRail, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Navigation />
        <SidebarRail />
        <main className="flex-1 p-0">
          <div className="container mx-auto px-4 py-6">
            <div className="md:hidden mb-4">
              <SidebarTrigger className="flex items-center justify-center h-10 w-10 rounded-md border bg-white shadow-sm" />
            </div>
            {children}
          </div>
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};
