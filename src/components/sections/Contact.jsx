import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#EAEBEF]">
      <div className="container mx-auto">
        <SectionHeader title="Get in Touch" subtitle="Contact Us" />
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h3 className="font-serif text-2xl mb-4 text-midnight-navy">Let's discuss your next project</h3>
                <p className="font-sans text-midnight-navy/70 text-sm leading-relaxed">
                  Whether you're looking to redesign your home or create a stunning commercial space, our team is here to bring your vision to life.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-gold mb-2">Email</h4>
                  <a href="mailto:hello@auradesign.studio" className="font-sans text-midnight-navy hover:text-champagne-gold transition-colors text-lg">
                    hello@auradesign.studio
                  </a>
                </div>
                
                <div>
                  <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-gold mb-2">Phone</h4>
                  <a href="tel:+15551234567" className="font-sans text-midnight-navy hover:text-champagne-gold transition-colors text-lg">
                    +1 (555) 123-4567
                  </a>
                </div>
                
                <div>
                  <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-gold mb-2">Studio</h4>
                  <p className="font-sans text-midnight-navy text-lg leading-relaxed">
                    120 Minimalist Way, Suite 400<br/>
                    New York, NY 10012
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label htmlFor="firstName" className="font-sans text-xs tracking-widest uppercase text-midnight-navy/70 mb-2">First Name</label>
                    <input type="text" id="firstName" className="border-b border-midnight-navy/20 py-3 focus:outline-none focus:border-champagne-gold transition-colors bg-transparent font-sans" placeholder="Jane" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastName" className="font-sans text-xs tracking-widest uppercase text-midnight-navy/70 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="border-b border-midnight-navy/20 py-3 focus:outline-none focus:border-champagne-gold transition-colors bg-transparent font-sans" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-midnight-navy/70 mb-2">Email Address</label>
                  <input type="email" id="email" className="border-b border-midnight-navy/20 py-3 focus:outline-none focus:border-champagne-gold transition-colors bg-transparent font-sans" placeholder="jane@example.com" />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="service" className="font-sans text-xs tracking-widest uppercase text-midnight-navy/70 mb-2">Service Required</label>
                  <select id="service" className="border-b border-midnight-navy/20 py-3 focus:outline-none focus:border-champagne-gold transition-colors bg-transparent font-sans text-midnight-navy appearance-none">
                    <option>Interior Architecture</option>
                    <option>Custom Furnishing</option>
                    <option>Styling & Decor</option>
                    <option>Other Consultation</option>
                  </select>
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-midnight-navy/70 mb-2">Project Details</label>
                  <textarea id="message" rows="4" className="border-b border-midnight-navy/20 py-3 focus:outline-none focus:border-champagne-gold transition-colors bg-transparent font-sans resize-none" placeholder="Tell us about your space and vision..."></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full md:w-auto mt-4">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
