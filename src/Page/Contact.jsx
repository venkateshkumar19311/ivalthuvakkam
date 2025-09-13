import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";
import visitingcard from "../img/visiting_card2.jpg";
import visitingcard2 from "../img/Pi7.jpg";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Ivaḷ Thuvakkam | Contact Us | Event Decoration Company in Theni</title>
        <meta
          name="description"
          content="Get in touch with Ivaḷ Thuvakkam, Theni's premium event decoration company. Contact us via phone, email, WhatsApp, or Instagram to plan weddings, engagements, and parties."
        />
        <meta
          name="keywords"
          content="Ivaḷ Thuvakkam, Theni event decorators, wedding decoration Theni, birthday decoration Theni, surprise party planners Theni, event management Theni"
        />
        <meta name="author" content="Ivaḷ Thuvakkam" />
        <link rel="canonical" href="https://www.ivalthuvakkam.com/contact" />

        {/* ✅ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ivaḷ Thuvakkam",
            "image": "https://www.ivalthuvakkam.com/img/visiting_card.jpg",
            "@id": "",
            "url": "https://www.ivalthuvakkam.com",
            "telephone": "+918675874049",
            "email": "ivalthuvakkam@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Veerachinnamalpuram",
              "addressLocality": "Theni",
              "addressRegion": "Tamil Nadu",
              "postalCode": "625531",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://wa.me/918675874049",
              "https://www.instagram.com/ival_thuvakkam"
            ]
          })}
        </script>
      </Helmet>

      {/* 1. Hero Banner */}
      <section className="relative bg-pink-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Let's make your event magical – contact us for bookings & inquiries.
        </p>
      </section>
{/* 2. Contact Information Section */}
<section className="container mx-auto px-6 lg:px-20 py-12 grid md:grid-cols-2 gap-10">
  {/* Left - Contact Info */}
  <article
    className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group hover:scale-105 transition-transform duration-500 ease-in-out"
    style={{
      backgroundImage: `url(${visitingcard2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500"></div>

    <div className="relative p-8 md:p-10 text-white">
      <h2 className="text-3xl font-extrabold mb-6 border-b border-white/40 pb-3 text-center animate-fadeInDown">
        Contact Info
      </h2>
      <p className="text-white/90 text-lg mb-6 leading-relaxed text-center animate-fadeInUp">
        We are here to bring your dream event to life. Reach out to us via
        phone, email, or WhatsApp for quick assistance.
      </p>

      {/* Moving Text */}
      <div className="overflow-hidden relative h-10 mb-6">
        <p
          id="movingText"
          className="absolute whitespace-nowrap text-pink-400 font-semibold text-lg animate-marquee"
          style={{ left: "-100%" }}
        >
          🎉 Special Offer: Book your wedding décor today & get 10% off!
        </p>
      </div>

      <address className="not-italic space-y-5 text-lg text-left">
        <p>
          <span className="font-semibold w-28 inline-block">Contact:</span>
          <span className="text-white/80">SURIYA KANNAN</span>
        </p>
        <p>
          <span className="font-semibold w-28 inline-block">Phone:</span>
          <a
            href="tel:+918675874049"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("+918675874049");
              alert("Phone number copied!");
              window.location.href = "tel:+918675874049";
            }}
            className="cursor-pointer text-pink-400 hover:text-pink-300 transition underline underline-offset-4 hover:scale-110 duration-300 inline-block"
          >
            +91 86758 74049
          </a>
        </p>
        <p>
          <span className="font-semibold w-28 inline-block">Email:</span>
          <a
            href="mailto:ivalthuvakkam@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("ivalthuvakkam@gmail.com");
              alert("Email copied!");
              window.location.href = "mailto:ivalthuvakkam@gmail.com";
            }}
            className="cursor-pointer text-pink-400 hover:text-pink-300 transition underline underline-offset-4 hover:scale-110 duration-300 inline-block"
          >
            ivalthuvakkam@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold w-28 inline-block">WhatsApp:</span>
          <a
            href="https://wa.me/918675874049"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition underline underline-offset-4 hover:scale-110 duration-300 inline-block"
          >
            Chat with us
          </a>
        </p>
        <p>
          <span className="font-semibold w-28 inline-block">Instagram:</span>
          <a
            href="https://www.instagram.com/ival_thuvakkam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition underline underline-offset-4 hover:scale-110 duration-300 inline-block"
          >
            @ival_thuvakkam
          </a>
        </p>
        <p>
          <span className="font-semibold w-28 inline-block">Office:</span>
          <span className="text-white/80">
            Veerachinnamalpuram, Theni, Tamil Nadu
          </span>
        </p>
      </address>
    </div>
  </article>

  {/* Right - Quick Inquiry Form */}
  <article
    id="quick-inquiry"
    className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group hover:scale-105 transition-transform duration-500 ease-in-out"
    style={{
      backgroundImage: `url(${visitingcard})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500"></div>

    <div className="relative p-8 md:p-10 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-white/40 pb-2 animate-fadeInDown">
        Quick Inquiry
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const phone = e.target.phone.value;
          const message = e.target.message.value;
          const whatsappUrl = `https://wa.me/918675874049?text=Hello%20Ival%20Thuvakkam,%0A%0AMy%20Details:%0AName:%20${encodeURIComponent(
            name
          )}%0AEmail:%20${encodeURIComponent(
            email
          )}%0APhone:%20${encodeURIComponent(
            phone
          )}%0A%0AMessage:%20${encodeURIComponent(message)}`;
          window.open(whatsappUrl, "_blank");
        }}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          className="w-full border border-gray-300 bg-white/90 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:scale-105 transition-transform duration-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          className="w-full border border-gray-300 bg-white/90 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:scale-105 transition-transform duration-300"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          aria-label="Your Phone"
          className="w-full border border-gray-300 bg-white/90 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:scale-105 transition-transform duration-300"
        />
        <textarea
          name="message"
          placeholder="Message / Event Details"
          aria-label="Message"
          rows="4"
          className="w-full border border-gray-300 bg-white/90 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 hover:scale-105 transition-transform duration-300"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300 w-full hover:scale-105 transform"
        >
          Send Message
        </button>
      </form>
    </div>
  </article>

  {/* JS for Moving Text */}
  <script>
    {`
      const movingText = document.getElementById("movingText");
      let pos = -movingText.offsetWidth;
      function animateText() {
        pos += 2;
        if (pos > window.innerWidth) pos = -movingText.offsetWidth;
        movingText.style.left = pos + "px";
        requestAnimationFrame(animateText);
      }
      animateText();
    `}
  </script>
</section>

{/* CSS Enhancements */}
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
.animate-fadeInDown { animation: fadeInDown 0.8s ease forwards; }
.animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }

@keyframes marquee {
  0% { left: -100%; }
  100% { left: 100%; }
}
.animate-marquee { animation: marquee 15s linear infinite; }
`}
</style>


      {/* 4. Google Map */}
      <section className="w-full h-80">
        <iframe
          title="Ivaḷ Thuvakkam Location - Theni Veerachinnamalpuram"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123456789!2d77.489876!3d10.015678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076abcdef12345%3A0x123456abcdef!2sVeerachinnammalpuram%2C%20Theni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1693578923456!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-pink-50 py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Plan Your Event With Us Today
        </h3>
        <a
          href="/services"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Book Your Decor Now
        </a>
      </section>
    </div>
  );
};

export default Contact;
