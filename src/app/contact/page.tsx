'use client';

import { useState } from 'react';
import { LanguageIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [isEnglish, setIsEnglish] = useState(false); // Default to Sinhala since current content is in Sinhala
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {isEnglish ? '📞 Contact Us' : '📞 අප සමඟ සම්බන්ධ වන්න'}
            </h1>
            
            {/* Language Toggle Button */}
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-md mx-auto sm:mx-0"
            >
              <LanguageIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isEnglish ? 'සිංහල' : 'English'}
              </span>
            </button>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {isEnglish 
              ? 'Connect with Think Tech LK and start your A/L ICT journey'
              : 'Think Tech LK සමඟ සම්බන්ධ වී ඔබගේ A/L ICT ගමන ආරම්භ කරන්න'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {isEnglish ? '✉️ Send a Message' : '✉️ සන්දේශයක් යවන්න'}
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isEnglish ? 'Name *' : 'නම *'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={isEnglish ? 'Enter your name' : 'ඔබගේ නම ලියන්න'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isEnglish ? 'Phone Number' : 'දුරකථන අංකය'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="+94 77 123 4567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isEnglish ? 'Subject *' : 'විෂය *'}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">{isEnglish ? 'Select a subject' : 'විෂයක් තෝරන්න'}</option>
                  <option value="classes">{isEnglish ? 'Class Inquiries' : 'පන්ති ගැන විමසීම්'}</option>
                  <option value="content">{isEnglish ? 'Content Requests' : 'අන්තර්ගතය ගැන සෙවීම්'}</option>
                  <option value="technical">{isEnglish ? 'Technical Issues' : 'තාක්ෂණික ගැටලු'}</option>
                  <option value="collaboration">{isEnglish ? 'Collaboration' : 'සහයෝගිතාව'}</option>
                  <option value="other">{isEnglish ? 'Other' : 'වෙනත්'}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isEnglish ? 'Message *' : 'සන්දේශය *'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={isEnglish ? 'Write your message here...' : 'ඔබගේ සන්දේශය මෙහි ලියන්න...'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {isEnglish ? 'Send Message' : 'සන්දේශය යවන්න'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                📍 සම්බන්ධතා විස්තර
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@thinktechlk.com</p>
                    <p className="text-gray-600 dark:text-gray-400">support@thinktechlk.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-400">+94 77 123 4567</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">සිංහල / English</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📺</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">YouTube</h3>
                    <p className="text-gray-600 dark:text-gray-400">Think Tech LK</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">නිත්‍ය වීඩියෝ updates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Telegram</h3>
                    <p className="text-gray-600 dark:text-gray-400">@ThinkTechLK</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Groups & Updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🕒 සේවා කාලය
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">සඳුදා - සිකුරාදා</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">සෙනසුරාදා</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">ඉරිදා</span>
                  <span className="font-semibold text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>ඉක්මන් පිළිතුර:</strong> WhatsApp හරහා සම්බන්ධ වුවහොත් 24 පැය ඇතුළත පිළිතුර ලබා දෙනවා!
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🔗 ඉක්මන් සබැඳි
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                  <span className="text-2xl mr-2">📺</span>
                  <span className="font-medium text-red-800 dark:text-red-400">YouTube</span>
                </button>
                
                <button className="flex items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <span className="text-2xl mr-2">📱</span>
                  <span className="font-medium text-green-800 dark:text-green-400">WhatsApp</span>
                </button>
                
                <button className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <span className="text-2xl mr-2">💬</span>
                  <span className="font-medium text-blue-800 dark:text-blue-400">Telegram</span>
                </button>
                
                <button className="flex items-center justify-center p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                  <span className="text-2xl mr-2">📧</span>
                  <span className="font-medium text-purple-800 dark:text-purple-400">Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ❓ නිතර අසන ප්‍රශ්න
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              සාමාන්‍යයෙන් අසන ප්‍රශ්නවලට පිළිතුරු
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                පන්ති කොහොමද join වෙන්නේ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                WhatsApp නම්බරයට message එකක් දැම්මම class schedule එක සහ join links ලබා දෙනවා. Online සහ physical classes දෙකම තියෙනවා.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Class fees කීයද?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Monthly fees සහ package details WhatsApp හරහා inquire කරන්න. Student budget අනුව packages තියෙනවා.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Materials ලැබෙනවද?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                ඔව්! Notes, past papers, assignments වගේ සියලුම materials digital format එකේ free දෙනවා. Printed copies අවශ්‍ය නම් arrange කරන්න පුළුවන්.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/25 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Online classes recording තියෙනවද?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                ඔව්! පන්තියට එන්න බැරි උනොත් recordings access කරන්න පුළුවන්. YouTube channel එකේත් content update වෙනවා.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}