import React, { useState, useEffect } from "react";
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

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [location]);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/sign-in");
    closeAll();
  };

  return (
    <>
      <header className="fixed top-5 left-1/2 transform -translate-x-1/2 backdrop-blur-[12px] rounded-full px-6 py-3 max-w-5xl w-[92%] md:w-[90%] lg:w-full z-50 border border-grayMid/70 bg-dark/70 shadow-lg text-white">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" onClick={closeAll} aria-label="W3 Lalit Home">
              W3 <span className="text-orange font-semibold">Lalit</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-orange duration-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-me")}
              className="hover:text-orange duration-300 transition-colors"
            >
              Why me?
            </button>
            <Link
              to="/work"
              onClick={closeAll}
              className="hover:text-orange duration-300 transition-colors"
            >
              Work
            </Link>

            {/* Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-orange duration-300 transition-colors"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Explore
                <FaChevronDown
                  className={`transition-transform duration-300 ${
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
                    transition={{ duration: 0.2 }}
                    className="absolute mt-0 right-0 bg-dark border border-grayMid/30 rounded-lg shadow-xl w-64 overflow-hidden backdrop-blur-md"
                  >
                    <Link
                      to="/service"
                      className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
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
                      className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
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
                      className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
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
              className="hover:text-orange duration-300 transition-colors"
            >
              Contact
            </Link>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center gap-4 border-l border-grayMid/30 pl-6 ml-2">
                <span className="text-sm font-medium text-grayMid hidden lg:inline">
                  Hi,{" "}
                  <span className="text-white">{user.name.split(" ")[0]}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-orange/10 hover:bg-orange text-orange hover:text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 border border-orange/50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/sign-in"
                onClick={closeAll}
                className="bg-orange hover:bg-orange/80 text-white px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-orange/20"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl p-2 hover:bg-white/5 rounded-full transition-colors"
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
              className="md:hidden absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-full bg-dark/95 backdrop-blur-xl border border-grayMid/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-6 items-center overflow-hidden"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-me")}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                Why me?
              </button>
              <Link
                to="/service"
                onClick={closeAll}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                onClick={closeAll}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={closeAll}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/work"
                onClick={closeAll}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                Work
              </Link>
              <Link
                to="/contact"
                onClick={closeAll}
                className="text-lg font-medium hover:text-orange transition-colors"
              >
                Contact
              </Link>

              <div className="w-full border-t border-grayMid/20 pt-6 flex flex-col items-center gap-4">
                {user ? (
                  <>
                    <p className="text-grayMid">
                      Logged in as{" "}
                      <span className="text-white">{user.name}</span>
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-dark border border-orange text-orange py-3 rounded-xl font-bold hover:bg-orange hover:text-white transition-all"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/sign-in"
                    onClick={closeAll}
                    className="w-full bg-orange text-white py-3 rounded-xl text-center font-bold shadow-lg shadow-orange/20"
                  >
                    Sign In / Sign Up
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
