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
      <header className="fixed top-5 left-1/2 transform -translate-x-1/2 backdrop-blur-xl rounded-full px-6 py-3 max-w-5xl w-[92%] md:w-[90%] lg:w-full z-50 border border-slate-800 bg-slate-950/70 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] text-white">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tight">
            <Link to="/" onClick={closeAll} aria-label="W3 Lalit Home" className="flex items-center gap-1.5 group">
              <span className="text-white">W3</span>
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-cyan-300 duration-300">Lalit</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-cyan-400 font-medium duration-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-me")}
              className="hover:text-cyan-400 font-medium duration-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
            >
              Why me?
            </button>
            <Link
              to="/work"
              onClick={closeAll}
              className="hover:text-cyan-400 font-medium duration-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
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
                className="flex items-center gap-1.5 hover:text-cyan-400 font-medium duration-300 transition-colors"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Explore
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 right-0 bg-slate-950/95 border border-slate-800 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] w-64 overflow-hidden backdrop-blur-xl"
                  >
                    <Link
                      to="/service"
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-slate-900/60 transition-colors border-b border-slate-900"
                      onClick={closeAll}
                    >
                      <FaTools className="text-cyan-400 text-base mt-1" />
                      <div>
                        <p className="text-white font-semibold text-sm">Services</p>
                        <span className="text-slate-400 text-xs mt-0.5 block">
                          Explore the services I provide
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/pricing"
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-slate-900/60 transition-colors border-b border-slate-900"
                      onClick={closeAll}
                    >
                      <FaTags className="text-cyan-400 text-base mt-1" />
                      <div>
                        <p className="text-white font-semibold text-sm">Pricing</p>
                        <span className="text-slate-400 text-xs mt-0.5 block">
                          Packages & Pricing details
                        </span>
                      </div>
                    </Link>

                    <Link
                      to="/about"
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-slate-900/60 transition-colors"
                      onClick={closeAll}
                    >
                      <FaUser className="text-cyan-400 text-base mt-1" />
                      <div>
                        <p className="text-white font-semibold text-sm">About Me</p>
                        <span className="text-slate-400 text-xs mt-0.5 block">
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
              className="hover:text-cyan-400 font-medium duration-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
            >
              Contact
            </Link>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center gap-4 border-l border-slate-800 pl-6 ml-2">
                <span className="text-sm font-medium text-slate-400 hidden lg:inline">
                  Hi,{" "}
                  <span className="text-white font-semibold">{user.name.split(" ")[0]}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/10"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/sign-in"
                onClick={closeAll}
                className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.35)]"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-xl p-2 hover:bg-slate-900 rounded-full transition-colors border border-transparent hover:border-slate-800"
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
              className="md:hidden absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-full bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col gap-6 items-center overflow-hidden"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-me")}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                Why me?
              </button>
              <Link
                to="/service"
                onClick={closeAll}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                onClick={closeAll}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={closeAll}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/work"
                onClick={closeAll}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                Work
              </Link>
              <Link
                to="/contact"
                onClick={closeAll}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>

              <div className="w-full border-t border-slate-800/80 pt-6 flex flex-col items-center gap-4">
                {user ? (
                  <>
                    <p className="text-slate-400 text-sm">
                      Logged in as{" "}
                      <span className="text-white font-semibold">{user.name}</span>
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-transparent border border-cyan-500/30 text-cyan-400 py-3 rounded-xl font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/sign-in"
                    onClick={closeAll}
                    className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-3 rounded-xl text-center font-bold shadow-lg shadow-indigo-500/20"
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
