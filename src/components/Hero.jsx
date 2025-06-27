import React from 'react';
import Lottie from 'lottie-react';
import doctorAnimation from '../assets/doctor-animation.json';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
            Your Health, <br className="hidden sm:inline" /> Our Priority
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-md sm:max-w-lg mx-auto md:mx-0">
            We connect patients with trusted healthcare providers using smart, secure technology.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="flex justify-center">
          <Lottie
            animationData={doctorAnimation}
            loop
            className="w-full max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
