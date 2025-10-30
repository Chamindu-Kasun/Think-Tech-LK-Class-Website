'use client';

import { useState } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { DocumentIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface Unit {
  unit_number: number;
  unit_title: string;
  periods: number;
  topics: string[];
}

export default function TutorialsPage() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  
  const handleTopicClick = (unitTitle: string, topic: string) => {
    console.log(`Loading PDF for: ${unitTitle} - ${topic}`);
    
    // Construct PDF path
    const pdfPath = `/pdfs/${encodeURIComponent(unitTitle)}/${encodeURIComponent(topic)}.pdf`;
    
    // Try to open the PDF
    const newWindow = window.open(pdfPath, '_blank');
    
    // If PDF doesn't exist, show a helpful message
    if (newWindow) {
      newWindow.onload = () => {
        // PDF loaded successfully
      };
      newWindow.onerror = () => {
        alert(`PDF not found for:\nUnit: ${unitTitle}\nTopic: ${topic}\n\nPlease add the PDF file to: public/pdfs/${unitTitle}/${topic}.pdf`);
      };
    }
  };

  const getUnitIcon = (unitNumber: number) => {
    const icons = ['💡', '🖥️', '🔢', '⚡', '🛠️', '🌐', '📋', '🗄️', '👨‍💻', '🌍', '🤖', '💼', '🚀', '📚'];
    return icons[unitNumber - 1] || '📚';
  };

  return (
    <div className="p-6 min-h-screen" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-lg" style={{color: 'var(--foreground)', opacity: 0.8}}>
            {ictLessons.subject} - {ictLessons.grade}
          </p>
          <p className="text-sm mt-1" style={{color: 'var(--foreground)', opacity: 0.6}}>
            Tutes
          </p>
        </div>

        {selectedUnit ? (
          /* Topic Details View */
          <div>
            <button
              onClick={() => setSelectedUnit(null)}
              className="sidebar-item mb-6 px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105"
            >
              ← Back to Units
            </button>
            
            <div className="card p-6 rounded-lg shadow-lg border mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{getUnitIcon(selectedUnit.unit_number)}</span>
                <div>
                  <h2 className="text-2xl font-bold" style={{color: 'var(--foreground)'}}>
                    Unit {selectedUnit.unit_number}: {selectedUnit.unit_title}
                  </h2>
                  <div className="flex items-center gap-4 mt-2 text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {selectedUnit.periods} periods
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpenIcon className="w-4 h-4" />
                      {selectedUnit.topics.length} topics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Topic Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedUnit.topics.map((topic, index) => (
                <div
                  key={index}
                  onClick={() => handleTopicClick(selectedUnit.unit_title, topic)}
                  className="card p-4 rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm leading-snug mb-2" style={{color: 'var(--foreground)'}}>
                        {topic}
                      </h3>
                      <div className="flex items-center gap-1 text-xs" style={{color: 'var(--foreground)', opacity: 0.6}}>
                        <DocumentIcon className="w-3 h-3" />
                        <span>PDF Material</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to open PDF →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Units Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ictLessons.units.map((unit) => (
              <div
                key={unit.unit_number}
                onClick={() => setSelectedUnit(unit)}
                className="card p-6 rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{getUnitIcon(unit.unit_number)}</div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-blue-600 mb-1">
                      Unit {unit.unit_number}
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-3" style={{color: 'var(--foreground)'}}>
                      {unit.unit_title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs" style={{color: 'var(--foreground)', opacity: 0.7}}>
                    <div className="flex items-center justify-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      <span>{unit.periods} periods</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <BookOpenIcon className="w-3 h-3" />
                      <span>{unit.topics.length} topics</span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore topics →
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}