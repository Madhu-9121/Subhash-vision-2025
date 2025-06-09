import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 60 }) => {
  return (
    <div 
      style={{ width: size, height: size }} 
      className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden"
    >
      <div className="absolute inset-0.5 rounded-full bg-white flex items-center justify-center">
        <svg 
          width={size * 0.7} 
          height={size * 0.7} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized K for Kalam */}
          <path 
            d="M30 20V80M30 50L60 20M30 50L60 80" 
            stroke="url(#logo-gradient)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Circular element representing vision/future */}
          <circle 
            cx="70" 
            cy="50" 
            r="15" 
            stroke="url(#logo-gradient)" 
            strokeWidth="6" 
            fill="none"
          />
          <defs>
            <linearGradient id="logo-gradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9800" />
              <stop offset="1" stopColor="#2196F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};