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

export default function AboutPage() {
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

  const achievements = [
        { icon: <ComputerDesktopIcon className="w-6 h-6" />, text: "A/L ICT Tutor" },
    { icon: <CodeBracketIcon className="w-6 h-6" />, text: "Software Engineer" },
  ];

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
          <div className="text-center mb-16">
            <h1
              className={`text-5xl md:text-7xl font-extrabold mb-8 transition-all duration-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Think-Tech-LK
              </span>
            </h1>
            <div className={`transition-all duration-1500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <div className="flex justify-center items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                <SparklesIcon className="w-6 h-6 text-yellow-500" />
                <span>Empowering Future IT Leaders</span>
                <RocketLaunchIcon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Instructor Profile Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-3xl transform -skew-y-1"></div>
          
          <div className="relative p-8 md:p-16">
            {/* Enhanced Image Section - Centered at Top */}
            <div className="flex justify-center mb-16">
              <div
                className={`relative transition-all duration-1500 delay-500 ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
                }`}
              >
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

            {/* Content Section - Below Image */}
            <div className="max-w-4xl mx-auto">
              <div
                className={`transition-all duration-1500 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Achievement pills - centered */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      <div className="text-blue-600 dark:text-blue-400">{achievement.icon}</div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Combined message content as one paragraph */}
                {/* <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 dark:from-gray-800/80 dark:via-gray-900/90 dark:to-blue-900/20 shadow-2xl border border-blue-100/50 dark:border-blue-800/50">
                  <div className="text-center mb-6">
                    <SparklesIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      Your Journey in Information Technology
                    </h3>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-center">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                      {message.content.join(' ')}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className={`transition-all duration-1500 delay-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <StarIcon className="w-6 h-6" />
              <span className="font-semibold text-lg">Start Your IT Journey Today!</span>
              <SparklesIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
