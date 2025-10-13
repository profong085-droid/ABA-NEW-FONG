'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [balance, setBalance] = useState("899.00");
  
  // Load balance from localStorage
  useEffect(() => {
    const savedBalance = localStorage.getItem('accountBalance');
    if (savedBalance) {
      // If the saved balance is still the old default value, update it to $899.00
      if (savedBalance === "0.18") {
        localStorage.setItem('accountBalance', "899.00");
        setBalance("899.00");
      } else {
        setBalance(savedBalance);
      }
    } else {
      // Initialize with $899.00 if no balance exists
      localStorage.setItem('accountBalance', "899.00");
    }
  }, []);
  
  // Update localStorage when balance changes
  useEffect(() => {
    localStorage.setItem('accountBalance', balance);
  }, [balance]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2942] to-[#1a4d6d] text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0f2942] to-[#1a4d6d] shadow-2xl backdrop-blur-xl border-b-2 border-cyan-400/40 sticky top-0 z-50 safe-area-inset-top rounded-b-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                  ABA Mobile
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

      {/* Balance Card */}
      <div className="mx-3 sm:mx-4 mt-5 sm:mt-6 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20">
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">${balance}</div>
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 touch-target">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-md">គណនីចំណូល</span>
          <span className="text-white/70 text-xs sm:text-sm">Mobile Savings</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <Link href="/deposit" className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 sm:p-3 transition-all border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 touch-target">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">បញ្ចូលប្រាក់</span>
          </Link>
          
          <button className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 sm:p-3 transition-all border border-white/10 hover:border-pink-400/50 hover:bg-pink-500/10 touch-target">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">ផ្ញើប្រាក់</span>
          </button>
          
          <button className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 sm:p-3 transition-all border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 touch-target">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">វិភាគ</span>
          </button>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-3 sm:px-4 mt-5 sm:mt-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {/* Row 1 */}
          <Link href="/dashboard" className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">គណនី</span>
          </Link>
          
          <Link href="/cards" className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">កាត</span>
          </Link>
          
          <Link href="/loans" className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">ឥណទាន</span>
          </Link>

          {/* Row 2 */}
          <Link href="/scan-qr" className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">ABA ស្កេន</span>
          </Link>
          
          <button className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38 1.81.588 1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">ពិន្ទុភាពស្មោះត្រង់</span>
          </button>
          
          <Link href="/transfer" className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium">ផ្ទេរប្រាក់</span>
          </Link>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="px-3 sm:px-4 mt-5 sm:mt-6 flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4">
        <button className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 flex items-center gap-2 sm:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl whitespace-nowrap touch-target">
          <div className="relative">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium">បាន​ទាន់​ពេល​វេលា​សុីវិល</span>
        </button>
        
        <button className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 flex items-center gap-2 sm:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl whitespace-nowrap touch-target">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-xs sm:text-sm font-medium">ការផ្តល់</span>
        </button>
        
        <button className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 flex items-center gap-2 sm:gap-3 hover:scale-[1.02] transition-all border border-white/20 shadow-xl whitespace-nowrap touch-target">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-xs sm:text-sm font-medium">ណាទី</span>
        </button>
      </div>

      {/* Promotions Section */}
      <div className="px-3 sm:px-4 mt-5 sm:mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base sm:text-lg font-bold">ផ្តល់ជូន & ប្រមូលសិទ្ធិ</h2>
          <button className="text-cyan-400 text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all">
            <span>មើលទាំងអស់</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-md">
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <div className="text-white/70 text-sm mb-2">ចុះឈ្មោះប្រើប្រាស់</div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">2,000<span className="text-xl sm:text-2xl">៛</span></div>
              <div className="text-white/80 text-xs">ពេលបញ្ចប់ដោយ PassApp ជាមួយ <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-0.5 rounded-full">ABA PAY</span></div>
            </div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl transform rotate-12"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-3 sm:px-4 mt-5 sm:mt-6 pb-6 sm:pb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base sm:text-lg font-bold">សេវាកម្មសាធារណៈ</h2>
          <button className="text-cyan-400 text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all">
            <span>មើលទាំងអស់</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <button key={item} className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col items-center gap-1 sm:gap-2 hover:scale-[1.03] transition-all border border-white/20 shadow-lg touch-target">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xs text-center">Service {item}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}