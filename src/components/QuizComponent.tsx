'use client';

import { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
}

export default function QuizComponent({ title, questions, onComplete }: QuizComponentProps) {
  const MAX_QUESTIONS = 40;
  const displayedQuestions = questions.slice(0, Math.min(MAX_QUESTIONS, questions.length));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Reset local state when questions change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults({});
    setQuizCompleted(false);
  }, [questions]);

  useEffect(() => {
    if (quizCompleted && typeof onComplete === 'function') {
      onComplete();
    }
  }, [quizCompleted, onComplete]);

  if (displayedQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg></p>
        </div>
      </div>
    );
  }

  const currentQuestion = displayedQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === displayedQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const selectedAnswer = selectedAnswers[currentQuestion.id];
  const showResult = showResults[currentQuestion.id];

  const handleOptionSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    setShowResults(prev => ({
      ...prev,
      [currentQuestion.id]: true
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
    const correctAnswers = displayedQuestions.filter(q =>
      selectedAnswers[q.id] === q.correctAnswer
    ).length;
    return { correct: correctAnswers, total: displayedQuestions.length };
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults({});
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const score = getScore();
    const percentage = Math.round((score.correct / score.total) * 100);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-8 text-center">
          <div className="mb-6">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              percentage >= 70 
                ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {percentage >= 70 ? (
                <CheckCircleIcon className="w-10 h-10" />
              ) : (
                <XCircleIcon className="w-10 h-10" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Quiz Completed!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Your Score: <span className="font-bold">{score.correct}/{score.total} ({percentage}%)</span>
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            {displayedQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="text-left bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Q{index + 1}: {question.question}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {isCorrect ? (
                      <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                    )}
                    <span className={`font-medium ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Correct answer: {question.options.find(opt => opt.id === question.correctAnswer)?.text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          
          <button
            onClick={resetQuiz}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25">
        {/* Quiz Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {displayedQuestions.length}
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
                  (isLastQuestion && !showResult)
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
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / displayedQuestions.length) * 100}%` }}
              ></div>
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option) => {
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
                    ${isSelected && !showResult
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }
                    ${shouldHighlightCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      : ''
                    }
                    ${isIncorrect
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      : ''
                    }
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
                      {(isSelected || shouldHighlightCorrect) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                      {isIncorrect && (
                        <XCircleIcon className="w-4 h-4 text-white" />
                      )}
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
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {Object.keys(showResults).length}/{displayedQuestions.length} answered
            </div>
            
            <div className="space-x-3">
              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className={`
                    px-6 py-2 rounded-lg font-semibold transition-colors
                    ${selectedAnswer
                      ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>{isLastQuestion ? 'Complete Quiz' : 'Next Question'}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}