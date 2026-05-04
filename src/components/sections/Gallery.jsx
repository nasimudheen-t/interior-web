import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

// ✅ import images properly
import hero from '../../assets/images/hero_interior.png';
import kitchen from '../../assets/images/gallery_kitchen.png';
import bedroom from '../../assets/images/gallery_bedroom.png';
import bathroom from '../../assets/images/gallery_bathroom.png';

const Gallery = () => {
  // ✅ use imported variables instead of string paths
  const images = [
    { src: hero, alt: 'Living Room', height: 'h-[400px]' },
    { src: kitchen, alt: 'Kitchen', height: 'h-[600px]' },
    { src: bedroom, alt: 'Bedroom', height: 'h-[500px]' },
    { src: bathroom, alt: 'Bathroom', height: 'h-[450px]' },
    { src: hero, alt: 'Detail Shot', height: 'h-[550px]' },
    { src: kitchen, alt: 'Dining Area', height: 'h-[350px]' },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 bg-ghost-white">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <SectionHeader title="Selected Works" subtitle="Portfolio" className="mb-0" />
          <p className="max-w-sm font-sans text-midnight-navy/70 text-sm md:text-base mt-8 md:mt-0">
            A curated selection of our most iconic transformations, where minimalist architecture meets lived-in luxury.
          </p>
        </div>
        
        {/* Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
              className="relative overflow-hidden rounded-lg group break-inside-avoid"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-midnight-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <span className="text-white font-sans tracking-widest uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Project
                </span>
              </div>

              {/* Image */}
              <img 
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover rounded-lg transform transition-transform duration-700 group-hover:scale-105 ${img.height}`}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Button */}
        <div className="mt-20 flex justify-center">
          <button className="text-midnight-navy font-sans text-sm tracking-widest uppercase border-b border-midnight-navy pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;