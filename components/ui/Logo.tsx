import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true,
  className = '' 
}) => {
  const sizes = {
    sm: { emoji: 'text-xl', text: 'text-xl', padding: 'p-0.5' },
    md: { emoji: 'text-3xl', text: 'text-3xl', padding: 'p-1' },
    lg: { emoji: 'text-4xl', text: 'text-4xl', padding: 'p-2' },
  };

  const currentSize = sizes[size];

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className={`bg-pop-yellow border-3 border-black ${currentSize.padding} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-6 transition-transform hover:rotate-12 cursor-pointer`}>
        <span className={`${currentSize.emoji} leading-none block`} role="img" aria-label="lobster">🦞</span>
      </div>
      {showText && (
        <span className={`font-headings font-bold ${currentSize.text} tracking-tighter text-black uppercase`}>
          Nemo Company
        </span>
      )}
    </Link>
  );
};
