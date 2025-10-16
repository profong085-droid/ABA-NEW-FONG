'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../components/ui/Card';
import Image from 'next/image';

export default function AccountsPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'គណនីចំណូល', type: 'Mobile Savings', balance: 899.00, currency: 'USD', number: '**** **** **** 1234', status: 'active' },
    { id: 2, name: 'គណនីសន្សំ', type: 'Fixed Deposit', balance: 5000.00, currency: 'USD', number: '**** **** **** 5678', status: 'active' },
    { id: 3, name: 'គណនីឥណទាន', type: 'Credit Card', balance: -1250.50, currency: 'USD', number: '**** **** **** 9012', status: 'active' },
  ]);
  
  // Load balance from localStorage
  useEffect(() => {
    const savedBalance = localStorage.getItem('accountBalance');
    if (savedBalance) {
      // If the saved balance is still the old default value, update it to $899.00
      let updatedBalance = savedBalance;
      if (savedBalance === "0.18") {
        localStorage.setItem('accountBalance', "899.00");
        updatedBalance = "899.00";
      }
      setAccounts(prev => prev.map(account => 
        account.id === 1 ? {...account, balance: parseFloat(updatedBalance)} : account
      ));
    } else {
      // Initialize with $899.00 if no balance exists
      localStorage.setItem('accountBalance', "899.00");
    }
  }, []);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2942] to-[#1a4d6d] text-white p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#0f2942] to-[#1a4d6d] shadow-2xl backdrop-blur-xl border-b-2 border-cyan-400/40 sticky top-0 z-50 safe-area-inset-top rounded-b-lg">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                    គណនី
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
                    <Image 
                      src="https://i.pinimg.com/1200x/98/89/7c/98897c54cfc34fc4abc64fdcd025336a.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      width={48}
                      height={48}
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

        {/* Accounts List */}
        <div className="space-y-4 mt-5 sm:mt-6 mb-6">
          {accounts.map((account) => (
            <Card key={account.id} className="overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white">{account.name}</h3>
                    <p className="text-cyan-100 text-sm">{account.type}</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-2 py-1">
                    <span className="text-xs text-white">{account.number}</span>
                  </div>
                </div>
              </div>
              
              <Card.Content>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white/70 text-sm">សមតុល្យ</div>
                    <div className={`text-4xl font-bold ${account.balance >= 0 ? 'text-white' : 'text-red-400'}`}>
                      {formatCurrency(account.balance)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all">
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button 
                    onClick={() => router.push('/deposit')}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all text-sm"
                  >
                    បញ្ចូល
                  </button>
                  <button className="flex-1 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all text-sm">
                    ដកប្រាក់
                  </button>
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all text-sm">
                    ផ្ទេរ
                  </button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        {/* Add Account */}
        <Card>
          <Card.Content>
            <button className="w-full py-4 flex items-center justify-center text-cyan-600 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              បន្ថែមគណនីថ្មី
            </button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}