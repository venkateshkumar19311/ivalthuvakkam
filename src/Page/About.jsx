import React from "react";
import ival from "../img/Ivaḷ_2.webp";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <section className="bg-gray-50 py-14 px-4">
      <div className="container mx-auto px-6 lg:px-20 py-14 px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src={ival}
            alt="About Ivaḷ Tuvakkam"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-pink-600">Ivaḷ Tuvakkam</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At <strong>Ivaḷ Tuvakkam</strong>, we bring your dream events to
            life with premium wedding, birthday, and event decoration services.
            Our mission is to create magical and unforgettable moments for every
            celebration, blending creativity with professionalism.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            With years of expertise in designing elegant themes, floral
            arrangements, and stage setups, we ensure every detail reflects your
            unique story. From intimate weddings to grand events, our dedicated
            team is passionate about turning your vision into reality.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are proud to serve our customers across Tamil Nadu with a touch
            of traditional aesthetics and modern style.
          </p>

          <a
            href="/services"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
     
    </section>
  );
};

export default About;
