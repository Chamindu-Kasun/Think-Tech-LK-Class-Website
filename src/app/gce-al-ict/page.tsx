'use client';

import { useState, useEffect } from 'react';
import ictLessons from '@/data/ict-lessons.json';
import { ChatBubbleLeftRightIcon, ClockIcon, BookOpenIcon, DocumentTextIcon, PencilSquareIcon, QuestionMarkCircleIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

interface Unit {
  unit_number: number;
  unit_title: string;
  periods: number;
  topics: string[];
}

type DiscussionType = 'video' | 'tute' | 'questions';

export default function DiscussionsPage() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'video' | 'pdf' | null>(null);
  const [modalSrc, setModalSrc] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) setModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  // Update this base to your S3 bucket URL
  const S3_BASE = 'https://example-bucket.s3.amazonaws.com/discussions';

  // sanitize/encode helper
  const makeResourceUrl = (unitTitle: string, topic: string, discussionType: DiscussionType) => {
    const folder = discussionType === 'video' ? 'Videos' : discussionType === 'tute' ? 'Tutes' : 'Questions';
    const ext = discussionType === 'video' ? '.mp4' : '.pdf';
    const encodedUnit = encodeURIComponent(unitTitle);
    const encodedTopic = encodeURIComponent(topic);
    // prefer S3, fall back to public path if you keep files locally
    return `${S3_BASE}/${encodedUnit}/${folder}/${encodedTopic}${ext}`;
  };

  // open modal for video or pdf (tute) — use example S3 url
  const openResourceModal = (unitTitle: string, topic: string, discussionType: DiscussionType) => {
    const url = makeResourceUrl(unitTitle, topic, discussionType);
    setModalType(discussionType === 'video' ? 'video' : 'pdf');
    setModalSrc(url);
    setModalTitle(`${topic} — ${discussionType === 'video' ? 'Video' : 'Tute'}`);
    setModalLoading(true);
    setModalOpen(true);
  };

  // fallback click handler for "questions" or legacy behaviour (open pdf in new tab)
  const handleDiscussionClick = (unitTitle: string, topic: string, discussionType: DiscussionType) => {
    if (discussionType === 'video' || discussionType === 'tute') {
      openResourceModal(unitTitle, topic, discussionType);
      return;
    }

    // keep previous behaviour for other types (open pdf in new tab)
    const discussionTypeFolder = discussionType === 'video' ? 'Videos' :
                                 discussionType === 'tute' ? 'Tutes' : 'Questions';
    const pdfPath = `${S3_BASE}/${encodeURIComponent(unitTitle)}/${discussionTypeFolder}/${encodeURIComponent(topic)}.pdf`;

    const newWindow = window.open(pdfPath, '_blank');
    if (!newWindow) {
      alert('Unable to open new window. Please allow popups or try the resource from the file system.');
    }
  };

  const getUnitIcon = (unitNumber: number) => {
    const icons = ['💡', '🖥️', '🔢', '⚡', '🛠️', '🌐', '📋', '🗄️', '👨‍💻', '🌍', '🤖', '💼', '🚀', '📚'];
    return icons[unitNumber - 1] || '📚';
  };

  const getDiscussionTypeInfo = (type: DiscussionType) => {
    switch (type) {
      case 'video':
        return {
          icon: <VideoCameraIcon className="w-5 h-5" />,
          title: 'Video',
          description: 'Video explanation',
          color: 'from-green-500 to-emerald-600',
          textColor: 'text-green-600'
        };
      case 'tute':
        return {
          icon: <DocumentTextIcon className="w-5 h-5" />,
          title: 'Tute',
          description: 'Printable tutorial (PDF)',
          color: 'from-blue-500 to-cyan-600',
          textColor: 'text-blue-600'
        };
      case 'questions':
        return {
          icon: <PencilSquareIcon className="w-5 h-5" />,
          title: 'Questions',
          description: 'Question set / MCQ',
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
            {ictLessons.subject} - {ictLessons.grade} 
          </p>
          <p className="text-sm mt-1" style={{color: 'var(--foreground)', opacity: 0.6}}>
            Videos | Tutes | Questions
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
                    {selectedUnit.unit_number}: {selectedUnit.unit_title}
                  </h2>
                  <div className="flex items-center gap-4 mt-2 text-sm" style={{color: 'var(--foreground)', opacity: 0.7}}>
                    <span className="flex items-center gap-1">
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                      {selectedUnit.topics.length} topics
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
                  </div>

                  {/* Discussion Type Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-8">
                    {(['video', 'tute', 'questions'] as DiscussionType[]).map((discussionType) => {
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
                            {/* Hover indicator */}
                            <div className={`mt-3 text-xs ${typeInfo.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                              Click to open →
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

                  {/* Hover indicator */}
                  <div className="mt-4 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/60" onClick={() => setModalOpen(false)} />

          <div className="relative max-w-4xl w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b dark:border-slate-700">
              <div className="text-sm font-medium">{modalTitle}</div>
              <div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-sm px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-700"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-4">
              {modalType === 'video' ? (
                <>
                  {modalLoading && <div className="mb-2 text-sm text-slate-500">Loading video…</div>}
                  <video
                    src={modalSrc}
                    controls
                    autoPlay
                    className="w-full h-[420px] bg-black rounded-md"
                    onCanPlay={() => setModalLoading(false)}
                    onError={() => {
                      setModalLoading(false);
                      alert('Failed to load video. Check S3 URL or CORS settings.\n\nURL: ' + modalSrc);
                      setModalOpen(false);
                    }}
                  />
                </>
              ) : (
                <>
                  {modalLoading && <div className="mb-2 text-sm text-slate-500">Loading document…</div>}
                  <iframe
                    src={modalSrc}
                    className="w-full h-[720px] rounded-md border"
                    title={modalTitle}
                    onLoad={() => setModalLoading(false)}
                    // iframe onError isn't reliable — provide user hint if it fails to render
                  />
                  <div className="mt-2 text-xs text-slate-500">
                    If the PDF does not display, open it directly: <button className="text-blue-600 underline" onClick={() => window.open(modalSrc, '_blank')}>Open in new tab</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}