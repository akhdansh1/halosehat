import React from 'react';
import { FaUserMd, FaCalendarCheck, FaFileMedical } from 'react-icons/fa';

const services = [
  {
    icon: <FaUserMd className="text-blue-600 text-4xl mb-4" />,
    title: "Online Consultation",
    description: "Consult with certified doctors anytime, anywhere through secure video calls.",
  },
  {
    icon: <FaCalendarCheck className="text-blue-600 text-4xl mb-4" />,
    title: "Easy Appointment",
    description: "Book appointments instantly and get reminders for your upcoming visits.",
  },
  {
    icon: <FaFileMedical className="text-blue-600 text-4xl mb-4" />,
    title: "Digital Medical Records",
    description: "Access your health history and prescriptions all in one place, securely.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">Our Services</h3>
        <p className="text-gray-600 text-lg mb-12">
          We provide modern, tech-driven healthcare solutions tailored to your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              {service.icon}
              <h4 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
