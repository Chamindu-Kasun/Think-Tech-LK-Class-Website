'use client';

import Sidebar from "@/components/Sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900" style={{ height: '100vh', overflow: 'hidden', backgroundColor: 'var(--background)', color: 'var(--foreground)' }} >
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}