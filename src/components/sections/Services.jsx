import React from 'react';
import { motion } from 'framer-motion';
import { Layout, PenTool, Home } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Services = () => {
  const services = [
    {
      title: 'Interior Architecture',
      description: 'Comprehensive spatial planning and architectural modifications to optimize flow, light, and functionality.',
      icon: <Layout size={32} strokeWidth={1.5} />,
      span: 'md:col-span-2 md:row-span-2',
      image: '/src/assets/images/gallery_bathroom.png'
    },
    {
      title: 'Custom Furnishing',
      description: 'Bespoke furniture selection and custom millwork design tailored to your specific aesthetic.',
      icon: <Home size={32} strokeWidth={1.5} />,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-midnight-navy',
      text: 'text-white'
    },
    {
      title: 'Styling & Decor',
      description: 'Curated selection of art, textiles, and decor to provide the perfect finishing touches.',
      icon: <PenTool size={32} strokeWidth={1.5} />,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-white',
      text: 'text-midnight-navy'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-[#EAEBEF]">
      <div className="container mx-auto">
        <SectionHeader title="Our Expertise" subtitle="Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`relative overflow-hidden group rounded-xl p-8 md:p-10 flex flex-col justify-between ${service.span} ${service.bg || 'bg-white'}`}
            >
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-midnight-navy/40 z-10 transition-opacity duration-500 group-hover:bg-midnight-navy/60"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              )}
              
              <div className={`relative z-20 ${service.image ? 'text-white' : service.text}`}>
                <div className={`mb-6 inline-block p-3 rounded-full ${service.image ? 'bg-white/20 backdrop-blur-sm' : (service.bg === 'bg-midnight-navy' ? 'bg-white/10' : 'bg-midnight-navy/5')}`}>
                  {service.icon}
                </div>
              </div>
              
              <div className={`relative z-20 ${service.image ? 'text-white' : service.text}`}>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{service.title}</h3>
                <p className="font-sans text-sm md:text-base opacity-80 max-w-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
