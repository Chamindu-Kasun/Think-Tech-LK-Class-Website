export default function AboutPage() {
  return (
    <div className="p-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Think Tech LK
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              Welcome to Think Tech LK, your premier destination for Advanced Level education and technology resources in Sri Lanka.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We provide comprehensive educational materials, tutorials, and support for students preparing for their A/L examinations. 
              Our platform offers a wide range of resources including video tutorials, practice papers, and interactive discussions 
              to help students excel in their studies.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              To empower students with quality educational resources and modern learning tools that make studying more effective, 
              engaging, and accessible for everyone across Sri Lanka.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Comprehensive A/L study materials for 2026 and 2027 batches</li>
              <li>Interactive video tutorials and online classes</li>
              <li>Past paper collections with solutions</li>
              <li>Student discussion forums and peer support</li>
              <li>Expert guidance and personalized learning paths</li>
            </ul>
          </div>
        </div>
    </div>
  );
}