// app/api/gemini-quiz/route.js
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

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

//Extract the JSON array.
function extractQuestionsFromText(text) {
  if (!text || typeof text !== 'string') return null;

  const cleaned = text.replace(/```json|```/gi, '').trim();

  const match = cleaned.match(/\[[\s\S]*\]/);
  if (match) {
    try {
      return JSON.parse(match[0]);
    } catch {
      /* ignore */
    }
  }

  try {
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    /* ignore */
  }

  return null;
}

// Default A/L ICT syllabus topics
const allTopics = [
  "Computer Systems",
  "System Software & Operating Systems",
  "Application Software",
  "Database Management Systems (DBMS)",
  "Programming & Algorithms",
  "Networking & Internet",
  "Web Technologies",
  "System Development & Project Management",
  "Computer Security & Ethics",
  "Emerging Technologies"
];


export async function POST(request) {
  try {
    const { topics = allTopics, count = 20, difficulty = ['beginner', 'intermediate', 'advanced'], language = 'english' } = await request.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
const difficultyStr = Array.isArray(difficulty) ? difficulty.join(', ') : difficulty;
const prompt = `
You are an expert ICT educator creating multiple-choice questions (MCQs) for the G.C.E. Advanced Level (A/L) ICT subject in Sri Lanka.

Generate ${count} high-quality, exam-standard MCQs in ${language} for A/L ICT students.

Each question must:
1. Match the Sri Lankan A/L ICT syllabus.
2. Be clear, unambiguous, and conceptually accurate.
3. Have exactly four options labeled "a", "b", "c", and "d".
4. Include only one correct answer.
5. Include a short explanation that teaches the concept.
6. Be suitable for ${difficultyStr}-level students.
7. Use proper A/L ICT terminology and phrasing.

---

### Syllabus Coverage
Questions should be drawn from these key areas:

1. **Computer Systems**: Components, data representation, logic gates, memory, performance.
2. **System Software & Operating Systems**: Types/functions, file management, process scheduling, utilities.
3. **Application Software**: Types of software, productivity tools (word processing, spreadsheets, databases).
4. **Database Management Systems (DBMS)**: Tables, keys, relationships, SQL (SELECT, JOIN, GROUP BY), normalization (1NF, 2NF, 3NF), data integrity/security.
5. **Programming & Algorithms**: Flowcharts, pseudocode, control structures, functions, arrays, algorithm design, complexity.
6. **Networking & Internet**: LAN/WAN/MAN, OSI/TCP-IP models, IP addressing, protocols (HTTP, FTP, SMTP), network devices, security.
7. **Web Technologies**: HTML, CSS, JavaScript basics, client-server architecture, web hosting/domain concepts.
8. **System Development & Project Management**: SDLC phases, feasibility study, DFDs, ER diagrams, planning, Gantt charts, testing.
9. **Computer Security & Ethics**: Threats (malware, phishing), encryption, authentication, data protection, privacy, ethics.
10. **Emerging Technologies**: AI, IoT, Cloud computing, Blockchain, E-commerce, mobile computing.

---

### Cognitive Levels (Bloom’s Taxonomy)
Include a mix of:
- Knowledge-level (recall facts/definitions)
- Understanding-level (interpret/explain concepts)
- Application-level (apply concepts to real-world scenarios)

---

### Question Format
Return a JSON array of objects, each structured like this:

{
  "id": "q1",
  "category": "Networking | Programming | Databases | Systems | Emerging Technologies | etc.",
  "question": "string",
  "options": [
    { "id": "a", "text": "string" },
    { "id": "b", "text": "string" },
    { "id": "c", "text": "string" },
    { "id": "d", "text": "string" }
  ],
  "correctAnswer": "a" | "b" | "c" | "d",
  "explanation": "string"
}

---

### Constraints
- Topics: ${Array.isArray(topics) ? topics.join(', ') : topics}
- Difficulty: ${difficultyStr}
- Number of questions: ${count}
- Output: JSON array only (no markdown, no extra text)

---

### Sample Questions (For Reference Only — Do Not Repeat)
[
  {
    "id": "q1",
    "category": "Networking",
    "question": "Which layer of the OSI model is responsible for reliable data transfer?",
    "options": [
      { "id": "a", "text": "Transport layer" },
      { "id": "b", "text": "Session layer" },
      { "id": "c", "text": "Network layer" },
      { "id": "d", "text": "Data link layer" }
    ],
    "correctAnswer": "a",
    "explanation": "The Transport layer ensures reliable data transfer using acknowledgments and retransmissions."
  },
  {
    "id": "q2",
    "category": "Database Systems",
    "question": "Which of the following ensures that every non-key attribute is fully dependent on the primary key?",
    "options": [
      { "id": "a", "text": "First Normal Form" },
      { "id": "b", "text": "Second Normal Form" },
      { "id": "c", "text": "Third Normal Form" },
      { "id": "d", "text": "Boyce-Codd Normal Form" }
    ],
    "correctAnswer": "b",
    "explanation": "2NF eliminates partial dependency, ensuring all non-key attributes fully depend on the primary key."
  },
  {
    "id": "q3",
    "category": "Programming",
    "question": "Which control structure repeats a block of code while a condition remains true?",
    "options": [
      { "id": "a", "text": "If statement" },
      { "id": "b", "text": "Switch statement" },
      { "id": "c", "text": "While loop" },
      { "id": "d", "text": "Function call" }
    ],
    "correctAnswer": "c",
    "explanation": "A while loop continues executing as long as the condition is true."
  }
]

---

Now generate ${count} A/L ICT-standard multiple-choice questions following these rules.
`;


    // Generate response
    const result = await model.generateContent(prompt);
    const response = result?.response;
    if (!response) throw new Error('Empty response from Gemini API');

    const text = await (typeof response.text === 'function' ? response.text() : response);

    const cleanText = text.replace(/```json|```/gi, '').trim();

    // Try parsing JSON
    let questions = null;
    try {
      const parsed = JSON.parse(cleanText);
      if (Array.isArray(parsed)) questions = parsed;
      else if (parsed?.quiz && Array.isArray(parsed.quiz)) questions = parsed.quiz;
    } catch {
      questions = extractQuestionsFromText(cleanText);
    }

    // Fallback if parsing failed
    if (!Array.isArray(questions)) {
     return NextResponse.json({
        quiz: mixedQuestions.slice(0, count),
        warning: 'Used mixedQuestions fallback because parsing failed',
        raw: cleanText
      });
    }

    return NextResponse.json({ quiz: questions });

  } catch (error) {
    console.error('Gemini API Error:', error);

    const msg = error?.message ?? String(error);

    // Handle quota exceeded 
    if (msg.includes('RESOURCE_EXHAUSTED') || msg.toLowerCase().includes('quota')) {
      console.warn('Quota exceeded, returning mixed questions.');
      return NextResponse.json({
        quiz: mixedQuestions.slice(0, count),
        error: 'Daily free quota exceeded',
        message: 'You have used the available quota. Returning mixed questions.'
      });
    }

    // Generic fallback
   return NextResponse.json({
      quiz: mixedQuestions.slice(0, count),
      error: msg,
      warning: 'Returning mixedQuestions fallback due to an error'
    }, { status: 200 });
  }
}
