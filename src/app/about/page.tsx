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
          <div className="flex justify-center mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl">
              <div className="relative aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FObigw-rs1Y?autoplay=1&mute=1&loop=1&playlist=FObigw-rs1Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="text-center mb-16">
            <h1
              className={`text-2xl md:text-3xl font-extrabold mb-8 transition-all duration-1500 ${
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
                <span>Information & Communication Technology</span>
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
