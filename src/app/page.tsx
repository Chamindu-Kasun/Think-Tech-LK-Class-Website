'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import welcomeMessage from '@/data/welcome-message.json';
import {
  AcademicCapIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  StarIcon,
  SparklesIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { message } = welcomeMessage;

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % message.content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [message.content.length]);

  // Add floating animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`transition-all duration-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Think-Tech-LK
                  </span>
                </h1>
                <div className="flex items-center gap-4 text-xl text-gray-600 dark:text-gray-300 mb-8">
                  <SparklesIcon className="w-8 h-8 text-yellow-500" />
                  <span>Information & Communication Technology</span>
                  <RocketLaunchIcon className="w-8 h-8 text-blue-500" />
                </div>
              </div>

              <div className={`transition-all duration-1500 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Welcome to Think-Tech-LK, your premier destination for A/L ICT education in Sri Lanka. 
                  We provide comprehensive tutorials, expert guidance, and innovative learning solutions 
                  to help you excel in Information & Communication Technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Expert Teaching</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Qualified instructors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <ComputerDesktopIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Modern Tech</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Latest curriculum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1500 delay-500 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
            }`}>
              <div className="relative">
                {/* Floating elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping"></div>
                
                {/* Main image container */}
                <div className="relative">
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-full p-1">
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full"></div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/profile-picture.JPG"
                      alt="Chamindu Kasun Karunarathna - IT Instructor"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                    {/* Overlay gradient for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Achievement badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg border-4 border-white dark:border-gray-800">
                      <div className="text-center">
                        <div className="font-bold text-sm">A/L ICT</div>                      
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Features Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-3xl transform -skew-y-1"></div>
          
          <div className="relative p-8 md:p-16">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1500 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Why Choose Us?
              </h2>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1500 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                Comprehensive A/L ICT education with modern teaching methods and proven results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '1100ms' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Programming Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Master Python, JavaScript, and database programming with hands-on projects and real-world applications.
                </p>
              </div>

              {/* Feature 2 */}
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '1300ms' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <BeakerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Practical Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Learn through interactive labs, real projects, and industry-standard tools that prepare you for success.
                </p>
              </div>

              {/* Feature 3 */}
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '1500ms' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Proven Results
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Join hundreds of successful students who achieved top grades in A/L ICT examinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Call to Action */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1500 delay-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="font-semibold text-lg">Contact: +94 764629040</span>
              <RocketLaunchIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Quote Ribbon at Bottom */}
      <div className="relative overflow-hidden">
        {/* Ribbon Background */}
        <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative">
          {/* Decorative subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
          
          {/* Ribbon content */}
          <div className="relative px-6 py-8 text-center">
            <div className={`transition-all duration-1500 delay-2500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {/* Quote text */}
              <blockquote className="text-gray-100 text-lg md:text-xl font-medium italic mb-2 max-w-4xl mx-auto">
                "Don't judge each day by the harvest you reap but by the seeds you plant"
              </blockquote>
              
              {/* Author */}
              <cite className="text-gray-300 text-sm md:text-base not-italic">
                — Robert Louis Stevenson 🌾
              </cite>
            </div>
          </div>
          
          {/* Ribbon edges effect */}
          <div className="absolute left-0 top-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[60px] border-b-gray-800/30"></div>
          <div className="absolute right-0 top-0 w-0 h-0 border-r-[30px] border-r-transparent border-b-[60px] border-b-gray-900/30"></div>
        </div>
      </div>
    </div>
  );
}
