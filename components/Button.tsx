import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  ...props
}) => {
  const baseStyles = "font-headings font-bold uppercase border-3 border-black shadow-pop transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pop-hover inline-block text-center cursor-pointer";

  const variants = {
    primary: "bg-pop-yellow text-black",
    secondary: "bg-white text-black",
    dark: "bg-black text-white border-white shadow-[4px_4px_0px_#fff] hover:shadow-none",
  };

  const sizes = {
    md: "px-6 py-2 text-lg",
    lg: "px-10 py-4 text-2xl",
    xl: "px-12 py-5 text-3xl",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Internal links (starting with /)
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={combinedClasses} onClick={onClick as any}>
        {children}
      </Link>
    );
  }

  // External links or anchor links
  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick as any}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};