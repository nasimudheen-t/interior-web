import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

// ✅ import image properly
import heroImage from '../../assets/images/hero_interior.png';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-ghost-white mt-20 md:mt-0 z-10">
        <div className="max-w-xl">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            <motion.p 
              variants={textVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-champagne-gold font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
            >
              Architectural Minimalism
            </motion.p>
            
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-midnight-navy leading-[1.1] mb-8">
              <motion.span variants={textVariants} transition={{ duration: 0.8 }} className="block">
                Design
              </motion.span>
              <motion.span variants={textVariants} transition={{ duration: 0.8 }} className="block italic font-light">
                beyond
              </motion.span>
              <motion.span variants={textVariants} transition={{ duration: 0.8 }} className="block">
                boundaries.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              transition={{ duration: 0.8 }}
              className="text-midnight-navy/70 font-sans text-base md:text-lg mb-12 max-w-md leading-relaxed"
            >
              We craft high-end, bespoke spaces that blend clean architectural lines with timeless luxury. Experience the art of minimalist living.
            </motion.p>
            
            <motion.div 
              variants={textVariants}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary">Explore Projects</Button>
              <Button variant="outline">Our Approach</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-midnight-navy/20 z-10 mix-blend-multiply"></div>

        {/* ✅ FIXED IMAGE */}
        <img 
          src={heroImage}
          alt="Luxury minimalist living room with morning light"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;