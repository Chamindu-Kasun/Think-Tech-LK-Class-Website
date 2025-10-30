import QuizComponent from '@/components/QuizComponent';

const mixedQuestions = [
  {
    id: '1',
    category: 'මූලික සංකල්ප',
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
    category: 'ක්‍රමලේඛන',
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
    id: '3',
    category: 'දත්ත සමුදාය',
    question: 'SQL යන්නෙන් අදහස් කරන්නේ කුමක්ද?',
    options: [
      { id: 'a', text: 'Structured Query Language' },
      { id: 'b', text: 'Standard Query Language' },
      { id: 'c', text: 'Simple Query Language' },
      { id: 'd', text: 'Sequential Query Language' }
    ],
    correctAnswer: 'a',
    explanation: 'SQL යනු Structured Query Language හි කෙටියෙන් ලියන ලද්දකි. මෙය relational databases කළමනාකරණය සහ පාලනය කිරීම සඳහා භාවිතා කරන standard භාෂාවකි.'
  },
  {
    id: '4',
    category: 'ජාල',
    question: 'IP address එකක මූලික අරමුණ කුමක්ද?',
    options: [
      { id: 'a', text: 'දත්ත encrypt කිරීම' },
      { id: 'b', text: 'ජාලයේ devices හඳුනාගැනීම' },
      { id: 'c', text: 'දත්ත ගබඩා කිරීම' },
      { id: 'd', text: 'websites සෑදීම' }
    ],
    correctAnswer: 'b',
    explanation: 'IP (Internet Protocol) address එක ජාලයකට සම්බන්ධ වූ සෑම device එකකටම ලබා දෙන unique identifier එකකි. මෙය devices වලට එකිනෙකා සොයා ගැනීමට සහ සන්නිවේදනය කිරීමට උදව් කරයි.'
  },
  {
    id: '5',
    category: 'මූලික සංකල්ප',
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
    id: '6',
    category: 'ක්‍රමලේඛන',
    question: 'Python හි loop එකක් නවත්වා ගැනීමට භාවිතා කරන keyword එක කුමක්ද?',
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
    id: '7',
    category: 'පද්ධති විශ්ලේෂණය',
    question: 'පද්ධති විශ්ලේෂණයේ මූලික අරමුණ කුමක්ද?',
    options: [
      { id: 'a', text: 'කේත ලිවීම' },
      { id: 'b', text: 'පද්ධති අවබෝධ කර ගැනීම සහ වැඩිදියුණු කිරීම' },
      { id: 'c', text: 'user interfaces නිර්මාණය කිරීම' },
      { id: 'd', text: 'software පරීක්ෂා කිරීම' }
    ],
    correctAnswer: 'b',
    explanation: 'පද්ධති විශ්ලේෂණය යනු දැනට පවතින පද්ධති අධ්‍යයනය කර ගැටලු, අවශ්‍යතා සහ වැඩිදියුණු කිරීමේ අවස්ථා හඳුනාගැනීමේ ක්‍රියාවලියයි.'
  },
  {
    id: '8',
    category: 'දත්ත සමුදාය',
    question: 'Primary key එකක ලක්ෂණ කුමක්ද?',
    options: [
      { id: 'a', text: 'duplicate values තිබිය හැකිය' },
      { id: 'b', text: 'null විය හැකිය' },
      { id: 'c', text: 'unique හා null නොවිය යුතුය' },
      { id: 'd', text: 'optional field එකක්' }
    ],
    correctAnswer: 'c',
    explanation: 'Primary key එක unique (duplicates නැත) හා null නොවිය යුතුය. එය database table එකක සෑම record එකක්ම සඳහා unique identifier එකක් ලෙස ක්‍රියා කරයි.'
  },
  {
    id: '9',
    category: 'ජාල',
    question: 'HTTP යන්නෙන් අදහස් කරන්නේ කුමක්ද?',
    options: [
      { id: 'a', text: 'HyperText Transfer Protocol' },
      { id: 'b', text: 'HyperText Transmission Protocol' },
      { id: 'c', text: 'HyperText Transport Protocol' },
      { id: 'd', text: 'HyperText Technology Protocol' }
    ],
    correctAnswer: 'a',
    explanation: 'HTTP යනු HyperText Transfer Protocol හි කෙටියෙන් ලියන ලද්දකි. මෙය World Wide Web හි දත්ත සන්නිවේදනයේ පදනම වන අතර messages format කර transmit කරන ආකාරය නිර්වචනය කරයි.'
  },
  {
    id: '10',
    category: 'ක්‍රමලේඛන',
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

export default function SinhalaQuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <QuizComponent 
        title="මිශ්‍ර ICT ප්‍රශ්න පත්‍රය - සිංහල"
        questions={mixedQuestions}
      />
    </div>
  );
}