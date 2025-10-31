import { useEffect, useState } from 'react';
import QuizComponent from '@/components/QuizComponent';
import { fetchQuizQuestions } from '@/lib/geminiClient';

export default function EnglishQuizPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuizQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };

    getQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuizComponent 
        title="Mixed ICT Quiz - English"
        questions={questions}
      />
    </div>
  );
}