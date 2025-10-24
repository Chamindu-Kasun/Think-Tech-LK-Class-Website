'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  const router = useRouter();

  // Auto redirect to home after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Page Not Found
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-base text-gray-500 dark:text-gray-500">
            Don't worry, we'll redirect you to our homepage in <span className="font-semibold text-blue-600">3 seconds</span>...
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <HomeIcon className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 opacity-50">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Think-Tech-LK - Information & Communication Technology
          </p>
        </div>
      </div>
    </div>
  );
}