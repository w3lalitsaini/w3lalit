import React, { useState, useRef } from "react";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = ({
  addSEO = true,
  title = "Contact Web Developer Lalit Saini - W3Lalitsaini",
  description = "Get in touch with Web Developer Lalit Saini (W3Lalitsaini) for web development, app development, or collaborations. Reach out via email, phone, or the contact form.",
  url = "https://w3lalitsaini.com/contact",
  image = "/og-ab.jpg",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Backend integration
      const response = await axios.post(
        "http://localhost:3000/contact/submit",
        formData,
      );

      // EmailJS integration (keeping it as backup)
      emailjs
        .send(
          "service_h9dk23n",
          "template_j3ywnz9",
          formData,
          "XlJ4bIw7Fe9TE_q4s",
        )
        .then(
          () => console.log("EmailJS Success"),
          (error) => console.log("EmailJS Failed...", error.text),
        );

      setStatus({ type: "success", message: response.data.message });
      setFormData({ name: "", email: "", phone: "", niche: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-dark bg-dots min-h-screen pt-36">
      {/* SEO with structured data */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Lalit Saini",
                alternateName: "W3Lalitsaini",
                jobTitle: "Web Developer",
                url: "https://w3lalitsaini.com",
                image: "https://w3lalitsaini.com/pro-img/profile.jpg",
                email: "mailto:Sainilalit2751@email.com",
                telephone: "+91-9887374746",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Sikar",
                  addressRegion: "Rajasthan",
                  addressCountry: "IN",
                },
                sameAs: [
                  "https://www.facebook.com/w3lalitsaini",
                  "https://www.instagram.com/w3lalitsaini",
                  "https://www.linkedin.com/in/w3lalitsaini",
                ],
              }),
            }}
          />
        </SEO>
      )}

      {/* Heading */}
      <motion.section
        className="text-center px-6 max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Get in <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-slate-400 mt-4 text-base md:text-lg leading-relaxed">
          Have a project in mind or just want to connect? Contact{" "}
          <strong>Web Developer Lalit Saini</strong> at{" "}
          <strong>W3Lalitsaini</strong> using the form below or through email,
          phone, or social media.
        </p>
      </motion.section>

      {/* Main Layout */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pb-20">
        {/* Contact Info */}
        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <a
                  href="mailto:Sainilalit2751@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sainilalit2751@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <a
                  href="tel:+91 9887374746"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 9887374746
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                Sikar, Rajasthan, India
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-cyan-400" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/w3lalitsaini"
                aria-label="Facebook - Lalit Saini"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/w3lalitsaini"
                aria-label="Instagram - Lalit Saini"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/w3lalitsaini"
                aria-label="LinkedIn - Lalit Saini"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden border border-slate-800/80 shadow-lg">
            <iframe
              title="Lalit Saini Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43677.952703336!2d75.10160638146779!3d27.609537676069227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4b82334472b%3A0x7f485cce3a6bf355!2sSikar%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1754286197645!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-4 bg-slate-950/40 p-8 rounded-3xl border border-slate-800/80 backdrop-blur-md shadow-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white border border-slate-800/80 focus:border-cyan-400 outline-none transition duration-300 focus:ring-1 focus:ring-cyan-400/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white border border-slate-800/80 focus:border-cyan-400 outline-none transition duration-300 focus:ring-1 focus:ring-cyan-400/30"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white border border-slate-800/80 focus:border-cyan-400 outline-none transition duration-300 focus:ring-1 focus:ring-cyan-400/30"
          />
          <input
            type="text"
            name="niche"
            placeholder="Your Niche (Business/Project Type)"
            required
            value={formData.niche}
            onChange={(e) =>
              setFormData({ ...formData, niche: e.target.value })
            }
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white border border-slate-800/80 focus:border-cyan-400 outline-none transition duration-300 focus:ring-1 focus:ring-cyan-400/30"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white border border-slate-800/80 focus:border-cyan-400 outline-none transition duration-300 focus:ring-1 focus:ring-cyan-400/30"
          ></textarea>

          {status.message && (
            <p
              className={`text-sm font-semibold ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}

          <Button
            title={loading ? "Sending..." : "Send Message"}
            variant="solid"
            type="submit"
            disabled={loading}
            className="w-full font-bold mt-4"
          />
        </form>
      </section>

      {/* CTA */}
      <motion.section
        className="text-center px-6 pb-20 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center shadow-2xl relative overflow-hidden backdrop-blur-md max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold relative z-10">
            Prefer a direct conversation?
          </h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed relative z-10 max-w-2xl">
            Call me on <strong className="text-white">+91 9887374746</strong> or email{" "}
            <strong className="text-white">Sainilalit2751@gmail.com</strong> and I’ll get back within 24
            hours.
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
