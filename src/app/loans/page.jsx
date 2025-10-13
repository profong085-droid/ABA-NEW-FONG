'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Loans() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample loan data
  const loans = [
    {
      id: 1,
      type: 'Personal Loan',
      amount: 10000,
      balance: 7500,
      interestRate: 8.5,
      term: '36 months',
      nextPayment: '2025-10-15',
      nextAmount: 250.75,
      status: 'active'
    },
    {
      id: 2,
      type: 'Home Loan',
      amount: 150000,
      balance: 135000,
      interestRate: 6.2,
      term: '180 months',
      nextPayment: '2025-10-20',
      nextAmount: 1250.00,
      status: 'active'
    },
    {
      id: 3,
      type: 'Car Loan',
      amount: 25000,
      balance: 0,
      interestRate: 7.8,
      term: '60 months',
      nextPayment: null,
      nextAmount: 0,
      status: 'paid'
    }
  ];

  const handleMakePayment = (loanId) => {
    alert(`Payment processing for loan ${loanId}`);
  };

  const handleApplyForLoan = () => {
    alert('Loan application form will be shown here');
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
                    Loans
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
            <p className="text-white/70">Manage your loans and apply for new ones</p>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-white/20 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
                activeTab === 'overview'
                  ? 'text-cyan-300 border-b-2 border-cyan-300 bg-white/5'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
                activeTab === 'apply'
                  ? 'text-cyan-300 border-b-2 border-cyan-300 bg-white/5'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Apply for Loan
            </button>
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* Loan Summary */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-cyan-500/20 rounded-2xl">
                    <div className="text-3xl font-bold text-cyan-300">${loans.filter(l => l.status === 'active').reduce((sum, loan) => sum + loan.balance, 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                    <div className="text-sm text-white/70">Total Outstanding</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-500/20 rounded-2xl">
                    <div className="text-3xl font-bold text-green-300">{loans.filter(l => l.status === 'active').length}</div>
                    <div className="text-sm text-white/70">Active Loans</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-500/20 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-300">${loans.filter(l => l.status === 'paid').length}</div>
                    <div className="text-sm text-white/70">Loans Paid Off</div>
                  </div>
                </div>
              </div>
              
              {/* Active Loans */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  Active Loans
                  <span className="ml-2">📊</span>
                </h2>
                <div className="space-y-4">
                  {loans.filter(loan => loan.status === 'active').map((loan) => (
                    <div key={loan.id} className="py-4 border-b border-white/10 last:border-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <div className="ml-4 flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">{loan.type}</p>
                          <p className="text-sm text-white/70">Interest: {loan.interestRate}% | Term: {loan.term}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-medium text-white">${loan.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                          <p className="text-sm text-white/70">Next: ${loan.nextAmount.toFixed(2)}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-between items-center">
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" 
                            style={{ width: `${((loan.amount - loan.balance) / loan.amount) * 100}%` }}
                          ></div>
                        </div>
                        <div className="ml-4 text-sm text-white/70">
                          {Math.round(((loan.amount - loan.balance) / loan.amount) * 100)}% paid
                        </div>
                      </div>
                      
                      <div className="mt-3 flex space-x-2">
                        <button 
                          onClick={() => handleMakePayment(loan.id)}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold text-sm hover:scale-105 transform transition-all"
                        >
                          Make Payment
                        </button>
                        <button className="px-4 py-2 bg-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/20 hover:scale-105 transform transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Paid Loans */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  Paid Loans
                  <span className="ml-2">✅</span>
                </h2>
                <div className="space-y-4">
                  {loans.filter(loan => loan.status === 'paid').map((loan) => (
                    <div key={loan.id} className="py-4 border-b border-white/10 last:border-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <div className="ml-4 flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">{loan.type}</p>
                          <p className="text-sm text-white/70">Paid off on {loan.nextPayment || 'N/A'}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-medium text-white">${loan.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                          <p className="text-sm text-green-400">Fully Paid</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Apply for Loan Tab */}
          {activeTab === 'apply' && (
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center">
                Apply for a New Loan
                <span className="ml-2">✨</span>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="border border-white/20 rounded-2xl p-6 bg-white/5">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Personal Loan</h3>
                    <p className="text-sm text-white/70">For personal expenses</p>
                  </div>
                  <ul className="text-sm text-white/70 space-y-2 mb-4">
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interest rate from 8.5%
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Loan term up to 5 years
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Quick approval process
                    </li>
                  </ul>
                  <button 
                    onClick={handleApplyForLoan}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all"
                  >
                    Apply Now
                  </button>
                </div>
                
                <div className="border border-white/20 rounded-2xl p-6 bg-white/5">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Home Loan</h3>
                    <p className="text-sm text-white/70">For property purchase</p>
                  </div>
                  <ul className="text-sm text-white/70 space-y-2 mb-4">
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interest rate from 6.2%
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Loan term up to 30 years
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Special offers for first-time buyers
                    </li>
                  </ul>
                  <button 
                    onClick={handleApplyForLoan}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all"
                  >
                    Apply Now
                  </button>
                </div>
                
                <div className="border border-white/20 rounded-2xl p-6 bg-white/5">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Car Loan</h3>
                    <p className="text-sm text-white/70">For vehicle purchase</p>
                  </div>
                  <ul className="text-sm text-white/70 space-y-2 mb-4">
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interest rate from 7.8%
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Loan term up to 7 years
                    </li>
                    <li className="flex items-center">
                      <svg className="h-4 w-4 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Special rates for electric vehicles
                    </li>
                  </ul>
                  <button 
                    onClick={handleApplyForLoan}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}