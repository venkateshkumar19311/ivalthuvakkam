import React, { useState } from "react";
import gallery1 from "../img/gallery1.png"; // Replace with your images
import gallery2 from "../img/gallery2.png";
import gallery3 from "../img/gallery3.png";
import gallery4 from "../img/gallery4.png";
import gallery5 from "../img/gallery5.png";
import gallery6 from "../img/gallery6.png";
import gallery7 from "../img/gallery7.png";
import gallery8 from "../img/gallery8.png";
import gallery9 from "../img/gallery9.png";
import Footer from "../Components/Footer";

const images = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-50 py-16">
      {/* 1. Hero Banner */}
      <section className="relative h-64 bg-pink-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${gallery1})` }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">Our Gallery</h1>
          <p className="text-lg md:text-xl text-gray-700">
            A glimpse of our magical decorations and event setups.
          </p>
        </div>
      </section>

      {/* 2. Masonry / Uniform Grid */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-xl font-semibold transition">
                View
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Lightbox / Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* 6. Call-To-Action */}
      <section className="bg-pink-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Inspired by Our Work?</h2>
        <p className="text-gray-700 mb-6">
          Let's create your dream event with our premium decor services.
        </p>
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

export default Gallery;
