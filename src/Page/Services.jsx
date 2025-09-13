import React from "react";

import our_services from "../img/Our_Services.png";
import wedding_decor from "../img/Wedding_Decor.png"; // Replace with your images
import birthday_setup from "../img/Birthday_Setup.png";
import corporate_events from "../img/corporate_events.png";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <div className="bg-gray-50 py-16">

      {/* 1. Hero Banner */}
      <section className="relative bg-pink-100 h-72 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${our_services})` }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-700">
            From weddings to corporate events, we create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* 2. Service Cards */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={wedding_decor} alt="Wedding Decor" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wedding Decor</h3>
              <p className="text-gray-600 mb-4">
                Elegant wedding stage setups, floral decorations, and themed designs to make your big day unforgettable.
              </p>
              
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={birthday_setup} alt="Birthday Setup" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Birthday Setup</h3>
              <p className="text-gray-600 mb-4">
                Fun, vibrant, and personalized birthday decorations for kids and adults to celebrate in style.
              </p>
             
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={corporate_events} alt="Corporate Events" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Corporate Events</h3>
              <p className="text-gray-600 mb-4">
                Professional decor setups for corporate events, product launches, and formal gatherings.
              </p>
             
            </div>
          </div>
        </div>
      </section>


      {/* 5. Call-To-Action */}
      <section className="bg-pink-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Want Your Dream Event?</h2>
        <p className="text-gray-700 mb-6">Contact us today and let’s make your celebration extraordinary.</p>
        <a
          href="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Book Your Decor Now
        </a>
      </section>
      
    </div>
  );
};

export default Services;
