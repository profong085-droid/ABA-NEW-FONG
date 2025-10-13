'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TransferPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !recipient) return;
    
    setIsProcessing(true);
    // Simulate transfer process
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Successfully transferred $${amount} to ${recipient}`);
      // Reset form
      setAmount('');
      setRecipient('');
      setNote('');
    }, 1500);
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
                    Transfer Money
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

        {/* Transfer Form */}
        <div className="px-3 sm:px-4 mt-5 sm:mt-6">
          <form onSubmit={handleTransfer} className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <div className="mb-6">
              <label className="block text-sm font-bold text-white/80 mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                Amount
                <span className="ml-1">💰</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-white/80 mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                Recipient
                <span className="ml-1">👤</span>
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter recipient name or phone"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-white/80 mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                Note (Optional)
                <span className="ml-1">📝</span>
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note"
                rows={3}
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing || !amount || !recipient}
              className={`w-full py-4 px-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 ${
                isProcessing || !amount || !recipient
                  ? 'bg-white/10 text-white/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Transfer Money'}
            </button>
          </form>

          {/* Quick Transfer */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              Quick Transfer
              <span className="ml-2">⚡</span>
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {['$10', '$20', '$50', '$100', '$200', '$500'].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(value.replace('$', ''))}
                  className="py-3 px-2 bg-white/10 rounded-2xl text-white font-bold hover:bg-white/20 transition-all border border-white/20 hover:scale-105 transform"
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}