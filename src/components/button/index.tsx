import React, { FC } from 'react';

import './button.css';

type TButton = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButton> = ({ label, className, ...rest }) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {label}
    </button>
  );
};
