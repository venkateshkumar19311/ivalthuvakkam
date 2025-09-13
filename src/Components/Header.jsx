import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Ival_Thuvakkam_logo from "../img/Ival_Thuvakkam_logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activePath, setActivePath] = useState(window.location.pathname);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // hide on scroll down
      } else {
        setIsVisible(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

   // ✅ Update activePath on navigation
  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);
  
  // Site URL for canonical + schema
  const siteUrl = process.env.REACT_APP_SITE_URL || window.location.origin;
  const pageUrl = `${siteUrl}/`;

  // Organization schema for SEO
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ivaḷ Thuvakkam",
    url: siteUrl,
    logo: `${siteUrl}${Ival_Thuvakkam_logo}`,
    sameAs: [
      "https://www.instagram.com/ival_thuvakkam",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+918675874049",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Ivaḷ Thuvakkam — Premium Wedding & Event Decoration</title>
        <meta
          name="description"
          content="Ivaḷ Thuvakkam is a premium wedding and event decoration company in Theni, Tamil Nadu. DREAM • DESIGN • DELIVER your perfect event with us."
        />
        <meta
          name="keywords"
          content="Ivaḷ Thuvakkam, wedding decorators Theni, event decoration Tamil Nadu, birthday decor Theni, premium wedding design"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ivaḷ Thuvakkam — Premium Wedding & Event Decoration" />
        <meta
          property="og:description"
          content="DREAM • DESIGN • DELIVER — Ivaḷ Thuvakkam creates unforgettable wedding and event decorations in Theni and Tamil Nadu."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Ivaḷ Thuvakkam" />
        <meta property="og:image" content={`${siteUrl}${Ival_Thuvakkam_logo}`} />
        <meta property="og:image:alt" content="Ivaḷ Thuvakkam Wedding & Event Decor Logo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivaḷ Thuvakkam — Premium Wedding & Event Decoration" />
        <meta
          name="twitter:description"
          content="Premium wedding and event decoration services in Theni, Tamil Nadu. Contact Ivaḷ Thuvakkam to make your dream event a reality."
        />
        <meta name="twitter:image" content={`${siteUrl}${Ival_Thuvakkam_logo}`} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* Header Component */}
      <header
        className={`bg-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
          {/* Logo */}
          <a href="/Home" className="flex items-center" aria-label="Ivaḷ Thuvakkam Home">
            <img
              src={Ival_Thuvakkam_logo}
              alt="Ivaḷ Thuvakkam Wedding & Event Decor Logo"
              className="h-14 md:h-20 w-auto max-w-[200px] object-contain hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>

         {/* Desktop Navigation */}
<nav
  className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-lg"
  aria-label="Primary Navigation"
>
  <a
    href="/Home"
    className={`transition ${
      activePath === "/Home" ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
    }`}
  >
    Home
  </a>
  <a
    href="/about"
    className={`transition ${
      activePath === "/about" ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
    }`}
  >
    About Us
  </a>
  <a
    href="/services"
    className={`transition ${
      activePath === "/services" ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
    }`}
  >
    Services
  </a>
  <a
    href="/gallery"
    className={`transition ${
      activePath === "/gallery" ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
    }`}
  >
    Gallery
  </a>
  <a
    href="/testimonials"
    className={`transition ${
      activePath === "/testimonials" ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
    }`}
  >
    Testimonials
  </a>
  <a
    href="/contact"
    className={`transition ${
      activePath === "/contact" ? "text-pink-500 font-semibold border-b-2 border-pink-500" : "hover:text-pink-500"
    }`}
  >
    Contact Us
  </a>
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
            aria-label="Toggle Mobile Menu"
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
            <nav
              className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium text-lg"
              aria-label="Mobile Navigation"
            >
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
    </>
  );
};

export default Header;
