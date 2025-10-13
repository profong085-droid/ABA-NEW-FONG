import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Header = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`px-4 sm:px-6 py-3 sm:py-4 border-b border-white/20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Content = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`px-4 sm:px-6 py-3 sm:py-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Content = Content;

export default Card;