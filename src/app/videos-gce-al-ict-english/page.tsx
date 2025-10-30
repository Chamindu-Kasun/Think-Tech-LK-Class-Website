'use client';

import { useState } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { PlayIcon, ClockIcon, VideoCameraIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface Unit {
  unit_number: number;
  unit_title: string;
  periods: number;
  topics: string[];
}

export default function VideosPage() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  
  const handleVideoClick = (unitTitle: string, topic: string) => {
    console.log(`Playing video for: ${unitTitle} - ${topic}`);
    
    // Construct video path - could be MP4, YouTube embed, or other video formats
    const videoPath = `/videos/${encodeURIComponent(unitTitle)}/${encodeURIComponent(topic)}.mp4`;
    
    // Try to open the video - you can modify this to use a video player modal instead
    const newWindow = window.open(videoPath, '_blank');
    
    // If video doesn't exist, show a helpful message
    if (newWindow) {
      newWindow.onload = () => {
        // Video loaded successfully
      };
      newWindow.onerror = () => {
        alert(`Video not found for:\nUnit: ${unitTitle}\nTopic: ${topic}\n\nPlease add the video file to: public/videos/${unitTitle}/${topic}.mp4`);
      };
    }
  };

  const getUnitIcon = (unitNumber: number) => {
    const icons = ['💡', '🖥️', '🔢', '⚡', '🛠️', '🌐', '📋', '🗄️', '👨‍💻', '🌍', '🤖', '💼', '🚀', '📚'];
    return icons[unitNumber - 1] || '📚';
  };

  const getEstimatedDuration = (topicIndex: number) => {
    // Simulate different video durations
    const durations = ['5-8 min', '10-15 min', '8-12 min', '12-18 min', '6-10 min', '15-20 min', '7-11 min', '9-14 min'];
    return durations[topicIndex % durations.length];
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
            Video Tutorials
          </p>
        </div>

        {selectedUnit ? (
          /* Video Topics View */
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
                      <VideoCameraIcon className="w-4 h-4" />
                      {selectedUnit.topics.length} videos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedUnit.topics.map((topic, index) => (
                <div
                  key={index}
                  onClick={() => handleVideoClick(selectedUnit.unit_title, topic)}
                  className="card rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg group overflow-hidden"
                >
                  {/* Video Thumbnail Placeholder */}
                  <div className="relative h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <PlayIcon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      Video {index + 1}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      {getEstimatedDuration(index)}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-medium text-sm leading-snug mb-2" style={{color: 'var(--foreground)'}}>
                      {topic}
                    </h3>
                    <div className="flex items-center justify-between text-xs" style={{color: 'var(--foreground)', opacity: 0.6}}>
                      <span className="flex items-center gap-1">
                        <VideoCameraIcon className="w-3 h-3" />
                        HD Quality
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpenIcon className="w-3 h-3" />
                        Lesson {index + 1}
                      </span>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="mt-3 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to watch video →
                    </div>
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
                      <VideoCameraIcon className="w-3 h-3" />
                      <span>{unit.topics.length} videos</span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to watch videos →
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