import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// ✅ Banner Images
import banner from "../img/banner.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";
import banner4 from "../img/banner4.jpg";

// ✅ Other Components
import About from "./About";
import Services from "./Services";
import Gallery from "./gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  const images = [banner, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  // Scroll to Services section
  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
      {/* ✅ SEO Setup */}
      <Helmet>
        <title>Ivaḷ Thuvakkam | Wedding & Event Decor</title>
        <meta
          name="description"
          content="Ivaḷ Thuvakkam brings life to your special moments with premium wedding and event decorations in Tamil Nadu."
        />
        <meta
          name="keywords"
          content="Ival Thuvakkam, wedding decor, event decor, stage decoration, mandapam decoration, Tamil Nadu events"
        />
        <meta property="og:title" content="Ivaḷ Thuvakkam | Wedding & Event Decor" />
        <meta
          property="og:description"
          content="We bring life to your special moments with premium wedding and event decorations."
        />
        <meta property="og:image" content={banner} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ✅ Hero Section with Slider */}
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden={index !== currentIndex}
          >
            <img src={img} alt={`Banner ${index + 1}`} className="hidden" />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content - Modern Style */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg animate-fadeInDown">
   ival thuvakkam
</h1>

          <p className="text-lg md:text-2xl max-w-3xl text-gray-100/90 italic mb-0 md:mb-6 leading-relaxed drop-shadow-lg animate-fadeInUp">
            Beyond decor, we craft <span className="font-semibold text-pink-400">legacies</span> — curating weddings and events with <span className="font-semibold text-pink-400">elegance</span>, <span className="font-semibold text-pink-400">originality</span>, and <span className="font-semibold text-pink-400">soul</span>.
          </p>
         
        </div>

        {/* ✅ Slider Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex ? "bg-pink-500 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* ✅ Other Sections */}
      <About />
      <Services id="services" />
      <Gallery />
      <Testimonials />
      <Contact />

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        `}
      </style>
    </div>
  );
};

export default Home;
