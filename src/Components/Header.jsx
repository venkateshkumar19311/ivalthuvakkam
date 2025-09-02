import React, { useState, useEffect } from "react";
import Ival_Tuvakkam_logo from "../img/Ival_Tuvakkam_logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down → hide
      } else {
        setIsVisible(true); // Scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <a href="/Home" className="flex items-center">
          <img
            src={Ival_Tuvakkam_logo}
            alt="Ivaḷ Tuvakkam Logo"
            className="h-14 md:h-20 w-auto max-w-[200px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-lg">
          <a href="/Home" className="hover:text-pink-500 transition">Home</a>
          <a href="/about" className="hover:text-pink-500 transition">About Us</a>
          <a href="/services" className="hover:text-pink-500 transition">Services</a>
          <a href="/gallery" className="hover:text-pink-500 transition">Gallery</a>
          <a href="/testimonials" className="hover:text-pink-500 transition">Testimonials</a>
          <a href="/contact" className="hover:text-pink-500 transition">Contact Us</a>
        </nav>

        {/* CTA Button (Desktop) */}
        <a
          href="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition hidden md:block"
        >
          Get Quote
        </a>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <nav className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium text-lg">
            <a href="/Home" className="hover:text-pink-500 transition">Home</a>
            <a href="/about" className="hover:text-pink-500 transition">About Us</a>
            <a href="/services" className="hover:text-pink-500 transition">Services</a>
            <a href="/gallery" className="hover:text-pink-500 transition">Gallery</a>
            <a href="/testimonials" className="hover:text-pink-500 transition">Testimonials</a>
            <a href="/contact" className="hover:text-pink-500 transition">Contact Us</a>
           <a
  href="#quick-inquiry"
  className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
>
  Get Quote
</a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
