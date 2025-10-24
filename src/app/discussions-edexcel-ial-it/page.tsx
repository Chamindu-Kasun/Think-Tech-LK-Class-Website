'use client';

import { useState } from 'react';
import edexcelData from '@/data/ict-lessons-edexcel.json';
import { ChatBubbleLeftRightIcon, ClockIcon, BookOpenIcon, DocumentTextIcon, PencilSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface Unit {
  unit_number: number;
  unit_title: string;
  topics: string[];
}

type DiscussionType = 'mcq' | 'structured' | 'essay';

export default function EdexcelDiscussions() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  
  const handleDiscussionClick = (unitTitle: string, topic: string, discussionType: DiscussionType) => {
    console.log(`Opening ${discussionType} discussion for: ${unitTitle} - ${topic}`);
    
    // Construct PDF path based on discussion type
    const discussionTypeFolder = discussionType === 'mcq' ? 'MCQ' : 
                                 discussionType === 'structured' ? 'Structured Essay' : 'Essay';
    const pdfPath = `/discussions-edexcel/${encodeURIComponent(unitTitle)}/${discussionTypeFolder}/${encodeURIComponent(topic)}.pdf`;
    
    // Try to open the PDF
    const newWindow = window.open(pdfPath, '_blank');
    
    // If PDF doesn't exist, show a helpful message
    if (newWindow) {
      newWindow.onload = () => {
        // PDF loaded successfully
      };
      newWindow.onerror = () => {
        alert(`Discussion PDF not found for:\nUnit: ${unitTitle}\nTopic: ${topic}\nType: ${discussionTypeFolder}\n\nPlease add the PDF file to: public/discussions-edexcel/${unitTitle}/${discussionTypeFolder}/${topic}.pdf`);
      };
    }
  };

  const getUnitIcon = (unitNumber: number) => {
    const icons = ['🖥️', '🌐', '💼', '🗄️', '🚀'];
    return icons[unitNumber - 1] || '📚';
  };

  const getDiscussionTypeInfo = (type: DiscussionType) => {
    switch (type) {
      case 'mcq':
        return {
          icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
          title: 'MCQ Questions',
          description: 'Multiple Choice Questions with detailed explanations',
          color: 'from-green-500 to-emerald-600',
          textColor: 'text-green-600'
        };
      case 'structured':
        return {
          icon: <DocumentTextIcon className="w-5 h-5" />,
          title: 'Structured Essays',
          description: 'Step-by-step structured answer discussions',
          color: 'from-blue-500 to-cyan-600',
          textColor: 'text-blue-600'
        };
      case 'essay':
        return {
          icon: <PencilSquareIcon className="w-5 h-5" />,
          title: 'Essay Questions',
          description: 'Comprehensive essay-type question discussions',
          color: 'from-purple-500 to-pink-600',
          textColor: 'text-purple-600'
        };
    }
  };

  return (
    <div className="p-6 min-h-screen" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-lg" style={{color: 'var(--foreground)', opacity: 0.8}}>
            {edexcelData.subject} - {edexcelData.qualification} (Question Discussions)
          </p>
          <p className="text-sm mt-1" style={{color: 'var(--foreground)', opacity: 0.6}}>
            MCQ, Structured Essay, and Essay Question Discussions
          </p>
        </div>

        {selectedUnit ? (
          /* Discussion Topics View */
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
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                      {selectedUnit.topics.length} topics
                    </span>
                    <span className="flex items-center gap-1">
                      <DocumentTextIcon className="w-4 h-4" />
                      {selectedUnit.topics.length * 3} discussion materials
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Topic Discussion Materials */}
            <div className="space-y-8">
              {selectedUnit.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="card p-6 rounded-lg shadow-md border">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        {topicIndex + 1}
                      </div>
                      <h3 className="text-lg font-semibold" style={{color: 'var(--foreground)'}}>
                        {topic}
                      </h3>
                    </div>
                    <p className="text-sm ml-8" style={{color: 'var(--foreground)', opacity: 0.6}}>
                      Discussion materials for this topic
                    </p>
                  </div>

                  {/* Discussion Type Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-8">
                    {(['mcq', 'structured', 'essay'] as DiscussionType[]).map((discussionType) => {
                      const typeInfo = getDiscussionTypeInfo(discussionType);
                      return (
                        <div
                          key={discussionType}
                          onClick={() => handleDiscussionClick(selectedUnit.unit_title, topic, discussionType)}
                          className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                        >
                          {/* Discussion Type Header */}
                          <div className={`h-24 bg-gradient-to-br ${typeInfo.color} rounded-t-lg flex items-center justify-center`}>
                            <div className="text-white text-3xl">
                              {typeInfo.icon}
                            </div>
                          </div>
                          
                          {/* Discussion Info */}
                          <div className="card border border-t-0 rounded-t-none rounded-b-lg p-4">
                            <h4 className={`font-semibold text-sm mb-1 ${typeInfo.textColor}`}>
                              {typeInfo.title}
                            </h4>
                            <p className="text-xs leading-relaxed" style={{color: 'var(--foreground)', opacity: 0.7}}>
                              {typeInfo.description}
                            </p>
                            
                            {/* Hover indicator */}
                            <div className={`mt-3 text-xs ${typeInfo.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                              Click to open PDF →
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Units Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {edexcelData.units.map((unit) => (
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
                      <ChatBubbleLeftRightIcon className="w-3 h-3" />
                      <span>{unit.topics.length} topics</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <DocumentTextIcon className="w-3 h-3" />
                      <span>{unit.topics.length * 3} discussions</span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore discussions →
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