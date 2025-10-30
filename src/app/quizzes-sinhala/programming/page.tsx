import QuizComponent from '@/components/QuizComponent';

const programmingQuestions = [
  {
    id: '1',
    question: 'Python හි variable එකක් declare කිරීමේ correct syntax එක කුමක්ද?',
    options: [
      { id: 'a', text: 'var x = 5' },
      { id: 'b', text: 'x = 5' },
      { id: 'c', text: 'int x = 5' },
      { id: 'd', text: 'declare x = 5' }
    ],
    correctAnswer: 'b',
    explanation: 'Python හි variable එකක් declare කිරීමට විශේෂ keyword එකක් අවශ්‍ය නැත. ඔබට සරලව variable name එක සහ value එක assign කළ හැකිය. උදාහරණයක් ලෙස: x = 5'
  },
  {
    id: '2',
    question: 'Loop එකක් නවත්වා ගැනීමට Python හි භාවිතා කරන keyword එක කුමක්ද?',
    options: [
      { id: 'a', text: 'stop' },
      { id: 'b', text: 'exit' },
      { id: 'c', text: 'break' },
      { id: 'd', text: 'end' }
    ],
    correctAnswer: 'c',
    explanation: '"break" keyword එක Python හි loop එකක් මැද පෙළේදී නවත්වා ගැනීමට භාවිතා කරයි. එය loop එකෙන් සම්පූර්ණයෙන්ම පිටවීමට සැලැස්වේ.'
  },
  {
    id: '3',
    question: 'List එකක length එක සොයා ගැනීමට භාවිතා කරන function එක කුමක්ද?',
    options: [
      { id: 'a', text: 'size()' },
      { id: 'b', text: 'length()' },
      { id: 'c', text: 'len()' },
      { id: 'd', text: 'count()' }
    ],
    correctAnswer: 'c',
    explanation: 'Python හි list, string, tuple වැනි data structures වල length එක සොයා ගැනීමට len() function එක භාවිතා කරයි. උදාහරණයක් ලෙස: len([1, 2, 3]) returns 3'
  },
  {
    id: '4',
    question: 'Python හි comment එකක් ලිවීමට භාවිතා කරන symbol එක කුමක්ද?',
    options: [
      { id: 'a', text: '//' },
      { id: 'b', text: '#' },
      { id: 'c', text: '/*' },
      { id: 'd', text: '--' }
    ],
    correctAnswer: 'b',
    explanation: 'Python හි single line comment එකක් ලිවීමට # symbol එක භාවිතා කරයි. # ට පසුව ලියන සියල්ල comment එකක් ලෙස සලකනු ලැබේ.'
  },
  {
    id: '5',
    question: 'Python හි indentation භාවිතා කරන්නේ කුමකටද?',
    options: [
      { id: 'a', text: 'Code එක සුන්දර කිරීමට' },
      { id: 'b', text: 'Code blocks define කිරීමට' },
      { id: 'c', text: 'Memory save කිරීමට' },
      { id: 'd', text: 'Speed වැඩි කිරීමට' }
    ],
    correctAnswer: 'b',
    explanation: 'Python හි indentation (spacing) code blocks define කිරීමට භාවිතා කරයි. අනෙකුත් programming languages වල { } brackets භාවිතා කරන තැන Python හි indentation භාවිතා කරයි.'
  }
];

export default function SinhalaProgrammingQuiz() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuizComponent 
        title="ක්‍රමලේඛන - සිංහල"
        questions={programmingQuestions}
      />
    </div>
  );
}