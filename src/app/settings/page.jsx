'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const router = useRouter();
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  const [security, setSecurity] = useState({
    biometric: true,
    pinLogin: false,
  });

  const [preferences, setPreferences] = useState({
    language: 'en',
    currency: 'USD',
    theme: 'light',
  });

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSecurityChange = (type) => {
    setSecurity(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handlePreferenceChange = (type, value) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2942] to-[#1a4d6d] text-white">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#0f2942] to-[#1a4d6d] shadow-2xl backdrop-blur-xl border-b-2 border-cyan-400/40 sticky top-0 z-50 safe-area-inset-top rounded-b-lg">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                    Settings
                  </h1>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                <button className="p-1.5 sm:p-2 md:p-3 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-md hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 relative border-2 border-cyan-400/30 touch-target shadow-lg hover:shadow-cyan-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-500 rounded-full border border-white animate-pulse"></span>
                </button>
                
                <button className="p-1.5 sm:p-2 md:p-3 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-md hover:from-cyan-500/40 hover:to-blue-500/40 transition-all duration-300 relative border-2 border-cyan-400/30 touch-target shadow-lg hover:shadow-cyan-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-500 rounded-full border border-white"></span>
                </button>
                
                <div className="relative group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-cyan-300 shadow-lg shadow-cyan-400/30 transition-all duration-300 group-hover:shadow-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
                    <img 
                      src="https://i.pinimg.com/1200x/98/89/7c/98897c54cfc34fc4abc64fdcd025336a.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full border border-white shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom border with enhanced gradient */}
          <div className="h-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 animate-pulse"></div>
        </header>
        
        <div className="px-3 sm:px-4 mt-5 sm:mt-6">
          <div className="mb-6">
            <p className="text-white/70">Manage your app preferences and security settings</p>
          </div>
          
          {/* Security Settings */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Security
              <span className="ml-2">🔒</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                <div>
                  <h3 className="font-medium text-white">Biometric Authentication</h3>
                  <p className="text-sm text-white/70">Use fingerprint or face recognition</p>
                </div>
                <button 
                  onClick={() => handleSecurityChange('biometric')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    security.biometric ? 'bg-cyan-500' : 'bg-white/20'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    security.biometric ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                <div>
                  <h3 className="font-medium text-white">PIN Login</h3>
                  <p className="text-sm text-white/70">Require PIN on app startup</p>
                </div>
                <button 
                  onClick={() => handleSecurityChange('pinLogin')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    security.pinLogin ? 'bg-cyan-500' : 'bg-white/20'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    security.pinLogin ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Change PIN</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Change Password</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Notification Settings */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Notifications
              <span className="ml-2">🔔</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                <div>
                  <h3 className="font-medium text-white">Push Notifications</h3>
                  <p className="text-sm text-white/70">App notifications</p>
                </div>
                <button 
                  onClick={() => handleNotificationChange('push')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications.push ? 'bg-cyan-500' : 'bg-white/20'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notifications.push ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                <div>
                  <h3 className="font-medium text-white">Email Notifications</h3>
                  <p className="text-sm text-white/70">Send emails for important updates</p>
                </div>
                <button 
                  onClick={() => handleNotificationChange('email')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications.email ? 'bg-cyan-500' : 'bg-white/20'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notifications.email ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                <div>
                  <h3 className="font-medium text-white">SMS Notifications</h3>
                  <p className="text-sm text-white/70">Text message alerts</p>
                </div>
                <button 
                  onClick={() => handleNotificationChange('sms')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications.sms ? 'bg-cyan-500' : 'bg-white/20'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    notifications.sms ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Preferences */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Preferences
              <span className="ml-2">⚙️</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Language
                  <span className="ml-1">🌍</span>
                </label>
                <select 
                  value={preferences.language}
                  onChange={(e) => handlePreferenceChange('language', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                >
                  <option value="en" className="bg-[#0f2942] text-white">English</option>
                  <option value="km" className="bg-[#0f2942] text-white">ភាសាខ្មែរ</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Currency
                  <span className="ml-1">💵</span>
                </label>
                <select 
                  value={preferences.currency}
                  onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                >
                  <option value="USD" className="bg-[#0f2942] text-white">US Dollar (USD)</option>
                  <option value="KHR" className="bg-[#0f2942] text-white">Cambodian Riel (KHR)</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  Theme
                  <span className="ml-1">🎨</span>
                </label>
                <select 
                  value={preferences.theme}
                  onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                >
                  <option value="light" className="bg-[#0f2942] text-white">Light</option>
                  <option value="dark" className="bg-[#0f2942] text-white">Dark</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Account Management */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Account Management
              <span className="ml-2">👤</span>
            </h2>
            <div className="space-y-4">
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Linked Accounts</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Privacy Policy</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Terms of Service</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all">
                <span>Logout</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}