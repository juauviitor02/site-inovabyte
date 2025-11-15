import React from 'react';

export const Button = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant] || variants.default} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";