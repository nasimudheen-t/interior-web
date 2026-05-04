import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <div className="bg-ghost-white min-h-screen text-midnight-navy font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;