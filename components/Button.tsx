import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant, className }) => {
  const buttonClass = `
    px-4
    py-2
    rounded
    font-medium
    text-white
    shadow
    ${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : ''}
    ${variant === 'secondary' ? 'bg-gray-500 hover:bg-gray-600' : ''}
    ${variant === 'tertiary' ? 'bg-transparent hover:bg-gray-100 text-gray-700' : ''}
    ${className || ''}
  `;

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;