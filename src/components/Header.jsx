import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaTools,
  FaTags,
  FaUser,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "@dr.pogodin/react-helmet"; // ✅ UPDATED

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    closeAll();
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* SEO & Schema for Navbar */}
      <Helmet>
        <meta
          name="author"
          content="W3 Lalit - Web Developer from Sikar, Rajasthan"
        />
        <meta name="copyright" content="W3 Lalit - w3lalitsaini.com © 2025" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "W3 Lalit",
            url: "https://w3lalitsaini.com",
            logo: "https://w3lalitsaini.com/logs/favicon.ico",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 9887374746",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            },
            sameAs: [
              "https://www.instagram.com/w3lalitsaini",
              "https://www.linkedin.com/in/w3lalitsaini",
            ],
          })}
        </script>
      </Helmet>

      <header className="fixed top-5 left-1/2 transform -translate-x-1/2 backdrop-blur-[12px] rounded-full px-6 py-3 max-w-5xl w-[92%] md:w-[90%] lg:w-full z-50 border border-grayMid/70 bg-dark/70 shadow-lg text-white">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" onClick={closeAll} aria-label="W3 Lalit Home">
              W3 <span className="text-orange font-semibold">Lalit</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-orange duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-me")}
              className="hover:text-orange duration-300"
            >
              Why me?
            </button>
            <Link
              to="/work"
              onClick={closeAll}
              className="hover:text-orange duration-300"
            >
              Work
            </Link>

            {/* Dropdown - open on hover */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-orange duration-300"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Explore
                <FaChevronDown
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute mt-3 right-0 bg-dark border border-grayMid rounded-lg shadow-xl w-64 overflow-hidden"
                  >
                    <Link
                      to="/service"
                      className="flex items-start gap-3 px-4 py-3 hover:bg-dark/70"
                      onClick={closeAll}
                    >
                      <FaTools className="text-orange text-lg mt-1" />
                      <div>
                        <p className="text-white font-medium">Services</p>
                        <span className="text-grayMid text-xs">
                          Explore the services I provide
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/pricing"
                      className="flex items-start gap-3 px-4 py-3 hover:bg-dark/70"
                      onClick={closeAll}
                    >
                      <FaTags className="text-orange text-lg mt-1" />
                      <div>
                        <p className="text-white font-medium">Pricing</p>
                        <span className="text-grayMid text-xs">
                          Packages & Pricing details
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/about"
                      className="flex items-start gap-3 px-4 py-3 hover:bg-dark/70"
                      onClick={closeAll}
                    >
                      <FaUser className="text-orange text-lg mt-1" />
                      <div>
                        <p className="text-white font-medium">About Me</p>
                        <span className="text-grayMid text-xs">
                          Know more about me
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              onClick={closeAll}
              className="hover:text-orange duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full mt-3 left-1/2 transform -translate-x-1/2 w-[92%] bg-dark border border-grayMid rounded-lg shadow-lg p-4 flex flex-col gap-8 items-center"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-orange duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-me")}
                className="hover:text-orange duration-300"
              >
                Why me?
              </button>
              <Link
                to="/service"
                onClick={closeAll}
                className="hover:text-orange duration-300"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                onClick={closeAll}
                className="hover:text-orange duration-300"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={closeAll}
                className="hover:text-orange duration-300"
              >
                About Me
              </Link>
              <Link
                to="/work"
                onClick={closeAll}
                className="hover:text-orange duration-300"
              >
                Work
              </Link>
              <Link
                to="/contact"
                onClick={closeAll}
                className="hover:text-orange duration-300"
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
