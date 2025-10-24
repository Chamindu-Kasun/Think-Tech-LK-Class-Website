'use client';

import { useState } from 'react';
import edexcelData from '@/data/ict-lessons-edexcel.json';
import { DocumentArrowDownIcon, CalendarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface PastPaper {
  year: number;
  papers: {
    name: string;
    unit: string;
    type: 'written' | 'coursework';
    duration: string;
    marks: number;
  }[];
}

export default function EdexcelPastPapers() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Generate years from 2013 to 2025
  const years = Array.from({ length: 13 }, (_, i) => 2025 - i);

  // Sample paper structure for Edexcel IAL IT
  const getPapersForYear = (year: number): PastPaper => ({
    year,
    papers: [
      {
        name: `Unit 1 - Information Technology Systems`,
        unit: 'Unit 1',
        type: 'written',
        duration: '1h 30min',
        marks: 90
      },
      {
        name: `Unit 2 - Practical Applications in IT`,
        unit: 'Unit 2', 
        type: 'written',
        duration: '1h 30min',
        marks: 90
      },
      {
        name: `Unit 3 - The Knowledge Worker`,
        unit: 'Unit 3',
        type: 'written',
        duration: '2h 30min',
        marks: 90
      },
      {
        name: `Unit 4 - Programming`,
        unit: 'Unit 4',
        type: 'written',
        duration: '2h 30min',
        marks: 90
      }
    ]
  });

  const handlePaperDownload = (year: number, paperName: string) => {
    console.log(`Downloading: ${year} - ${paperName}`);
    
    // Construct PDF path
    const fileName = `${year}_${paperName.replace(/\s+/g, '_').replace(/[^\w-]/g, '')}.pdf`;
    const pdfPath = `/past-papers-edexcel/${fileName}`;
    
    // Try to download the PDF
    const newWindow = window.open(pdfPath, '_blank');
    
    // If PDF doesn't exist, show a helpful message
    if (newWindow) {
      newWindow.onload = () => {
        // PDF loaded successfully
      };
      newWindow.onerror = () => {
        alert(`Past paper not found:\nYear: ${year}\nPaper: ${paperName}\n\nPlease add the PDF file to: public/past-papers-edexcel/${fileName}`);
      };
    }
  };

  const getYearIcon = (year: number) => {
    if (year >= 2023) return '🆕';
    if (year >= 2020) return '📋';
    if (year >= 2017) return '📄';
    return '📜';
  };

  const getPaperTypeColor = (type: 'written' | 'coursework') => {
    return type === 'written' 
      ? 'from-indigo-500 to-purple-600' 
      : 'from-orange-500 to-red-600';
  };

  const getPaperTypeIcon = (type: 'written' | 'coursework') => {
    return type === 'written' ? '📝' : '💼';
  };

  const getUnitIcon = (unitName: string) => {
    if (unitName.includes('Unit 1')) return '🖥️';
    if (unitName.includes('Unit 2')) return '🌐';
    if (unitName.includes('Unit 3')) return '💼';
    if (unitName.includes('Unit 4')) return '🗄️';
    return '📚';
  };

  return (
    <div className="p-6 min-h-screen" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-lg" style={{color: 'var(--foreground)', opacity: 0.8}}>
            {edexcelData.subject} - {edexcelData.qualification} (Past Papers)
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
                      Edexcel International Advanced Level
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getPapersForYear(selectedYear).papers.map((paper, index) => (
                <div
                  key={index}
                  onClick={() => handlePaperDownload(selectedYear, paper.name)}
                  className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  {/* Paper Header */}
                  <div className={`h-32 bg-gradient-to-br ${getPaperTypeColor(paper.type)} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-white text-center">
                      <div className="text-3xl mb-1">{getUnitIcon(paper.unit)}</div>
                      <div className="text-sm font-semibold">{paper.unit}</div>
                    </div>
                    
                    {/* Download Icon */}
                    <div className="absolute top-3 right-3 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                      <DocumentArrowDownIcon className="w-6 h-6" />
                    </div>
                    
                    {/* Paper Type Badge */}
                    <div className="absolute bottom-2 left-2 bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded">
                      {getPaperTypeIcon(paper.type)} {paper.type}
                    </div>
                  </div>
                  
                  {/* Paper Details */}
                  <div className="card border border-t-0 rounded-t-none rounded-b-lg p-4">
                    <h4 className="font-semibold text-sm mb-2" style={{color: 'var(--foreground)'}}>
                      {paper.name}
                    </h4>
                    <div className="space-y-2 text-xs" style={{color: 'var(--foreground)', opacity: 0.8}}>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {paper.duration}
                        </span>
                        <span className="font-semibold">
                          {paper.marks} marks
                        </span>
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
        <div className="card mt-8 p-6 rounded-lg border bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
          <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--foreground)'}}>
            📊 Past Papers Archive Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{years.length}</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Years Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">{years.length * 4}</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Total Papers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>Units per Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{edexcelData.first_teaching}</div>
              <div className="text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>First Teaching</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}