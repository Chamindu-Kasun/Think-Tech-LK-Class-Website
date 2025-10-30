'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

interface SubMenuItem {
  name: string;
  path?: string;
  icon: string;
  subItems?: SubMenuItem[];
}

interface SidebarItem {
  name: string;
  path?: string;
  icon: string;
  subItems?: SubMenuItem[];
}

const sidebarItems: SidebarItem[] = [
  { 
    name: "Home", 
    path: "/about", 
    icon: "ℹ️" 
  },
  {
    name: "Local",
    icon: "🎓",
    subItems: [
      { 
        name: "English Medium", 
        icon: "🇬🇧",
        subItems: [
          { name: "Tutes", path: "/tutorials-gce-al-ict-english", icon: "📚" },
          { name: "Videos", path: "/videos-gce-al-ict-english", icon: "🎥" },
          { name: "Questions", path: "/discussions-gce-al-ict-english", icon: "💬" },
          { name: "Past Papers", path: "/past-papers-gce-al-ict-english", icon: "📄" },
        ]
      },
      { 
        name: "Sinhala Medium", 
        icon: "🇱🇰",
        subItems: [
          { name: "Tutes", path: "/tutorials-gce-al-ict-sinhala", icon: "📚" },
          { name: "Videos", path: "/videos-gce-al-ict-sinhala", icon: "🎥" },
          { name: "Questions", path: "/discussions-gce-al-ict-sinhala", icon: "💬" },
          { name: "Past Papers", path: "/past-papers-gce-al-ict-sinhala", icon: "📄" },
        ]
      }
    ]
  },
  {
    name: "Edexcel",
    icon: "🎓",
    subItems: [
      { name: "Tutes", path: "/tutorials-edexcel-ial-it", icon: "📚" },
      { name: "Videos", path: "/videos-edexcel-ial-it", icon: "🎥" },
      { name: "Questions", path: "/discussions-edexcel-ial-it", icon: "💬" },
      { name: "Past Papers", path: "/past-papers-edexcel-ial-it", icon: "📄" },
    ]
  },
  {
    name: "Quizzes",
    icon: "🧠",
    subItems: [
      { name: "English Quiz", path: "/quiz-english", icon: "�🇧" },
      { name: "Sinhala Quiz", path: "/quiz-sinhala", icon: "🇱🇰" },
    ]
  },
  { 
    name: "Contact", 
    path: "/contact", 
    icon: "📞" 
  }
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isItemExpanded = (itemName: string) => expandedItems.includes(itemName);

  const isSubItemActive = (subItems: SubMenuItem[] | undefined) => {
    if (!subItems) return false;
    return subItems.some(subItem => {
      if (subItem.path && pathname === subItem.path) return true;
      if (subItem.subItems) {
        return subItem.subItems.some(nestedItem => pathname === nestedItem.path);
      }
      return false;
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Sidebar */}
      <div
        className={`
          sidebar
          ${isCollapsed ? 'w-16' : 'w-16 md:w-64'} 
          border-r 
          transition-all duration-300 ease-in-out flex flex-col shadow-lg
        `}
        style={{ height: '100vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b sidebar-item flex-shrink-0 hidden md:flex">
          {!isCollapsed && (
            <h2 className="text-xl font-bold sidebar-item hidden md:block">
              Think Tech LK
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="sidebar-item p-2 rounded-lg transition-colors hidden md:block"
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
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.path || (pathname === '/' && item.name === 'About us');
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = isItemExpanded(item.name);
            const hasActiveSubItem = isSubItemActive(item.subItems);
            
            return (
              <div key={item.name} className="space-y-1">
                {/* Main Item */}
                <button
                  onClick={() => {
                    if (hasSubItems) {
                      toggleExpanded(item.name);
                    } else if (item.path) {
                      handleItemClick(item.path);
                    }
                  }}
                  className={`
                    sidebar-item w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200
                    ${isActive || hasActiveSubItem
                      ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-500' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                    ${isCollapsed ? 'justify-center' : 'justify-center md:justify-between'}
                    group
                  `}
                  style={{
                    backgroundColor: isActive || hasActiveSubItem ? '#dbeafe' : undefined,
                    color: isActive || hasActiveSubItem ? '#2563eb' : undefined,
                  }}
                  title={isCollapsed ? item.name : undefined}
                >
                  <div className="flex items-center">
                    {/* Icon */}
                    <div className={`
                      flex items-center justify-center text-lg
                      ${isCollapsed ? '' : 'md:mr-3'}
                    `}>
                      {item.icon}
                    </div>
                    
                    {!isCollapsed && (
                      <span className="font-medium truncate hidden md:inline">{item.name}</span>
                    )}
                  </div>
                  
                  {/* Expand/Collapse Arrow for items with subItems */}
                  {hasSubItems && !isCollapsed && (
                    <div className="hidden md:flex">
                      {isExpanded ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                      )}
                    </div>
                  )}
                  
                  {/* Tooltip for mobile and collapsed state */}
                  <div className="absolute left-16 ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 md:hidden">
                    {item.name}
                  </div>
                  {isCollapsed && (
                    <div className="absolute left-16 ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 hidden md:block">
                      {item.name}
                    </div>
                  )}
                </button>

                {/* Sub Items */}
                {hasSubItems && isExpanded && !isCollapsed && (
                  <div className="ml-4 space-y-1 hidden md:block">
                    {item.subItems!.map((subItem) => {
                      const isSubActive = subItem.path ? pathname === subItem.path : false;
                      const hasNestedSubItems = subItem.subItems && subItem.subItems.length > 0;
                      const isSubExpanded = isItemExpanded(subItem.name);
                      const hasActiveNestedItem = hasNestedSubItems && subItem.subItems!.some(nested => pathname === nested.path);
                      
                      return (
                        <div key={subItem.name} className="space-y-1">
                          <button
                            onClick={() => {
                              if (hasNestedSubItems) {
                                toggleExpanded(subItem.name);
                              } else if (subItem.path) {
                                handleItemClick(subItem.path);
                              }
                            }}
                            className={`
                              sidebar-item w-full flex items-center px-3 py-2 rounded-lg transition-all duration-200 text-sm
                              ${isSubActive || hasActiveNestedItem
                                ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-500'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                              }
                              justify-between
                              group
                            `}
                          >
                            <div className="flex items-center">
                              {/* Sub Item Icon */}
                              <div className="flex items-center justify-center text-base mr-3">
                                {subItem.icon}
                              </div>
                              
                              <span className="font-medium truncate">{subItem.name}</span>
                            </div>
                            
                            {/* Expand/Collapse Arrow for nested items */}
                            {hasNestedSubItems && (
                              <div className="flex">
                                {isSubExpanded ? (
                                  <ChevronUpIcon className="h-3 w-3" />
                                ) : (
                                  <ChevronDownIcon className="h-3 w-3" />
                                )}
                              </div>
                            )}
                          </button>

                          {/* Nested Sub Items */}
                          {hasNestedSubItems && isSubExpanded && (
                            <div className="ml-6 space-y-1">
                              {subItem.subItems!.map((nestedItem) => {
                                const isNestedActive = pathname === nestedItem.path;
                                
                                return (
                                  <button
                                    key={nestedItem.name}
                                    onClick={() => handleItemClick(nestedItem.path!)}
                                    className={`
                                      sidebar-item w-full flex items-center px-3 py-2 rounded-lg transition-all duration-200 text-xs
                                      ${isNestedActive
                                        ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-500'
                                        : 'text-gray-500 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300'
                                      }
                                      justify-start
                                      group
                                    `}
                                  >
                                    {/* Nested Item Icon */}
                                    <div className="flex items-center justify-center text-sm mr-3">
                                      {nestedItem.icon}
                                    </div>
                                    
                                    <span className="font-medium truncate">{nestedItem.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-item p-4 border-t space-y-3 flex-shrink-0">
          {/* Theme Toggle - Hidden on mobile since it's in the mobile header */}
          <div className="hidden md:flex justify-center">
            <ThemeToggle 
              showLabel={!isCollapsed} 
              className={isCollapsed ? 'px-2 py-2' : ''} 
            />
          </div>
          
          {!isCollapsed && (
            <div className="text-xs text-center hidden md:block" style={{color: 'var(--sidebar-text)', opacity: 0.6}}>
              © All rights reserved.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}