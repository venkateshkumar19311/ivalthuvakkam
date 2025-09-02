import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Ival_Tuvakkam_logo from "../img/Ival_Tuvakkam_logo.webp"; // Logo import

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-700 pt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* 1. Company Branding with Logo */}
<div className="flex flex-col items-center md:items-start">
  <img
    src={Ival_Tuvakkam_logo}
    alt="Ivaḷ Tuvakkam Logo"
    className="h-16 w-auto mb-4 drop-shadow-md" // Larger logo with shadow
  />
  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-left max-w-xs font-medium">
    <span className="text-pink-600 font-semibold">“Creating Magical Moments”</span><br />
    for Your Special Day with premium decor.
  </p>
</div>


{/* 2. Quick Links */}
<div>
  <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide">Quick Links</h3>
  <ul className="space-y-2 text-base font-medium">
    <li>
      <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">
        Home
      </a>
    </li>
    <li>
      <a href="/about" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">
        About Us
      </a>
    </li>
    <li>
      <a href="/services" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">
        Services
      </a>
    </li>
    <li>
      <a href="/gallery" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">
        Gallery
      </a>
    </li>
    <li>
      <a href="/testimonials" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">
        Testimonials
      </a>
    </li>
    <li>
      <a href="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">
        Contact Us
      </a>
    </li>
  </ul>
</div>

{/* 3. Contact Details */}
<div>
  <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide">Contact Us</h3>
  <ul className="space-y-2 text-base font-medium">
    <li>
      <a
        href="tel:+918675874049"
        className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1"
      >
        📞 +91 86758 74049
      </a>
    </li>
    <li>
      <a
        href="mailto:contact@ivaltuvakkam.com"
        className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1"
      >
        ✉ contact@ivaltuvakkam.com
      </a>
    </li>
    <li>
      <a
        href="https://wa.me/918675874049"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1"
      >
        💬 Chat on WhatsApp
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/ival_thuvakkam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1"
      >
        📸 Follow us on Instagram
      </a>
    </li>
     <li className="text-gray-700 hover:text-pink-600 transition duration-300">
      📍 Veerachinnamalpuram, Theni, Tamil Nadu, India
    </li>
  </ul>
</div>


       {/* 4. Social Media Links */}
<div>
  <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide">
    Connect With Us
  </h3>
  <div className="flex justify-center md:justify-start gap-4">
    <a
      href="#"
      className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
    <a
  href="https://www.instagram.com/ival_thuvakkam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"
  aria-label="Instagram"
>
  <FaInstagram />
</a>
    <a
      href="#"
      className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>
    <a
  href="https://wa.me/918675874049"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-500  p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"
  aria-label="WhatsApp"
>
  <FaWhatsapp />
</a>
  </div>
</div>

      </div>

     {/* Copyright Section */}
<div className="border-t border-gray-300 mt-10 py-4 text-center bg-pink-50">
  <p className="text-sm md:text-base text-gray-700 font-medium tracking-wide">
    © <span className="text-pink-600 font-semibold">2025 Ivaḷ Tuvakkam</span>. 
    All Rights Reserved.
  </p>
</div>

    </footer>
  );
};

export default Footer;
