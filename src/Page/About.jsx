import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../img/About_us.png"; // Replace with your About image
import Team1 from "../img/Suriya_Kannan.png"
import Team2 from "../img/VENKATESHKUMAR.jpg";
import Team3 from "../img/siddarth.jpg"
const About = () => {
  return (
    <div className="bg-gray-50 font-sans">

      {/* Hero Section */}
     <section className="relative py-16 bg-gradient-to-r from-pink-50 via-white to-pink-50 text-center overflow-hidden">
  {/* Decorative background */}
  <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/flower.png')] bg-repeat"></div>

  {/* Main heading */}
  <h1 className="relative text-4xl md:text-5xl mt-16 font-extrabold text-pink-700 mb-4 tracking-wide drop-shadow-lg">
    About <span className="text-gray-800">Ival Thuvakkam</span>
  </h1>

  {/* Elegant underline */}
  <div className="relative flex justify-center">
    <span className="w-24 h-1 bg-pink-500 rounded-full"></span>
  </div>

  {/* Tagline */}
  <p className="relative mt-4 text-lg md:text-xl text-gray-600 italic max-w-2xl mx-auto">
    Curating originals, not copies — crafting celebrations with soul, art, and timeless elegance ✨
  </p>
</section>


      {/* About Text Section with Animation */}
      <section className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10">
        <motion.div
  className="md:w-1/2 relative group"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Image */}
  <img
    src={AboutImg}
    alt="About Ival Thuvakkam"
    className="rounded-3xl shadow-2xl object-cover w-full h-96 transform group-hover:scale-105 transition duration-500 border-4 border-pink-100"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* Caption on Hover */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-pink-600/80 text-white text-sm md:text-base px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 shadow-lg">
    Capturing Moments, Creating Memories ✨
  </div>
</motion.div>


        {/* NEW CONTENT */}
        <motion.div
          className="md:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative bg-white p-10 rounded-3xl shadow-lg border border-pink-200 overflow-hidden mb-10">
  {/* Decorative Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 opacity-40 blur-2xl -z-10"></div>

  {/* Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center tracking-wide">
    <span className="text-pink-600">About Us</span>
  </h2>

  {/* Content */}
  <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto font-serif relative">
    <span className="absolute -top-6 left-6 text-5xl text-pink-300">“</span>
    Ival Thuvakkam curates originals, never mere copies. Every theme we create 
    radiates essence and individuality, turning intimate celebrations and grand 
    milestones into extraordinary, artful experiences. With creativity, passion, 
    and meticulous attention to detail, we transform visions into timeless, cherished 
    memories that linger in the heart.
    <span className="absolute -bottom-6 right-6 text-5xl text-pink-300">”</span>
  </p>
</div>

         <div className="relative bg-white p-10 rounded-3xl shadow-lg border border-pink-200 overflow-hidden">
  {/* Decorative Gradient Border Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 opacity-40 blur-2xl -z-10"></div>

  {/* Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center tracking-wide">
    <span className="text-pink-600">Our Promise</span>
  </h2>

  {/* Quote */}
  <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto font-serif relative">
    <span className="absolute -top-6 left-6 text-5xl text-pink-300">“</span>
    Ival Thuvakkam — 
    <span className="font-semibold text-pink-500"> sculpting designs</span>, 
    <span className="font-semibold text-pink-500"> curating dreams</span>, and 
    <span className="font-semibold text-pink-500"> delivering timeless celebrations</span> 
    with soul and elegance.
    <span className="absolute -bottom-6 right-6 text-5xl text-pink-300">”</span>
  </p>
</div>

        </motion.div>
      </section>

            {/* Our Team Section with Hover Animations */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Suriya Kannan", role: "Founder & Creative Head", image: Team1 },
              { name: "Venkateshkumar", role: "Event Designer", image: Team2 },
              { name: "Siddarth", role: "Operations Manager", image: Team3 },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-pink-50 rounded-2xl shadow-lg p-6 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-pink-300"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section with Fade-in */}
      <motion.section
        className="bg-pink-100 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Celebrate in Style?
        </h2>
        <p className="text-gray-700 mb-6">
          Let us transform your vision into a magical reality. Contact us today!
        </p>
        <a
          href="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Book Your Event
        </a>
      </motion.section>
    </div>
  );
};

export default About;
