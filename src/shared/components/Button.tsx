import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'danger';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const variantClass = variant === 'primary' ? 'primary-button' : variant === 'danger' ? 'danger-button' : 'ghost-button';
  return <button className={`${variantClass} ${className}`} {...props}>{children}</button>;
}
