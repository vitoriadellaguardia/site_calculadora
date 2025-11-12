import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = "border-none text-white text-center flex items-center justify-center cursor-pointer rounded-xl transition-all duration-200 backdrop-blur-md border border-white/20 font-medium min-h-[45px] w-full h-full shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl active:transform active:translate-y-0 active:shadow-md";
  
  const variants = {
    default: "bg-white/15 hover:bg-white/25 active:bg-white/30 text-sm md:text-base lg:text-lg",
    special: "bg-gradient-button hover:bg-white/25 active:bg-white/30 text-xs md:text-sm lg:text-base border-white/30",
    number: "bg-white/20 hover:bg-white/30 active:bg-white/35 font-semibold text-sm md:text-base lg:text-lg",
    clear: "bg-gradient-clear hover:bg-blue-400/80 active:bg-blue-400/90 font-semibold text-base md:text-lg lg:text-xl",
    delete: "bg-gradient-delete hover:bg-red-400/80 active:bg-red-400/90 font-semibold border-white/30",
    equal: "bg-gradient-equal hover:bg-purple-600/80 active:bg-purple-600/90 font-bold text-base md:text-lg lg:text-xl"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;