import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parlor-burgundy disabled:opacity-50 disabled:pointer-events-none ring-offset-parlor-offwhite",
        {
          'bg-parlor-burgundy text-white hover:bg-red-900 shadow-md': variant === 'primary',
          'bg-parlor-gold text-white hover:bg-yellow-600 shadow-md': variant === 'secondary',
          'border border-parlor-burgundy text-parlor-burgundy hover:bg-parlor-blush': variant === 'outline',
          'h-9 px-4 text-sm': size === 'sm',
          'h-11 px-8 text-base': size === 'md',
          'h-14 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };
