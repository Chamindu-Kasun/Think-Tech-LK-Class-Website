'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const sidebarItems = [
  { name: "About us", path: "/about", icon: "ℹ️" },
  { name: "A/L 2027", path: "/al-2027", icon: "🎓" },
  { name: "A/L 2026", path: "/al-2026", icon: "🎓" },
  { name: "Tutes", path: "/tutorials", icon: "📚" },
  { name: "Videos", path: "/videos", icon: "🎥" },
  { name: "Discussions", path: "/discussions", icon: "💬" },
  { name: "Past papers", path: "/past-papers", icon: "📄" },
  { name: "Contact", path: "/contact", icon: "📞" }
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Sidebar */}
      <div
        className={`
          sidebar
          ${isCollapsed ? 'w-16' : 'w-64'} 
          border-r 
          transition-all duration-300 ease-in-out flex flex-col shadow-lg
        `}
        style={{ height: '100vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b sidebar-item flex-shrink-0">
          {!isCollapsed && (
            <h2 className="text-xl font-bold sidebar-item">
              Think Tech LK
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="sidebar-item p-2 rounded-lg transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.path || (pathname === '/' && item.name === 'About us');
            
            return (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.path)}
                className={`
                  sidebar-item w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-500' 
                    : ''
                  }
                  ${isCollapsed ? 'justify-center' : 'justify-start'}
                  group
                `}
                style={{
                  backgroundColor: isActive ? '#dbeafe' : undefined,
                  color: isActive ? '#2563eb' : undefined,
                }}
                title={isCollapsed ? item.name : undefined}
              >
                {/* Icon */}
                <div className={`
                  flex items-center justify-center text-lg
                  ${isCollapsed ? '' : 'mr-3'}
                `}>
                  {item.icon}
                </div>
                
                {!isCollapsed && (
                  <span className="font-medium truncate">{item.name}</span>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-16 ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {item.name}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-item p-4 border-t space-y-3 flex-shrink-0">
          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle 
              showLabel={!isCollapsed} 
              className={isCollapsed ? 'px-2 py-2' : ''} 
            />
          </div>
          
          {!isCollapsed && (
            <div className="text-xs text-center" style={{color: 'var(--sidebar-text)', opacity: 0.6}}>
              © 2024 Think Tech LK
            </div>
          )}
        </div>
      </div>
    </div>
  );
}