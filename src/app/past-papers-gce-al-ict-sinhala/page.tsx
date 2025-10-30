export default function PastPapersSinhalaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📄 A/L ICT පැරණි ප්‍රශ්න පත්‍ර - සිංහල මාධ්‍ය
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A/L ICT විෂයේ පැරණි ප්‍රශ්න පත්‍ර සහ marking schemes
          </p>
        </div>

        {/* Year Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'].map((year) => (
              <button
                key={year}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 2023 Papers */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2023</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2023 ප්‍රශ්න පත්‍ර</h2>
                <p className="text-gray-600 dark:text-gray-300">අලුතම ප්‍රශ්න පත්‍ර සමුදාය</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Paper 1 */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">📋</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ICT Paper I</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MCQ • 2023 • 50 ප්‍රශ්න</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      ප්‍රශ්න පත්‍රය
                    </button>
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      පිළිතුරු
                    </button>
                  </div>
                </div>
              </div>

              {/* Paper 2 */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">📝</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ICT Paper II</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Structured • 2023 • 3 පැය</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      ප්‍රශ්න පත්‍රය
                    </button>
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      Marking Scheme
                    </button>
                  </div>
                </div>
              </div>

              {/* Practical Paper */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">💻</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ICT Practical</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Practical • 2023 • 3 පැය</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      ප්‍රශ්න පත්‍රය
                    </button>
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      Resources
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2022 Papers */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2022</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2022 ප්‍රශ්න පත්‍ර</h2>
                <p className="text-gray-600 dark:text-gray-300">සම්පූර්ණ marking schemes සමඟ</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">📋</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ICT Paper I</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MCQ • 2022 • 50 ප්‍රශ්න</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      ප්‍රශ්න පත්‍රය
                    </button>
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      පිළිතුරු
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">📝</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ICT Paper II</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Structured • 2022 • 3 පැය</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      ප්‍රශ්න පත්‍රය
                    </button>
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      Marking Scheme
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl">💻</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">ICT Practical</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Practical • 2022 • 3 පැය</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                      ප්‍රශ්න පත්‍රය
                    </button>
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                      Resources
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Years */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2021</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2021 ප්‍රශ්න පත්‍ර</h2>
                <p className="text-gray-600 dark:text-gray-300">COVID-19 සිටුවම් අනුව</p>
              </div>
            </div>
            
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🔜</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ඉක්මනින් එකතු වේ</h3>
              <p className="text-gray-600 dark:text-gray-400">
                2021 සහ ඊට පෙර වසරවල ප්‍රශ්න පත්‍ර ඉක්මනින්ම අමුණන්නම්
              </p>
            </div>
          </div>

          {/* Study Tips */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">පරීක්ෂණ මාර්ගෝපදේශ</h2>
                <p className="text-gray-600 dark:text-gray-300">ප්‍රශ්න පත්‍ර විසඳීමේ උපාය</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">කාල කළමනාකරණය</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    MCQ සඳහා මිනිත්තු 90ක්, Structured සඳහා මිනිත්තු 180ක් නිසි ලෙස භාගකරන්න
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">මාර්ගෝපදේශනය</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Marking scheme එක හොඳින් අධ්‍යයනය කර ලකුණු ලබා ගන්නා ආකාරය දැනගන්න
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">පුහුණුව</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    නිතර පැරණි ප්‍රශ්න පත්‍ර විසඳා අභ්‍යාස කරන්න
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4">
              📚 තවත් ප්‍රශ්න පත්‍ර අවශ්‍යද?
            </h2>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              අපගේ telegram channel එකෙන් නවතම ප්‍රශ්න පත්‍ර download කරගන්න
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Telegram Join කරන්න
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}