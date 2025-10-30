export default function VideosSinhalaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎥 වීඩියෝ පාඩම් - සිංහල මාධ්‍ය
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A/L ICT විෂයේ සම්පූර්ණ වීඩියෝ පාඩම් මාලාව සිංහල භාෂාවෙන්
          </p>
        </div>

        {/* Video Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-3xl">🖥️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">මූලික සංකල්ප</h2>
                <p className="text-gray-600 dark:text-gray-300">15 වීඩියෝ</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Video Item */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">ICT හැඳින්වීම</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 01 • 15 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Hardware සහ Software</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 02 • 20 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Number Systems</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 03 • 25 මිනිත්තු</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-3xl">💻</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ක්‍රමලේඛනය</h2>
                <p className="text-gray-600 dark:text-gray-300">20 වීඩියෝ</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Python හැඳින්වීම</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 04 • 30 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Variables සහ Data Types</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 05 • 25 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Loops සහ Conditions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 06 • 35 මිනිත්තු</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-3xl">🗄️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">දත්ත සමුදාය</h2>
                <p className="text-gray-600 dark:text-gray-300">12 වීඩියෝ</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Database හැඳින්වීම</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 07 • 20 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">SQL Basics</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 08 • 40 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">ERD Design</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 09 • 30 මිනිත්තු</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-3xl">🌐</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ජාල සහ සන්නිවේදනය</h2>
                <p className="text-gray-600 dark:text-gray-300">10 වීඩියෝ</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Network Fundamentals</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 10 • 25 මිනිත්තු</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Internet Protocols</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">පාඩම 11 • 30 මිනිත්තු</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-4">
              📺 YouTube Channel එකෙන් බලන්න!
            </h2>
            <p className="text-red-800 dark:text-red-300 mb-4">
              සියලුම වීඩියෝ පාඩම් නොමිලේ අපගේ YouTube channel එකෙන් බලන්න
            </p>
            <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              YouTube එකට යන්න
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}