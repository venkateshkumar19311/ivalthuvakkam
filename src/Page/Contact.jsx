import React from "react";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
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
<div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
    Contact Info
  </h2>
  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
    We are here to bring your dream event to life. Reach out to us via
    phone, email, or WhatsApp for quick assistance.
  </p>

  <div className="space-y-4 text-lg text-gray-700">
    <p className="flex items-center gap-2">
      <span className="font-semibold w-28">Phone:</span>
      <a
        href="tel:+918675874049"
        className="text-pink-600 hover:underline"
      >
        +91 86758 74049
      </a>
    </p>

    <p className="flex items-center gap-2">
      <span className="font-semibold w-28">Email:</span>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=ivalthuvakkam@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="text-pink-600 hover:underline"
      >
        ivalthuvakkam@gmail.com
      </a>
    </p>

    <p className="flex items-center gap-2">
      <span className="font-semibold w-28">WhatsApp:</span>
      <a
        href="https://wa.me/918675874049"
        target="_blank"
        rel="noreferrer"
        className="text-pink-600 hover:underline"
      >
        Chat with us
      </a>
    </p>

    <p className="flex items-center gap-2">
      <span className="font-semibold w-28">Instagram:</span>
      <a
        href="https://www.instagram.com/ival_thuvakkam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noreferrer"
        className="text-pink-600 hover:underline"
      >
        @ival_thuvakkam
      </a>
    </p>

    <p className="flex items-start gap-2">
      <span className="font-semibold w-28">Office:</span>
      <span>Veerachinnamalpuram, Theni</span>
    </p>

    <p className="flex items-center gap-2">
      <span className="font-semibold w-28">Contact:</span>
      <span>SURIYA</span>
    </p>
  </div>
</div>


      {/* Right - Form */}
<div id="quick-inquiry" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Inquiry</h2>
  <form
    onSubmit={(e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const message = e.target.message.value;

      // WhatsApp API link
      const whatsappUrl = `https://wa.me/918675874049?text=Hello%20Ival%20Thuvakkam,%0A%0AMy%20Details:%0AName:%20${encodeURIComponent(
        name
      )}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(
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
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
    />
    <input
      type="tel"
      name="phone"
      placeholder="Your Phone"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
    <textarea
      name="message"
      placeholder="Message / Event Details"
      rows="4"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
    ></textarea>
    <button
      type="submit"
      className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300 w-full"
    >
      Send Message
    </button>
  </form>
</div>


      </section>

      {/* 4. Google Map */}
<section className="w-full h-80">
  <iframe
    title="Ivaḷ Tuvakkam Location - Theni Veerachinnammalpuram"
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
