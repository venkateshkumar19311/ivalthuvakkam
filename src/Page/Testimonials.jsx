import React, { useState, useEffect } from "react";
import client1 from "../img/client1.png";
import client2 from "../img/client2.png";
import client3 from "../img/client3.png";
import client4 from "../img/client4.png";
import client5 from "../img/client5.png";
import client6 from "../img/client6.png";
import Footer from "../Components/Footer";
import Testimonialbgimg from "../img/Testimonialbgimg.png"; // Replace with your background image
const testimonials = [
  {
    img: client1,
    name: "Anjali – Wedding Decor",
    rating: 5,
    review:
      "Ivaḷ Tuvakkam transformed our wedding venue into a dreamland! Every detail was magical and elegant.",
  },
  {
    img: client2,
    name: "Rahul – Birthday Setup",
    rating: 5,
    review:
      "From balloons to the theme setup, everything was perfect! Highly recommend their creativity.",
  },
  {
    img: client3,
    name: "Priya – Corporate Event",
    rating: 4,
    review:
      "Our annual event looked stunning with their decor. They deliver on time and with great attention to detail.",
  },
  {
    img: client4,
    name: "Karthik – Engagement",
    rating: 5,
    review:
      "We loved how they created a romantic ambiance for our engagement ceremony. Wonderful team!",
  },
  {
    img: client5,
    name: "Divya – Baby Shower",
    rating: 5,
    review:
      "The baby shower decorations were beautiful! Soft pastel colors and floral arrangements were amazing.",
  },
  {
    img: client6,
    name: "Arun – Wedding Reception",
    rating: 5,
    review:
      "They created a luxurious stage design that everyone admired. Very professional and creative team.",
  },
];

const TestimonialsPage = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <div className="bg-gray-50 font-sans py-16 px-4">
      {/* Section Title */}
      <section className="text-center py-14 px-4">
        <h1 className="text-4xl font-serif text-pink-600 mb-4">🧡 What Our Clients Say</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We turn your dreams into reality. But don’t just take our word for it…
        </p>
      </section>

      {/* Carousel Testimonials */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-pink-300 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <div className="text-pink-500 text-xl mb-3">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="mt-20 bg-white py-16 text-center text-white"
        style={{
  backgroundImage: `url(${Testimonialbgimg})`,
  backgroundBlendMode: "overlay",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundPosition: "center",       // ✅ Centers the image
  backgroundRepeat: "no-repeat",      // ✅ Prevents tiling
  backgroundSize: "cover",            // ✅ Makes it full-width & height
}}

      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ✨ Inspired by Our Work?
        </h2>
        <p className="text-lg mb-8">
          Let's create something beautiful together.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
          Schedule a Consultation
        </button>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default TestimonialsPage;
