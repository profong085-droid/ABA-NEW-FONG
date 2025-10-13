import React from 'react';

const Input = ({ 
  label, 
  id, 
  className = '', 
  ...props 
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="text-sm font-bold text-white/80 mb-2 flex items-center"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 backdrop-blur-md shadow-lg touch-target"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;