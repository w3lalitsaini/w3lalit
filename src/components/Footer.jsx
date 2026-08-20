import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://localhost:3000/newsletter/subscribe",
        { email },
      );
      setStatus({ type: "success", message: response.data.message });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to subscribe. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-dots bg-slate-950 text-slate-300 pb-6 border-t border-slate-900">
      <div className="text-center pb-12 text-sm text-slate-500"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8">
        {/* Brand & Intro */}
        <div>
          <h2 className="text-white text-2xl font-extrabold tracking-tight">
            W3<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Lalit</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xs text-slate-400">
            Helping individuals and businesses build standout websites, SaaS
            platforms, and stunning portfolios with modern UI/UX.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-white transition">
                Work
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms&conditions"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Connect with Me
          </h3>
          <div className="flex space-x-4 text-xl text-slate-400 mb-4">
            <a
              href="https://facebook.com/w3lalitsaini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/w3lalitsaini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/w3lalitsaini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/w3lalitsaini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-slate-400">
            Email:{" "}
            <a
              href="mailto:Sainilalit2751@gmail.com"
              className="text-white hover:underline"
            >
              Sainilalit2751@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto mt-12 text-center px-6">
        <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Join the Inner Circle
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          Get exclusive web design tips, SaaS tool updates, and my latest
          project insights delivered to your inbox.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your best email address"
            className="w-full px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-400/30"
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 rounded-xl font-bold text-white hover:from-indigo-400 hover:to-cyan-400 transition shadow-[0_0_15px_rgba(99,102,241,0.25)] whitespace-nowrap duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Joining..." : "Subscribe Now"}
          </button>
        </form>
        {status.message && (
          <p
            className={`mt-3 text-xs font-semibold ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
          >
            {status.message}
          </p>
        )}
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-900 mt-10 pt-4 w-3/4 mx-auto text-center text-sm text-slate-500">
        © {new Date().getFullYear()} W3 Lalit — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
