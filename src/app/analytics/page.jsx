'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Analytics() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState('monthly');
  
  // Sample spending data
  const spendingData = [
    { category: 'Food & Dining', amount: 450.75, percentage: 25, color: 'bg-blue-500' },
    { category: 'Shopping', amount: 320.50, percentage: 18, color: 'bg-green-500' },
    { category: 'Transportation', amount: 280.25, percentage: 15, color: 'bg-yellow-500' },
    { category: 'Entertainment', amount: 195.00, percentage: 11, color: 'bg-purple-500' },
    { category: 'Bills & Utilities', amount: 380.30, percentage: 21, color: 'bg-red-500' },
    { category: 'Others', amount: 180.20, percentage: 10, color: 'bg-gray-500' },
  ];

  // Sample monthly spending trend
  const monthlyTrend = [
    { month: 'Jan', amount: 1650.25 },
    { month: 'Feb', amount: 1780.50 },
    { month: 'Mar', amount: 1520.75 },
    { month: 'Apr', amount: 1890.00 },
    { month: 'May', amount: 1750.30 },
    { month: 'Jun', amount: 1920.45 },
    { month: 'Jul', amount: 1800.60 },
    { month: 'Aug', amount: 1720.80 },
    { month: 'Sep', amount: 1680.90 },
    { month: 'Oct', amount: 1810.25 },
  ];

  const totalSpending = spendingData.reduce((sum, item) => sum + item.amount, 0);
  const avgMonthlySpending = monthlyTrend.reduce((sum, item) => sum + item.amount, 0) / monthlyTrend.length;

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
                    Spending Analytics
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
            <p className="text-white/70">Track and analyze your spending habits</p>
          </div>
          
          {/* Time Range Selector */}
          <div className="flex justify-end mb-6">
            <div className="inline-flex rounded-2xl shadow-sm bg-white/10 p-1">
              <button
                onClick={() => setTimeRange('weekly')}
                className={`px-4 py-2 text-sm font-medium rounded-xl ${
                  timeRange === 'weekly'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeRange('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-xl ${
                  timeRange === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setTimeRange('yearly')}
                className={`px-4 py-2 text-sm font-medium rounded-xl ${
                  timeRange === 'yearly'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl border border-white/20 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">Total Spending</p>
                  <p className="text-lg font-bold text-white">${totalSpending.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl border border-white/20 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">Average Monthly</p>
                  <p className="text-lg font-bold text-white">${avgMonthlySpending.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl border border-white/20 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">Savings Rate</p>
                  <p className="text-lg font-bold text-white">12.5%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Spending by Category */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Spending by Category
              <span className="ml-2">📊</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {spendingData.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">{item.category}</span>
                      <span className="text-sm font-medium text-white">${item.amount.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full`} 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Pie chart representation using colored segments */}
                  <div className="absolute inset-0 rounded-full border-8 border-cyan-500"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500 transform -rotate-90"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-500 transform -rotate-140"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-purple-500 transform -rotate-190"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-red-500 transform -rotate-240"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-gray-500 transform -rotate-280"></div>
                  
                  <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">${totalSpending.toFixed(2)}</div>
                      <div className="text-xs text-white/70">Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Monthly Spending Trend */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Monthly Spending Trend
              <span className="ml-2">📈</span>
            </h2>
            <div className="h-64 flex items-end space-x-2">
              {monthlyTrend.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg hover:from-cyan-400 hover:to-blue-400 transition-all"
                    style={{ height: `${(item.amount / 2000) * 100}%` }}
                  ></div>
                  <div className="text-xs text-white/70 mt-2">{item.month}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 bg-white/10 rounded-2xl text-white font-bold hover:bg-white/20 hover:scale-105 transform transition-all flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}