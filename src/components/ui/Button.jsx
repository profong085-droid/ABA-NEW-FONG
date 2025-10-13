import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  // Base classes with gradient styling
  let baseClasses = 'inline-flex items-center justify-center rounded-2xl font-bold transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 shadow-lg hover:shadow-xl border border-white/20 touch-target';
  
  // Variant classes with gradient colors
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 focus:ring-cyan-300 shadow-cyan-500/30',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 focus:ring-gray-400 shadow-gray-500/30',
    outline: 'bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-200/50 shadow-cyan-500/20',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 focus:ring-red-300 shadow-red-500/30',
  };
  
  // Size classes with appropriate padding
  const sizeClasses = {
    small: 'px-3 py-2 sm:px-4 sm:py-2 text-sm',
    medium: 'px-4 py-3 sm:px-6 sm:py-3 text-base',
    large: 'px-6 py-4 sm:px-8 sm:py-4 text-lg',
  };
  
  // Combine classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      <span className="flex items-center">
        {children}
      </span>
    </button>
  );
};

export default Button;