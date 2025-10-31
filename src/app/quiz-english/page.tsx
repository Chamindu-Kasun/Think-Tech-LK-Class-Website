'use client';

import { useEffect, useState } from 'react';
import QuizComponent from '@/components/QuizComponent';



export default function EnglishQuizPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateWithGemini = async (count = 5) => {
    setLoading(true);
    setError(null);
    setQuestions([]); // clear while loading to show spinner state
    try {
      const res = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: 'english', count })
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error ?? 'Failed to generate quiz');
      if (!payload?.quiz || !Array.isArray(payload.quiz)) throw new Error('Invalid quiz format from API');
      setQuestions(payload.quiz);
    } catch (e: any) {
      setError(e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  };

  // load on mount
  useEffect(() => {
    generateWithGemini(40);
  }, []);

  // called when user finishes the quiz -- fetch new questions
  const handleQuizComplete = () => {
    generateWithGemini(40);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto mb-4 flex items-center gap-3">
        {/* Loading spinner / status */}
        {loading ? (
          <div className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-md">
            <span className="text-sm">Loading questions...</span>
          </div>
        ) : (<></>)}

        {error && <div className="text-sm text-red-500 ml-3">{error}</div>}
      </div>

      <QuizComponent
        title="Mixed ICT Quiz - English"
        questions={questions}
        onComplete={handleQuizComplete}   
      />
    </div>
  );
}