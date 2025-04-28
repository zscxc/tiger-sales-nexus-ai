
import React from 'react';
import { Navigation } from '@/components/common/Navigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Navigation />
        <main className="flex-1 p-0">
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};
