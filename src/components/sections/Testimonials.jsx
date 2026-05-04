import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Aura transformed our penthouse into a serene sanctuary. Their meticulous attention to detail and understanding of light completely elevated our living experience.",
      name: "Eleanor Vance",
      role: "Private Client, Manhattan"
    },
    {
      quote: "The team's ability to balance minimalist architecture with warm, inviting textures is unparalleled. They didn't just design a house; they curated a lifestyle.",
      name: "Marcus Sterling",
      role: "CEO, Sterling Equities"
    },
    {
      quote: "Working with Aura was a masterclass in elegant restraint. The spaces they create feel expansive, intentional, and timelessly beautiful.",
      name: "Sophia Chen",
      role: "Art Gallery Director"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ghost-white -skew-x-12 transform translate-x-20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader title="Client Voices" subtitle="Testimonials" />
        
        <div className="max-w-4xl mx-auto mt-12 bg-white p-10 md:p-16 rounded-2xl shadow-[0_20px_50px_rgba(10,17,40,0.05)] border border-gray-100">
          <div className="relative min-h-[250px] md:min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full text-center"
              >
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-midnight-navy mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="font-sans font-medium text-midnight-navy text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="font-sans text-sm text-champagne-gold tracking-widest uppercase mt-2">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12 space-x-6">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-midnight-navy/20 flex items-center justify-center text-midnight-navy hover:bg-midnight-navy hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-midnight-navy/20 flex items-center justify-center text-midnight-navy hover:bg-midnight-navy hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
