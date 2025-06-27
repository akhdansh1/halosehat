import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  // Optional: enable smooth scrolling behavior globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Section: Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Section: Services */}
      <section id="services">
        <Services />
      </section>

      {/* Section: Contact */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
        <p className="text-gray-600">Email: <a href="mailto:contact@halosehat.com" className="text-blue-600 underline">contact@halosehat.com</a></p>
      </section>

      <Footer />
    </div>
  );
}
