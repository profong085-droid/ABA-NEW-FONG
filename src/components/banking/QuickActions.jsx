import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

const QuickActions = () => {
  const actions = [
    { id: 1, name: 'Transfer', icon: 'transfer', color: 'bg-cyan-500/20', iconColor: 'text-cyan-400', href: '/transfer' },
    { id: 2, name: 'Pay Bills', icon: 'bill', color: 'bg-cyan-500/20', iconColor: 'text-cyan-400', href: '/bills' },
    { id: 3, name: 'Top Up', icon: 'topup', color: 'bg-cyan-500/20', iconColor: 'text-cyan-400', href: '/topup' },
    { id: 4, name: 'Scan QR', icon: 'qr', color: 'bg-cyan-500/20', iconColor: 'text-cyan-400', href: '/scan-qr' },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'transfer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case 'bill':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'topup':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'qr':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <Card className="mb-6">
      <Card.Header>
        <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
      </Card.Header>
      
      <Card.Content>
        <div className="grid grid-cols-4 gap-4">
          {actions.map((action) => (
            <Link
              key={action.id}
              href={action.href}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10"
            >
              <div className={`p-3 rounded-full ${action.color} ${action.iconColor}`}>
                {getIcon(action.icon)}
              </div>
              <span className="mt-2 text-sm font-medium text-white">{action.name}</span>
            </Link>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
};

export default QuickActions;