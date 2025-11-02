'use client';

import { useState } from 'react';
import { DocumentArrowDownIcon, CalendarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function PastPapersQuizEnglish() {

  // Generate years from 2013 to 2025
  const years = Array.from({ length: 13 }, (_, i) => 2025 - i);

  const getYearIcon = (year: number) => {
    if (year >= 2023) return '🆕';
    if (year >= 2020) return '📋';
    if (year >= 2017) return '📄';
    return '📜';
  };



  const getPaperTypeIcon = (type: 'theory' | 'practical') => {
    return type === 'theory' ? '📝' : '💻';
  };

  // Sample papers
  const papers = [
    { name: 'Paper 1 - Theory', type: 'theory', duration: '3 hours', marks: 100 },
    { name: 'Paper 2 - Practical', type: 'practical', duration: '2 hours', marks: 50 },
  ];

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-lg font-medium" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            ICT - G.C.E. Advanced Level 
          </p>
          <p className="text-sm mt-1" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            Practice Past Papers
          </p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {years.map((year) => (
              <div
                key={year}
                className="card p-6 rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group text-center"
              >
                <div className="text-4xl mb-3">{getYearIcon(year)}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  {year}
                </h3>
                <div className="text-xs space-y-1" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  <div className="flex items-center justify-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    <span>{year === 2025 ? 'Latest' : `${2025 - year} years ago`}</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Practice →
                </div>
              </div>
            ))}
          </div>
        

       
      </div>
    </div>
  );
}
