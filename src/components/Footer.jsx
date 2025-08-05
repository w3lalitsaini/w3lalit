import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dots bg-dark text-grayLight pb-6 backdrop-blur-[1px]">
      <div className="border-t border-grayMid/30 text-center pb-12 text-sm text-grayMid">
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8">
        {/* Brand & Intro */}
        <div>
          <h2 className="text-white text-2xl font-extrabold tracking-tight">
            W3<span className="text-orange">Lalit</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xs text-grayMid">
            Helping individuals and businesses build standout websites, SaaS platforms, and stunning portfolios with modern UI/UX.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-grayMid">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/work" className="hover:text-white transition">Work</Link></li>
            <li><Link to="/service" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-grayMid">
            <li><Link to="/about" className="hover:text-white transition">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms&conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Connect with Me</h3>
          <div className="flex space-x-4 text-xl text-grayMid mb-4">
            <a href="https://facebook.com/w3lalitsaini" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition"><FaFacebook /></a>
            <a href="https://instagram.com/w3lalitsaini" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition"><FaInstagram /></a>
            <a href="https://linkedin.com/in/w3lalitsaini" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition"><FaLinkedin /></a>
            <a href="https://github.com/w3lalitsaini" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition"><FaGithub /></a>
          </div>
          <p className="text-sm text-white">
            Email:{" "}
            <a href="mailto:Sainilalit2751@example.com" className="text-white hover:underline">
              Sainilalit2751@example.com
            </a>
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto mt-12 text-center px-6">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
        <p className="text-sm text-grayMid mb-5">
          Get the latest updates on new templates, SaaS tools, and portfolio features.
        </p>
        <form
          action="https://formspree.io/f/mnnzblkd"
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-grayMid rounded-md text-white placeholder:text-white"
          />
          <button
            type="submit"
            className="bg-orange px-6 py-2 rounded-md font-medium text-white hover:bg-orange-dark transition"
          >
            Subscribe
          </button>
        </form>

      </div>

      {/* Bottom */}
      <div className="border-t border-grayMid/30 mt-10 pt-4 w-3/4 mx-auto text-center text-sm text-grayMid">
        © {new Date().getFullYear()} W3 Lalit — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
