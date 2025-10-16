'use client';

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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50 safe-area-inset-top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">
                  ABA Mobile
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-all relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
              </button>
              
              <div className="relative">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-pink-300 bg-gray-900">
                  <img 
                    src="https://i.pinimg.com/1200x/98/89/7c/98897c54cfc34fc4abc64fdcd025336a.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-300 rounded-full border border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Message for Unauthenticated Users */}
      <div className="mx-4 mt-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-5 border border-gray-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">សូមស្វាគមន៍មកកាន់ ABA Mobile</h2>
            <p className="text-gray-400 text-sm mb-4">សូមចុះឈ្មោះ ឬចូលដើម្បីប្រើប្រាស់សេវាកម្មទាំងអស់របស់យើងខ្ញុំ</p>
            <div className="flex gap-3">
              <Link href="/login" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                ចូល
              </Link>
              <Link href="/register" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                ចុះឈ្មោះ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="mx-4 mt-6 bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-bold text-white">${balance}</div>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all">
            <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2 mb-5">
          <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">គណនីចំណូល</span>
          <span className="text-white/70 text-xs">Mobile Savings</span>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <Link href="/deposit" className="flex flex-col items-center gap-2 bg-gray-800 rounded-xl p-3 transition-all hover:bg-gray-700">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-xs font-medium">បញ្ចូលប្រាក់</span>
          </Link>
          
          <button className="flex flex-col items-center gap-2 bg-gray-800 rounded-xl p-3 transition-all hover:bg-gray-700">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <span className="text-xs font-medium">ផ្ញើប្រាក់</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 bg-gray-800 rounded-xl p-3 transition-all hover:bg-gray-700">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xs font-medium">វិភាគ</span>
          </button>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-3 gap-3">
          {/* Row 1 */}
          <Link href="/dashboard" className="bg-gray-900 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-800 transition-all border border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">គណនី</span>
          </Link>
          
          <Link href="/cards" className="bg-gray-900 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-800 transition-all border border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">កាត</span>
          </Link>
          
          <Link href="/loans" className="bg-gray-900 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-800 transition-all border border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">ឥណទាន</span>
          </Link>

          {/* Row 2 */}
          <Link href="/scan-qr" className="bg-gray-900 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-800 transition-all border border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">ABA ស្កេន</span>
          </Link>
          
          <button className="bg-gray-900 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-800 transition-all border border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38 1.81.588 1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">ពិន្ទុ</span>
          </button>
          
          <Link href="/transfer" className="bg-gray-900 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-800 transition-all border border-gray-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <span className="text-xs font-medium text-center">ផ្ទេរប្រាក់</span>
          </Link>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="px-4 mt-6 pb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">ផ្តល់ជូន</h2>
          <button className="text-pink-400 text-sm flex items-center gap-1">
            <span>មើលទាំងអស់</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-5 border border-gray-800">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-white/70 text-sm mb-1">ចុះឈ្មោះប្រើប្រាស់</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">2,000<span className="text-lg">៛</span></div>
            </div>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl"></div>
              <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}