import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={'p-4 rounded-full border-lolYellow border bg-section text-lolYellow min-w-[210px]'} {...props}>
      {children}
    </button>
  );
};

export default Button;
