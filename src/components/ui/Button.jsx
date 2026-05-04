import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300 ease-in-out font-medium";
  
  const variants = {
    primary: "bg-champagne-gold text-white hover:bg-midnight-navy",
    outline: "border border-midnight-navy text-midnight-navy hover:bg-midnight-navy hover:text-white",
    ghost: "text-midnight-navy hover:text-champagne-gold"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
