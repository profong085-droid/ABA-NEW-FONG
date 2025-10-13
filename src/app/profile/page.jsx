'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState('https://i.pinimg.com/1200x/98/89/7c/98897c54cfc34fc4abc64fdcd025336a.jpg');
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });
  const [security, setSecurity] = useState({
    twoFactor: true,
  });
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+855 12 345 678',
    accountNumber: '**** **** **** 1234',
    accountType: 'Savings Account',
    branch: 'Phnom Penh Main Branch',
    joinDate: '2023-05-15',
    status: 'Active',
    tier: 'Gold',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save the data to a backend here
    alert('Profile updated successfully!');
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
                    My Profile
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
            <p className="text-white/70">Manage your account settings</p>
          </div>
          
          {/* Profile Picture Section */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-2 cursor-pointer shadow-lg hover:scale-105 transform transition-all">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
              
              <h2 className="mt-4 text-xl font-bold text-white">{userInfo.name}</h2>
              <p className="text-white/70">{userInfo.email}</p>
              
              {isEditing ? (
                <div className="mt-4 flex space-x-3">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-white/10 rounded-2xl text-white font-bold hover:bg-white/20 hover:scale-105 transform transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold hover:scale-105 transform transition-all"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          
          {/* Profile Account Section */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Profile Account
              <span className="ml-2">👤</span>
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/70">Account Number</p>
                  <p className="font-medium">{userInfo.accountNumber}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/70">Account Type</p>
                  <p className="font-medium">{userInfo.accountType}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/70">Member Since</p>
                  <p className="font-medium">{userInfo.joinDate}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/70">Status</p>
                  <p className="font-medium">
                    <span className="inline-flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                      {userInfo.status}
                    </span>
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/70">Tier</p>
                  <p className="font-medium">
                    <span className="inline-flex items-center">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                      {userInfo.tier}
                    </span>
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/70">Branch</p>
                  <p className="font-medium">{userInfo.branch}</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-4">
                <p className="text-sm text-white/70">Contact Information</p>
                <div className="mt-2 space-y-1">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {userInfo.email}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {userInfo.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Personal Information */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Personal Information
              <span className="ml-2">ℹ️</span>
            </h2>
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                    Full Name
                    <span className="ml-1">📝</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                    Email Address
                    <span className="ml-1">📧</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-white/80 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                    Phone Number
                    <span className="ml-1">📱</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-sm"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/70">Full Name</p>
                  <p className="font-medium">{userInfo.name}</p>
                </div>
                
                <div>
                  <p className="text-sm text-white/70">Email Address</p>
                  <p className="font-medium">{userInfo.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-white/70">Phone Number</p>
                  <p className="font-medium">{userInfo.phone}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Settings */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Settings
              <span className="ml-2">⚙️</span>
            </h2>
            <div className="space-y-4">
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Change Password</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </button>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Security Settings</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Privacy Controls</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Notification Preferences */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Notification Preferences
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
          
          {/* Security Settings */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl border border-white/20 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              Security Settings
              <span className="ml-2">🔒</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-2xl">
                <div>
                  <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                  <p className="text-sm text-white/70">Add extra security to your account</p>
                </div>
                <button 
                  onClick={() => handleSecurityChange('twoFactor')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    security.twoFactor ? 'bg-cyan-500' : 'bg-white/20'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    security.twoFactor ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <button className="w-full flex justify-between items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-105 transform transition-all">
                <span>Change PIN</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}