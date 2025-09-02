import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";  // add this
import lval_2 from "../img/Ivaḷ_2.webp";
import lval_home from "../img/Ivaḷ_home.png";
import About from "./About";
import Services from "./Services";
import Gallery from "./gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  const images = [lval_home, lval_2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* ✅ SEO Setup */}
      <Helmet>
        <title>Ivaḷ Tuvakkam | Wedding & Event Decor</title>
        <meta
          name="description"
          content="Ivaḷ Tuvakkam brings life to your special moments with premium wedding and event decorations in Tamil Nadu."
        />
        <meta
          name="keywords"
          content="Ival Tuvakkam, wedding decor, event decor, stage decoration, mandapam decoration, Tamil Nadu events"
        />
        <meta property="og:title" content="Ivaḷ Tuvakkam | Wedding & Event Decor" />
        <meta
          property="og:description"
          content="We bring life to your special moments with premium wedding and event decorations."
        />
        <meta property="og:image" content={lval_home} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ivaḷ Tuvakkam</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            We bring life to your special moments with premium wedding and event decorations.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Explore Our Decor
          </button>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
