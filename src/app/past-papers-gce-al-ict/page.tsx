'use client';

import { useState } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { DocumentArrowDownIcon, CalendarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface PastPaper {
  year: number;
  papers: {
    name: string;
    type: 'theory' | 'practical';
    duration: string;
    marks: number;
  }[];
}

export default function GCEALPastPapers() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Generate years from 2013 to 2025
  const years = Array.from({ length: 13 }, (_, i) => 2025 - i);

  // Sample paper structure for GCE A/L ICT
  const getPapersForYear = (year: number): PastPaper => ({
    year,
    papers: [
      {
        name: `Paper 1 - Theory`,
        type: 'theory',
        duration: '3 hours',
        marks: 100
      },
      {
        name: `Paper 2 - Practical`,
        type: 'practical', 
        duration: '3 hours',
        marks: 50
      }
    ]
  });

  const handlePaperDownload = (year: number, paperName: string) => {
    console.log(`Downloading: ${year} - ${paperName}`);
    
    // Construct PDF path
    const fileName = `${year}_${paperName.replace(/\s+/g, '_').replace(/[^\w-]/g, '')}.pdf`;
    const pdfPath = `/past-papers/${fileName}`;
    
    // Try to download the PDF
    const newWindow = window.open(pdfPath, '_blank');
    
    // If PDF doesn't exist, show a helpful message
    if (newWindow) {
      newWindow.onload = () => {
        // PDF loaded successfully
      };
      newWindow.onerror = () => {
        alert(`Past paper not found:\nYear: ${year}\nPaper: ${paperName}\n\nPlease add the PDF file to: public/past-papers/${fileName}`);
      };
    }
  };

  const getYearIcon = (year: number) => {
    if (year >= 2023) return '🆕';
    if (year >= 2020) return '📋';
    if (year >= 2017) return '📄';
    return '📜';
  };

  const getPaperTypeColor = (type: 'theory' | 'practical') => {
    return type === 'theory' 
      ? 'from-blue-500 to-indigo-600' 
      : 'from-green-500 to-emerald-600';
  };

  const getPaperTypeIcon = (type: 'theory' | 'practical') => {
    return type === 'theory' ? '📝' : '💻';
  };

  return (
    <div className="p-6 min-h-screen" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-lg" style={{color: 'var(--foreground)', opacity: 0.8}}>
            {ictLessons.subject} - {ictLessons.grade} (Past Papers)
          </p>
          <p className="text-sm mt-1" style={{color: 'var(--foreground)', opacity: 0.6}}>
            Download past examination papers from 2013 to 2025
          </p>
        </div>

        {selectedYear ? (
          /* Papers for Selected Year */
          <div>
            <button
              onClick={() => setSelectedYear(null)}
              className="sidebar-item mb-6 px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105"
            >
              ← Back to Years
            </button>
            
            <div className="card p-6 rounded-lg shadow-lg border mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{getYearIcon(selectedYear)}</span>
                <div>
                  <h2 className="text-2xl font-bold" style={{color: 'var(--foreground)'}}>
                    {selectedYear} Past Papers
                  </h2>
                  <div className="flex items-center gap-4 mt-2 text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>
                    <span className="flex items-center gap-1">
                      <AcademicCapIcon className="w-4 h-4" />
                      GCE Advanced Level
                    </span>
                    <span className="flex items-center gap-1">
                      <DocumentArrowDownIcon className="w-4 h-4" />
                      {getPapersForYear(selectedYear).papers.length} papers available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Papers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getPapersForYear(selectedYear).papers.map((paper, index) => (
                <div
                  key={index}
                  onClick={() => handlePaperDownload(selectedYear, paper.name)}
                  className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  {/* Paper Header */}
                  <div className={`h-32 bg-gradient-to-br ${getPaperTypeColor(paper.type)} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">{getPaperTypeIcon(paper.type)}</div>
                      <div className="text-lg font-semibold">{paper.name}</div>
                    </div>
                    
                    {/* Download Icon */}
                    <div className="absolute top-3 right-3 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                      <DocumentArrowDownIcon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Paper Details */}
                  <div className="card border border-t-0 rounded-t-none rounded-b-lg p-4">
                    <div className="space-y-2 text-sm" style={{color: 'var(--foreground)', opacity: 0.8}}>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          Duration: {paper.duration}
                        </span>
                        <span className="font-semibold">
                          {paper.marks} marks
                        </span>
                      </div>
                      <div className="capitalize text-xs" style={{color: 'var(--foreground)', opacity: 0.6}}>
                        {paper.type} examination paper
                      </div>
                    </div>
                    
                    {/* Download Indicator */}
                    <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to download PDF →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Years Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {years.map((year) => (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                className="card p-6 rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group text-center"
              >
                <div className="text-4xl mb-3">{getYearIcon(year)}</div>
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>
                  {year}
                </h3>
                <div className="text-xs space-y-1" style={{color: 'var(--foreground)', opacity: 0.7}}>
                  <div className="flex items-center justify-center gap-1">
                    <DocumentArrowDownIcon className="w-3 h-3" />
                    <span>{getPapersForYear(year).papers.length} papers</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    <span>{year === 2025 ? 'Latest' : `${2025 - year} years ago`}</span>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  View papers →
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statistics Card */}
        <div className="card mt-8 p-6 rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>
            📊 Past Papers Archive Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{years.length}</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Years Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{years.length * 2}</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Total Papers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">2013</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Earliest Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">2025</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Latest Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}