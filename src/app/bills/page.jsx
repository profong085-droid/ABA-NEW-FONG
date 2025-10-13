'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Bills() {
  const router = useRouter();
  const [selectedBill, setSelectedBill] = useState(null);
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('**** **** **** 1234');
  
  // Sample billers data
  const billers = [
    { id: 1, name: 'Electricity Bill', category: 'Utilities', icon: '⚡' },
    { id: 2, name: 'Water Bill', category: 'Utilities', icon: '💧' },
    { id: 3, name: 'Internet Service', category: 'Communications', icon: '🌐' },
    { id: 4, name: 'Phone Bill', category: 'Communications', icon: '📱' },
    { id: 5, name: 'Television Service', category: 'Entertainment', icon: '📺' },
    { id: 6, name: 'Insurance Premium', category: 'Insurance', icon: '🛡️' },
    { id: 7, name: 'School Fees', category: 'Education', icon: '🎓' },
    { id: 8, name: 'Credit Card Payment', category: 'Finance', icon: '💳' },
  ];

  const handlePayBill = (e) => {
    e.preventDefault();
    
    if (!selectedBill || !amount) {
      alert('Please select a bill and enter amount');
      return;
    }
    
    // Process payment
    alert(`Payment of $${amount} for ${selectedBill.name} processed successfully!`);
    
    // Reset form
    setSelectedBill(null);
    setAmount('');
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
                    Pay Bills
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
            <p className="text-white/70">Pay your bills quickly and securely</p>
          </div>
          
          {/* Bill Selection */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Select Bill Type
              <span className="ml-2">📋</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {billers.map((biller) => (
                <button
                  key={biller.id}
                  onClick={() => setSelectedBill(biller)}
                  className={`p-4 rounded-2xl border text-center transition-all transform hover:scale-105 ${
                    selectedBill?.id === biller.id
                      ? 'border-cyan-400 bg-cyan-500/20'
                      : 'border-white/20 bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="text-2xl mb-2">{biller.icon}</div>
                  <div className="text-sm font-medium text-white">{biller.name}</div>
                  <div className="text-xs text-white/70">{biller.category}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Payment Form */}
          {selectedBill && (
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                Pay {selectedBill.name}
                <span className="ml-2">💰</span>
              </h2>
              <form onSubmit={handlePayBill}>
                <div className="mb-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                    <span className="text-white/70">Selected Bill:</span>
                    <span className="font-medium">{selectedBill.name}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                    Account Number
                    <span className="ml-1">🏦</span>
                  </label>
                  <input
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="Enter account number"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                    Amount ($)
                    <span className="ml-1">💵</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                  />
                </div>
                
                <div className="mt-6">
                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all"
                  >
                    Pay Bill
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {/* Recent Payments */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Recent Payments
              <span className="ml-2">🕒</span>
            </h2>
            <div className="space-y-4">
              {[
                { id: 1, biller: 'Electricity Bill', date: '2025-10-05', amount: 45.60 },
                { id: 2, biller: 'Internet Service', date: '2025-10-01', amount: 29.99 },
                { id: 3, biller: 'Water Bill', date: '2025-09-28', amount: 32.45 },
              ].map((payment) => (
                <div key={payment.id} className="flex items-center py-2 border-b border-white/10 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="ml-4 flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{payment.biller}</p>
                    <p className="text-sm text-white/70">{new Date(payment.date).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="text-lg font-medium text-white">
                    ${payment.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}