import QuizComponent from '@/components/QuizComponent';

const basicConceptsQuestions = [
  {
    id: '1',
    question: 'ICT යනු කුමක්ද?',
    options: [
      { id: 'a', text: 'Information and Communication Technology' },
      { id: 'b', text: 'Internet and Computer Technology' },
      { id: 'c', text: 'Internal Computer Technology' },
      { id: 'd', text: 'Information Computer Theory' }
    ],
    correctAnswer: 'a',
    explanation: 'ICT යනු Information and Communication Technology හි කෙටියෙන් ලියන ලද්දකි. මෙය තොරතුරු සහ සන්නිවේදන තාක්ෂණය අදහස් කරයි.'
  },
  {
    id: '2',
    question: 'Hardware සහ Software අතර වෙනස කුමක්ද?',
    options: [
      { id: 'a', text: 'Hardware යනු භෞතික කොටස්, Software යනු වැඩසටහන්' },
      { id: 'b', text: 'Hardware යනු වැඩසටහන්, Software යනු භෞතික කොටස්' },
      { id: 'c', text: 'දෙකම එකම දෙයයි' },
      { id: 'd', text: 'Hardware පමණක් අවශ්‍යයි' }
    ],
    correctAnswer: 'a',
    explanation: 'Hardware යනු පරිගණකයේ භෞතික කොටස් වන අතර Software යනු පරිගණකයේ ක්‍රියාකාරිත්වය සඳහා ලියන ලද වැඩසටහන් වේ.'
  },
  {
    id: '3',
    question: 'CPU හි මූලික කර්තව්‍ය කුමක්ද?',
    options: [
      { id: 'a', text: 'දත්ත ගබඩා කිරීම' },
      { id: 'b', text: 'උපදෙස් ක්‍රියාත්මක කිරීම' },
      { id: 'c', text: 'ගොනු කළමනාකරණය' },
      { id: 'd', text: 'ජාල සම්බන්ධීකරණය' }
    ],
    correctAnswer: 'b',
    explanation: 'CPU (Central Processing Unit) හි මූලික කර්තව්‍යය වන්නේ පරිගණක උපදෙස් ක්‍රියාත්මක කිරීම සහ දත්ත සකසන්න.'
  },
  {
    id: '4',
    question: 'RAM සහ ROM අතර වෙනස කුමක්ද?',
    options: [
      { id: 'a', text: 'RAM තාවකාලික, ROM ස්ථිර' },
      { id: 'b', text: 'RAM ස්ථිර, ROM තාවකාලික' },
      { id: 'c', text: 'දෙකම තාවකාලික' },
      { id: 'd', text: 'දෙකම ස්ථිර' }
    ],
    correctAnswer: 'a',
    explanation: 'RAM (Random Access Memory) තාවකාලික මතකයක් වන අතර විදුලිය නැති වූ විට දත්ත නැති වේ. ROM (Read Only Memory) ස්ථිර මතකයක් වන අතර විදුලිය නැති වූ විටත් දත්ත ඇත.'
  },
  {
    id: '5',
    question: 'බයිනරි සංඛ්‍යා ක්‍රමයේ භාවිතා වන අංක කිහිපයද?',
    options: [
      { id: 'a', text: '0, 1' },
      { id: 'b', text: '0, 1, 2' },
      { id: 'c', text: '1, 2' },
      { id: 'd', text: '0, 1, 2, 3' }
    ],
    correctAnswer: 'a',
    explanation: 'බයිනරි සංඛ්‍යා ක්‍රමයේ 0 සහ 1 යන අංක දෙක පමණක් භාවිතා වේ. මෙය පරිගණකවල මූලික භාෂාව වේ.'
  }
];

export default function SinhalaBasicConceptsQuiz() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuizComponent 
        title="මූලික සංකල්ප - සිංහල"
        questions={basicConceptsQuestions}
      />
    </div>
  );
}