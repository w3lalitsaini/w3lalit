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
    <main className="bg-dark min-h-screen pt-28">
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
        className="text-center px-6 max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get in <span className="text-orange">Touch</span>
        </h1>
        <p className="text-grayMid mt-4 text-base md:text-lg leading-relaxed">
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
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <div className="space-y-3 text-grayMid">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-orange" />
                <a
                  href="mailto:Sainilalit2751@email.com"
                  className="hover:text-orange transition"
                >
                  Sainilalit2751@email.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange" />
                <a
                  href="tel:+91 9887374746"
                  className="hover:text-orange transition"
                >
                  +91 9887374746
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange" />
                Sikar, Rajasthan, India
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-orange" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/w3lalitsaini"
                aria-label="Facebook - Lalit Saini"
                className="w-10 h-10 rounded-full bg-grayDark flex items-center justify-center text-grayMid hover:text-orange hover:bg-grayMid/20 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/w3lalitsaini"
                aria-label="Instagram - Lalit Saini"
                className="w-10 h-10 rounded-full bg-grayDark flex items-center justify-center text-grayMid hover:text-orange hover:bg-grayMid/20 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/w3lalitsaini"
                aria-label="LinkedIn - Lalit Saini"
                className="w-10 h-10 rounded-full bg-grayDark flex items-center justify-center text-grayMid hover:text-orange hover:bg-grayMid/20 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden border border-grayMid/30">
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
          className="space-y-4 bg-dark/60 p-6 rounded-lg border border-grayMid/30"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md bg-grayDark text-white border border-grayMid/30 focus:border-orange outline-none"
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
            className="w-full px-4 py-3 rounded-md bg-grayDark text-white border border-grayMid/30 focus:border-orange outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded-md bg-grayDark text-white border border-grayMid/30 focus:border-orange outline-none"
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
            className="w-full px-4 py-3 rounded-md bg-grayDark text-white border border-grayMid/30 focus:border-orange outline-none"
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
            className="w-full px-4 py-3 rounded-md bg-grayDark text-white border border-grayMid/30 focus:border-orange outline-none"
          ></textarea>

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-green-500" : "text-red-500"
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
            className="w-full"
          />
        </form>
      </section>

      {/* CTA */}
      <motion.section
        className="text-center px-6 pb-16 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Prefer a direct conversation?
        </h2>
        <p className="text-grayMid mt-3 text-sm md:text-base">
          Call me on <strong>+91 9887374746</strong> or email{" "}
          <strong>Sainilalit2751@email.com</strong> and I’ll get back within 24
          hours.
        </p>
      </motion.section>
    </main>
  );
};

export default Contact;
