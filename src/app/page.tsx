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
          
          <div className="relative p-8 md:p-16">
            {/* Enhanced Image Section - Centered at Top */}
            <div className="flex justify-center mb-12">
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

            {/* Creative Content Section - Below Image */}
            <div className="max-w-4xl mx-auto">
              <div
                className={`transition-all duration-1500 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Creative Message Display */}
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-indigo-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-indigo-900/10 rounded-3xl blur-3xl"></div>
                  
                  {/* Content container */}
                  <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                    {/* Creative text layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {message.content.map((paragraph, index) => {
                        // Skip empty break tags
                        if (paragraph === "</br>") return null;
                        
                        // Different creative styles for different paragraphs
                        const styles = [
                          "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-l-4 border-blue-400",
                          "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-l-4 border-purple-400",
                          "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-l-4 border-indigo-400",
                          "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-l-4 border-green-400",
                          "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-400",
                          "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-l-4 border-pink-400"
                        ];
                        
                        const currentStyle = styles[index % styles.length];
                        
                        return (
                          <div
                            key={index}
                            className={`transition-all duration-1000 delay-${index * 150 + 800} transform hover:scale-105 ${
                              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                            }`}
                          >
                            <div className={`p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${currentStyle}`}>
                              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                                {paragraph}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Floating quote decoration */}
                    <div className="absolute -top-4 -left-4 text-6xl text-blue-200 dark:text-blue-800 opacity-30 font-serif">"</div>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-purple-200 dark:text-purple-800 opacity-30 font-serif transform rotate-180">"</div>
                  </div>
                </div>
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
              <HeartIcon className="w-6 h-6" />
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
