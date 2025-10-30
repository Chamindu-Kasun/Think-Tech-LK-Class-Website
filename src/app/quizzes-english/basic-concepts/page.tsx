import QuizComponent from '@/components/QuizComponent';

const basicConceptsQuestions = [
  {
    id: '1',
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
    question: 'What is the difference between Hardware and Software?',
    options: [
      { id: 'a', text: 'Hardware is physical components, Software is programs' },
      { id: 'b', text: 'Hardware is programs, Software is physical components' },
      { id: 'c', text: 'Both are the same thing' },
      { id: 'd', text: 'Only Hardware is needed' }
    ],
    correctAnswer: 'a',
    explanation: 'Hardware refers to the physical components of a computer system that you can touch, while Software refers to the programs, applications, and instructions that tell the hardware what to do.'
  },
  {
    id: '3',
    question: 'What is the primary function of the CPU?',
    options: [
      { id: 'a', text: 'Store data' },
      { id: 'b', text: 'Execute instructions' },
      { id: 'c', text: 'Manage files' },
      { id: 'd', text: 'Connect to networks' }
    ],
    correctAnswer: 'b',
    explanation: 'The CPU (Central Processing Unit) is often called the "brain" of the computer. Its primary function is to execute instructions and perform calculations by processing data according to program instructions.'
  },
  {
    id: '4',
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
    id: '5',
    question: 'How many digits are used in the binary number system?',
    options: [
      { id: 'a', text: '2 (0 and 1)' },
      { id: 'b', text: '3 (0, 1, and 2)' },
      { id: 'c', text: '8 (0 through 7)' },
      { id: 'd', text: '10 (0 through 9)' }
    ],
    correctAnswer: 'a',
    explanation: 'The binary number system uses only two digits: 0 and 1. This is the fundamental language of computers, where all data and instructions are represented using combinations of these two digits.'
  }
];

export default function EnglishBasicConceptsQuiz() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuizComponent 
        title="Basic Concepts - English"
        questions={basicConceptsQuestions}
      />
    </div>
  );
}