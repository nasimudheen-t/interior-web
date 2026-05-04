import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-white py-20 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-serif text-3xl mb-6 tracking-wider">AURA</h2>
          <p className="font-sans text-white/70 text-sm leading-relaxed max-w-xs">
            Curating timeless spaces that elevate the everyday. High-end interior design for the modern aesthetic.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-gold mb-6">Contact</h4>
          <ul className="space-y-4 font-sans text-sm text-white/70">
            <li>hello@auradesign.studio</li>
            <li>+1 (555) 123-4567</li>
            <li>120 Minimalist Way, Suite 400<br/>New York, NY 10012</li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-gold mb-6">Explore</h4>
          <ul className="space-y-4 font-sans text-sm text-white/70">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-gold mb-6">Social</h4>
          <div className="flex flex-col space-y-4 font-sans text-sm">
            <a href="#" className="text-white/70 hover:text-champagne-gold transition-colors">Instagram</a>
            <a href="#" className="text-white/70 hover:text-champagne-gold transition-colors">Facebook</a>
            <a href="#" className="text-white/70 hover:text-champagne-gold transition-colors">Twitter</a>
            <a href="#" className="text-white/70 hover:text-champagne-gold transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/50">
        <p>&copy; {new Date().getFullYear()} Aura Design Studio. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
