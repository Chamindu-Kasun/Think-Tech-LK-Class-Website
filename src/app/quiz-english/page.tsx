import QuizComponent from '@/components/QuizComponent';

const mixedQuestions = [
  {
    id: '1',
    category: 'Basic Concepts',
    question: 'What does ICT stand for?',
    options: [
      { id: 'a', text: 'Information and Communication Technology' },
      { id: 'b', text: 'Internet and Computer Technology' },
      { id: 'c', text: 'Internal Computer Technology' },
      { id: 'd', text: 'Information Computer Theory' }
    ],
    correctAnswer: 'a',
    explanation: 'ICT stands for Information and Communication Technology, which encompasses all technologies used for handling telecommunications, broadcast media, intelligent building management systems, audiovisual processing and transmission systems, and network-based control and monitoring functions.'
  },
  {
    id: '2',
    category: 'Programming',
    question: 'Which of the following is the correct syntax to declare a variable in Python?',
    options: [
      { id: 'a', text: 'var x = 5' },
      { id: 'b', text: 'x = 5' },
      { id: 'c', text: 'int x = 5' },
      { id: 'd', text: 'declare x = 5' }
    ],
    correctAnswer: 'b',
    explanation: 'In Python, you don\'t need a special keyword to declare a variable. You simply assign a value to a variable name. For example: x = 5'
  },
  {
    id: '3',
    category: 'Database',
    question: 'What does SQL stand for?',
    options: [
      { id: 'a', text: 'Structured Query Language' },
      { id: 'b', text: 'Standard Query Language' },
      { id: 'c', text: 'Simple Query Language' },
      { id: 'd', text: 'Sequential Query Language' }
    ],
    correctAnswer: 'a',
    explanation: 'SQL stands for Structured Query Language. It is a standard language for managing and manipulating relational databases.'
  },
  {
    id: '4',
    category: 'Networks',
    question: 'What is the primary purpose of an IP address?',
    options: [
      { id: 'a', text: 'To encrypt data' },
      { id: 'b', text: 'To identify devices on a network' },
      { id: 'c', text: 'To store data' },
      { id: 'd', text: 'To create websites' }
    ],
    correctAnswer: 'b',
    explanation: 'An IP (Internet Protocol) address is a unique identifier assigned to each device connected to a network. It allows devices to locate and communicate with each other over the internet or local networks.'
  },
  {
    id: '5',
    category: 'Basic Concepts',
    question: 'What is the difference between RAM and ROM?',
    options: [
      { id: 'a', text: 'RAM is temporary, ROM is permanent' },
      { id: 'b', text: 'RAM is permanent, ROM is temporary' },
      { id: 'c', text: 'Both are temporary' },
      { id: 'd', text: 'Both are permanent' }
    ],
    correctAnswer: 'a',
    explanation: 'RAM (Random Access Memory) is volatile memory that temporarily stores data and programs currently in use, losing its contents when power is turned off. ROM (Read Only Memory) is non-volatile memory that permanently stores essential system instructions.'
  },
  {
    id: '6',
    category: 'Programming',
    question: 'Which keyword is used to stop a loop in Python?',
    options: [
      { id: 'a', text: 'stop' },
      { id: 'b', text: 'exit' },
      { id: 'c', text: 'break' },
      { id: 'd', text: 'end' }
    ],
    correctAnswer: 'c',
    explanation: 'The "break" keyword is used in Python to exit a loop prematurely when a certain condition is met.'
  },
  {
    id: '7',
    category: 'System Analysis',
    question: 'What is the primary purpose of system analysis?',
    options: [
      { id: 'a', text: 'To write code' },
      { id: 'b', text: 'To understand and improve systems' },
      { id: 'c', text: 'To design user interfaces' },
      { id: 'd', text: 'To test software' }
    ],
    correctAnswer: 'b',
    explanation: 'System analysis is the process of studying and understanding existing systems to identify problems, requirements, and opportunities for improvement before designing new or modified systems.'
  },
  {
    id: '8',
    category: 'Database',
    question: 'Which of the following is a primary key characteristic?',
    options: [
      { id: 'a', text: 'Can have duplicate values' },
      { id: 'b', text: 'Can be null' },
      { id: 'c', text: 'Must be unique and not null' },
      { id: 'd', text: 'Optional field' }
    ],
    correctAnswer: 'c',
    explanation: 'A primary key must be unique (no duplicates) and cannot be null. It serves as a unique identifier for each record in a database table.'
  },
  {
    id: '9',
    category: 'Networks',
    question: 'What does HTTP stand for?',
    options: [
      { id: 'a', text: 'HyperText Transfer Protocol' },
      { id: 'b', text: 'HyperText Transmission Protocol' },
      { id: 'c', text: 'HyperText Transport Protocol' },
      { id: 'd', text: 'HyperText Technology Protocol' }
    ],
    correctAnswer: 'a',
    explanation: 'HTTP stands for HyperText Transfer Protocol. It is the foundation of data communication on the World Wide Web, defining how messages are formatted and transmitted.'
  },
  {
    id: '10',
    category: 'Programming',
    question: 'What is the purpose of indentation in Python?',
    options: [
      { id: 'a', text: 'To make code look better' },
      { id: 'b', text: 'To define code blocks' },
      { id: 'c', text: 'To save memory' },
      { id: 'd', text: 'To increase speed' }
    ],
    correctAnswer: 'b',
    explanation: 'Indentation in Python is used to define code blocks and structure. Unlike other programming languages that use braces {}, Python uses indentation to group statements.'
  }
];

export default function EnglishQuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuizComponent 
        title="Mixed ICT Quiz - English"
        questions={mixedQuestions}
      />
    </div>
  );
}