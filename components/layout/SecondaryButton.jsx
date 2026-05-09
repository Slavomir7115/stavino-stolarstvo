import React from "react";

const SecondaryButton = ({ children, className = "" }) => {
  return (
    <button
      className={`px-8 py-4 border border-gold text-gold text-xs uppercase tracking-widest font-bold cursor-pointer
      hover:bg-gold hover:text-blue transition-all duration-300 font-body  ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
