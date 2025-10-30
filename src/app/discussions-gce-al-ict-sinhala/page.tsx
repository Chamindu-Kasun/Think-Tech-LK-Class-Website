export default function DiscussionsSinhalaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💬 ප්‍රශ්න සාකච්ඡා - සිංහල මාධ්‍ය
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A/L ICT විෂයේ ප්‍රශ්න සහ පිළිතුරු, සාකච්ඡා සහ සමාලෝචනය
          </p>
        </div>

        {/* Discussion Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mb-2">Structured Essays</h3>
            <p className="text-blue-800 dark:text-blue-300 text-sm">විධිමත් රචනා ප්‍රශ්න</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-400 mb-2">MCQ Problems</h3>
            <p className="text-green-800 dark:text-green-300 text-sm">බහුවරණ ප්‍රශ්න</p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-400 mb-2">Problem Solving</h3>
            <p className="text-purple-800 dark:text-purple-300 text-sm">ගැටලු විසඳීම</p>
          </div>
        </div>

        {/* Discussion Topics */}
        <div className="space-y-6">
          {/* Topic 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🖥️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Computer Hardware Components සම්බන්ධ ප්‍රශ්න
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    පාඩම 01 • 15 ප්‍රශ්න • අලුතින් සාකච්ඡා කරන ලද
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                සක්‍රිය
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Q: CPU හි ALU කරන කාර්යයන් මොනවාද?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  ALU (Arithmetic Logic Unit) එකේ මූලික කාර්යයන් සහ එහි වැදගත්කම පිළිබඳව...
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>3 පිළිතුරු</span>
                  <span className="mx-2">•</span>
                  <span>2 දින පෙර</span>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Q: RAM සහ Cache Memory අතර වෙනස
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  RAM එක සහ Cache Memory එක අතර ඇති වෙනස්කම් සහ එකිනෙකාගේ භාවිතය...
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>5 පිළිතුරු</span>
                  <span className="mx-2">•</span>
                  <span>1 දින පෙර</span>
                </div>
              </div>
            </div>
            
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              සියලුම ප්‍රශ්න බලන්න →
            </button>
          </div>

          {/* Topic 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Python Programming ප්‍රශ්න සහ පිළිතුරු
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    පාඩම 04-06 • 25 ප්‍රශ්න • ක්‍රියාකාරී සාකච්ඡා
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-xs rounded-full">
                ජනප්‍රිය
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Q: Python හි Loops භාවිතා කරන අකාරය
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  For loop සහ While loop අතර වෙනස සහ එකිනෙකා භාවිතා කරන අවස්ථා...
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>8 පිළිතුරු</span>
                  <span className="mx-2">•</span>
                  <span>6 පැය පෙර</span>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Q: List සහ Dictionary භාවිතය
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Python හි List එක සහ Dictionary එක අතර වෙනස සහ practical examples...
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>12 පිළිතුරු</span>
                  <span className="mx-2">•</span>
                  <span>4 පැය පෙර</span>
                </div>
              </div>
            </div>
            
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              සියලුම ප්‍රශ්න බලන්න →
            </button>
          </div>

          {/* Topic 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🗄️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Database Design සහ SQL ප්‍රශ්න
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    පාඩම 07-09 • 18 ප්‍රශ්න • විශේෂඥ මාර්ගෝපදේශනය
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                අලුත්
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Q: ERD Design කරන ක්‍රමවේදය
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Entity Relationship Diagram එකක් design කරන විට අනුගමනය කළ යුතු steps...
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>6 පිළිතුරු</span>
                  <span className="mx-2">•</span>
                  <span>1 දින පෙර</span>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Q: SQL JOIN operations පැහැදිලි කිරීම
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  INNER JOIN, LEFT JOIN, RIGHT JOIN අතර වෙනස්කම් සහ examples...
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>4 පිළිතුරු</span>
                  <span className="mx-2">•</span>
                  <span>3 දින පෙර</span>
                </div>
              </div>
            </div>
            
            <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              සියලුම ප්‍රශ්න බලන්න →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-4">
              ❓ ප්‍රශ්නයක් තිබේද?
            </h2>
            <p className="text-green-800 dark:text-green-300 mb-4">
              ඔබගේ ප්‍රශ්නය අප සමඟ share කරන්න. අපගේ expert team එකෙන් පිළිතුර ලබා ගන්න.
            </p>
            <button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              ප්‍රශ්නයක් අසන්න
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}