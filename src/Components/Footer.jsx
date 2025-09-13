import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaDownload, FaIdCard } from "react-icons/fa";
import Ival_Thuvakkam_logo from "../img/Ival_Thuvakkam_logo.webp";
import Ival_Thuvakkam_front_page from "../img/Ival Thuvakkam_front_page.jpg";
import Ival_Thuvakkam_back_page from "../img/Ival Thuvakkam_back_page.jpg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState({ front: true, back: true });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedImages({ ...selectedImages, [name]: checked });
  };

const downloadSelected = () => {
  const imagesToDownload = [];

  if (selectedImages.front) {
    imagesToDownload.push({
      href: Ival_Thuvakkam_front_page,
      filename: "Ival_Thuvakkam_Visiting_Card_Front.jpg",
    });
  }

  if (selectedImages.back) {
    imagesToDownload.push({
      href: Ival_Thuvakkam_back_page,
      filename: "Ival_Thuvakkam_Visiting_Card_Back.jpg",
    });
  }

  // Download each selected image with a small delay
  imagesToDownload.forEach((img, index) => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = img.href;
      link.download = img.filename;
      link.click();
    }, index * 200); // 200ms delay between downloads
  });
};

  return (
    <footer className="bg-pink-50 text-gray-700 pt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Company Branding */}
        <div className="flex flex-col items-center md:items-start">
  <img 
    src={Ival_Thuvakkam_logo} 
    alt="Ivaḷ Thuvakkam Logo" 
    className="h-16 w-auto mb-4 drop-shadow-md" 
  />
  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-left max-w-xs font-medium">
    <span className="text-pink-600 font-semibold">
      Crafting originals,
    </span>{" "}
    transforming dreams into extraordinary celebrations
  </p>
</div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-base font-medium">
            <li><a href="/" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">About Us</a></li>
            <li><a href="/services" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">Services</a></li>
            <li><a href="/gallery" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">Gallery</a></li>
            <li><a href="/testimonials" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">Testimonials</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide">Contact Us</h3>
          <ul className="space-y-2 text-base font-medium">
            <li><a href="tel:+918675874049" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">📞 +91 86758 74049</a></li>
            <li><a href="mailto:contact@ivalThuvakkam.com" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">✉ contact@ivalThuvakkam.com</a></li>
            <li><a href="https://wa.me/918675874049" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">💬 Chat on WhatsApp</a></li>
            <li><a href="https://www.instagram.com/ival_thuvakkam" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition duration-300 hover:pl-1">📸 Follow us on Instagram</a></li>
            <li className="text-gray-700 hover:text-pink-600 transition duration-300">📍 Veerachinnamalpuram, Theni, Tamil Nadu, India</li>
          </ul>
        </div>

        {/* Connect With Us + Visiting Card */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4 items-center">
            <a href="https://www.facebook.com/" className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ival_thuvakkam" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"><FaInstagram /></a>
            {/* <a href="#" className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"><FaYoutube /></a> */}
            <a href="https://wa.me/918675874049" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-3 rounded-full text-white text-lg shadow-md transition transform hover:scale-110 hover:bg-pink-600 hover:shadow-lg"><FaWhatsapp /></a>

            <button onClick={() => setIsOpen(true)} className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-600 transition text-lg" aria-label="Visiting Card">
              <FaIdCard />
            </button>
          </div>
        </div>

      </div>

     {/* Popup Modal */}
{isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full text-center relative animate-fadeIn">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Download Visiting Card</h3>
      <p className="mb-6 text-gray-600 text-sm md:text-base">
        Select the images you want to download:
      </p>

      {/* Image Selection */}
      <div className="flex justify-center gap-6 mb-6">
        <label className="flex flex-col items-center cursor-pointer transition transform hover:scale-105">
          <img 
            src={Ival_Thuvakkam_front_page} 
            alt="Front" 
            className="h-32 w-auto rounded-xl shadow-lg border border-gray-200 mb-2" 
          />
          <input 
            type="checkbox" 
            name="front" 
            checked={selectedImages.front} 
            onChange={handleCheckboxChange} 
            className="accent-pink-500 w-5 h-5"
          />
          <span className="text-gray-700 mt-2 font-medium">Front</span>
        </label>

        <label className="flex flex-col items-center cursor-pointer transition transform hover:scale-105">
          <img 
            src={Ival_Thuvakkam_back_page} 
            alt="Back" 
            className="h-32 w-auto rounded-xl shadow-lg border border-gray-200 mb-2" 
          />
          <input 
            type="checkbox" 
            name="back" 
            checked={selectedImages.back} 
            onChange={handleCheckboxChange} 
            className="accent-pink-500 w-5 h-5"
          />
          <span className="text-gray-700 mt-2 font-medium">Back</span>
        </label>
      </div>

      {/* Download Button */}
     <button
  onClick={downloadSelected}
  className="mx-auto block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-2xl shadow-xl font-bold flex items-center justify-center gap-3 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 text-lg md:text-xl"
>
  <FaDownload className="text-2xl" /> Download Selected
</button>


      {/* Close Button */}
      <button 
        onClick={() => setIsOpen(false)} 
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl font-bold"
      >
        &times;
      </button>
    </div>
  </div>
)}


      {/* Copyright */}
      <div className="border-t border-gray-300 mt-10 py-4 text-center bg-pink-50">
        <p className="text-sm md:text-base text-gray-700 font-medium tracking-wide">
          © <span className="text-pink-600 font-semibold">2025 Ivaḷ Thuvakkam</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
