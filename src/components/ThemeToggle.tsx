'use client';

import * as React from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = true }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    console.log('Current theme:', theme);
    if (theme === 'light') {
      console.log('Switching to dark');
      setTheme('dark');
    } else if (theme === 'dark') {
      console.log('Switching to system');
      setTheme('system');
    } else {
      console.log('Switching to light');
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="h-4 w-4" />;
      case 'dark':
        return <MoonIcon className="h-4 w-4" />;
      case 'system':
        return <ComputerDesktopIcon className="h-4 w-4" />;
      default:
        return <SunIcon className="h-4 w-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'Light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
        text-gray-700 dark:text-gray-300 
        hover:bg-gray-100 dark:hover:bg-gray-800
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        ${className}
      `}
      title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
    >
      {getIcon()}
      {showLabel && (
        <span className="text-sm font-medium">{getLabel()}</span>
      )}
    </button>
  );
}

export default ThemeToggle;