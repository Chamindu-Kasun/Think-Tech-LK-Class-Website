'use client';

import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { QuizLockContext } from '@/context/QuizLockContext';

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

interface QuizComponentProps {
  title: string;
  questions: QuizQuestion[];
  onComplete?: () => void;
  // new props
  autoCompleteSignal?: number; // incrementing signal from parent to force completion
  remainingSeconds?: number; // seconds left (for display)
  isLocked?: boolean; // show lock indicator
}

export default function QuizComponent({
  title,
  questions,
  onComplete,
  autoCompleteSignal,
  remainingSeconds,
  isLocked,
}: QuizComponentProps) {
  const MAX_QUESTIONS = 40;
  const displayedQuestions = questions.slice(0, Math.min(MAX_QUESTIONS, questions.length));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { setLocked: setGlobalLocked } = useContext(QuizLockContext);
  const router = useRouter();

  const handleQuit = () => {
    const ok = window.confirm('Are you sure you want to exit the quiz? This will end your attempt and return you to Home.');
    if (!ok) return;
    setGlobalLocked(false);
    router.push('/');
  };

  // respond to force-complete signal from parent (time up)
  useEffect(() => {
    if (typeof autoCompleteSignal === 'number') {
      // when signal changes, complete the quiz
      setQuizCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoCompleteSignal]);

  // set global lock when quiz/questions are active; clear on unmount or when quiz completes
  useEffect(() => {
    if (displayedQuestions.length > 0) {
      setGlobalLocked(true);
    }

    return () => {
      setGlobalLocked(false);
    };
    // only care when questions length changes
  }, [displayedQuestions.length, setGlobalLocked]);

  // when quiz completes unlock globally
  useEffect(() => {
    if (quizCompleted) {
      setGlobalLocked(false);
    }
  }, [quizCompleted, setGlobalLocked]);

  // Reset local state when questions change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults({});
    setQuizCompleted(false);
  }, [questions]);

  const currentQuestion = displayedQuestions[currentQuestionIndex];
  // Safety: if questions array is empty or index out-of-range, show a placeholder to avoid runtime crash
  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">Loading question…</p>
        </div>
      </div>
    );
  }
  const isLastQuestion = currentQuestionIndex === displayedQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const selectedAnswer = currentQuestion ? selectedAnswers[currentQuestion.id] : undefined;
  const showResult = currentQuestion ? showResults[currentQuestion.id] : false;

  const handleOptionSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    setShowResults(prev => ({
      ...prev,
      [currentQuestion.id]: true,
    }));
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const getScore = () => {
    const correctAnswers = displayedQuestions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
    return { correct: correctAnswers, total: displayedQuestions.length };
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults({});
    setQuizCompleted(false);
    // re-lock because user is retaking the same quiz
    setGlobalLocked(true);
  };

  // format remainingSeconds
  const formatTime = (s?: number) => {
    if (typeof s !== 'number') return '';
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, '0');
    const ss = (s % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  // Completed screen: show total marks, per-question breakdown, retake/new quiz
  if (quizCompleted) {
    const score = getScore();
    const percentage = Math.round((score.correct / score.total) * 100);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6 gap-6">
            <div className="flex items-center gap-4">
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-0 ${
                  percentage >= 70
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                }`}
              >
                {percentage >= 70 ? <CheckCircleIcon className="w-12 h-12" /> : <XCircleIcon className="w-12 h-12" />}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quiz Completed</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">You've finished the quiz — see your marks and question analysis below.</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Marks</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {score.correct} / {score.total}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">({percentage}%)</div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Breakdown</h3>
            <div className="space-y-3">
              {displayedQuestions.map((question, index) => {
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                const userText = question.options.find(o => o.id === userAnswer)?.text ?? 'No answer';
                const correctText = question.options.find(o => o.id === question.correctAnswer)?.text ?? '—';

                return (
                  <div key={question.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col md:flex-row md:justify-between">
                    <div className="text-left">
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Q{index + 1}</div>
                      <div className="font-medium text-gray-900 dark:text-white">{question.question}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Your answer:{' '}
                        <span className={isCorrect ? 'font-semibold text-green-600 dark:text-green-300' : 'font-semibold text-red-600 dark:text-red-300'}>
                          {userText}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Correct: <span className="font-semibold text-green-600 dark:text-green-300">{correctText}</span>
                        </div>
                      )}
                      {question.explanation && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Explanation: <span className="block mt-1 text-sm text-gray-700 dark:text-gray-300">{question.explanation}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 md:mt-0 md:ml-6 flex items-center gap-3">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {isCorrect ? '+1' : '+0'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <button onClick={resetQuiz} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Retake (same questions)
            </button>

            <button
              onClick={() => {
                // Call parent to request a new quiz only when user explicitly clicks
                if (typeof onComplete === 'function') {
                  onComplete();
                } else {
                  resetQuiz();
                }
              }}
              className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-2 px-6 rounded-lg"
            >
              New Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question view
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25">
        {/* Quiz Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {isLocked ? (
                  <span className="inline-flex items-center gap-2 text-red-600 dark:text-red-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.1046 0 2 .8954 2 2v3H10v-3c0-1.1046.8954-2 2-2z" />
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 11V8a6 6 0 0112 0v3" />
                    </svg>
                    Quiz locked — do not navigate
                  </span>
                ) : null}
              </div>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
              <div>Question {currentQuestionIndex + 1} of {displayedQuestions.length}</div>
              {typeof remainingSeconds === 'number' && (
                <div className="text-xs mt-1 text-indigo-600 dark:text-indigo-300 font-mono">
                  Time left: {formatTime(remainingSeconds)}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls (no jump-to) */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePreviousQuestion}
                disabled={isFirstQuestion}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isFirstQuestion
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800'
                }`}
              >
                <ChevronLeftIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Previous</span>
              </button>

              <button
                onClick={handleNextQuestion}
                disabled={isLastQuestion && !showResult}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isLastQuestion && !showResult
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800'
                }`}
              >
                <span className="text-sm font-medium">{isLastQuestion ? 'Finish' : 'Next'}</span>
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / displayedQuestions.length) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-6">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {currentQuestion.category}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{currentQuestion.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map(option => {
              const isSelected = selectedAnswer === option.id;
              const isCorrect = option.id === currentQuestion.correctAnswer;
              const isIncorrect = showResult && isSelected && !isCorrect;
              const shouldHighlightCorrect = showResult && isCorrect;

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  disabled={showResult}
                  className={`
                    w-full p-4 text-left rounded-lg border-2 transition-all duration-200
                    ${isSelected && !showResult ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}
                    ${shouldHighlightCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : ''}
                    ${isIncorrect ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' : ''}
                    ${showResult ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700'}
                    ${!showResult && !isSelected ? 'text-gray-900 dark:text-gray-100' : ''}
                  `}
                >
                  <div className="flex items-center">
                    <div className={`
                      w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center
                      ${isSelected && !showResult ? 'border-blue-500 bg-blue-500' : 'border-gray-300 dark:border-gray-600'}
                      ${shouldHighlightCorrect ? 'border-green-500 bg-green-500' : ''}
                      ${isIncorrect ? 'border-red-500 bg-red-500' : ''}
                    `}>
                      {(isSelected || shouldHighlightCorrect) && <div className="w-2 h-2 bg-white rounded-full" />}
                      {isIncorrect && <XCircleIcon className="w-4 h-4 text-white" />}
                    </div>
                    <span className="font-medium dark:text-gray-100">{option.text}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-2">Explanation:</h3>
              <p className="text-blue-800 dark:text-blue-300">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">{Object.keys(showResults).length}/{displayedQuestions.length} answered</div>

            <div className="space-x-3">
              {!showResult ? (
                <button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className={`
                    px-6 py-2 rounded-lg font-semibold transition-colors
                    ${selectedAnswer ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'}
                  `}>
                  Submit Answer
                </button>
              ) : (
                <button onClick={handleNextQuestion} className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <span>{isLastQuestion ? 'Complete Quiz' : 'Next Question'}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quit button below actions */}
          {isLocked && (
            <div className="mt-4 flex justify-center md:justify-end">
              <button
                onClick={handleQuit}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold"
              >
                Quit Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}