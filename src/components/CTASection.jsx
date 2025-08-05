import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button"; // Your reusable button

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    emailjs
      .send(
        "service_h9dk23n", // Your Service ID
        "template_f0zoczl", // Your Template ID
        formData,
        "XlJ4bIw7Fe9TE_q4s" // Your Public Key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "✅ Your message has been sent successfully!",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            niche: "",
            budget: "",
            message: "",
          });
        },
        () => {
          setStatus({
            type: "error",
            message: "❌ Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section className="bg-gradient-to-br from-dark via-dark/95 to-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-dark/80 rounded-3xl p-10 shadow-[0_0_35px_rgba(255,107,53,0.2)] border border-grayMid/20 backdrop-blur-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let's <span className="text-orange">Work Together</span>
          </h2>
          <p className="text-grayMid mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Share your project idea with <span className="text-white font-semibold">Lalit Saini</span> and I’ll help you build something amazing.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 rounded-lg bg-grayDark text-white placeholder-transparent border border-grayMid/30 focus:border-orange outline-none"
              />
              <label className="absolute left-4 top-3 text-grayMid text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-grayMid peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-orange">
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 rounded-lg bg-grayDark text-white placeholder-transparent border border-grayMid/30 focus:border-orange outline-none"
              />
              <label className="absolute left-4 top-3 text-grayMid text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-grayMid peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-orange">
                Email
              </label>
            </div>
          </div>

          {/* Phone & Niche */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full px-4 py-3 rounded-lg bg-grayDark text-white placeholder-transparent border border-grayMid/30 focus:border-orange outline-none"
              />
              <label className="absolute left-4 top-3 text-grayMid text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-grayMid peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-orange">
                Phone Number
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="niche"
                placeholder="Website Niche"
                value={formData.niche}
                onChange={handleChange}
                className="peer w-full px-4 py-3 rounded-lg bg-grayDark text-white placeholder-transparent border border-grayMid/30 focus:border-orange outline-none"
              />
              <label className="absolute left-4 top-3 text-grayMid text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-grayMid peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-orange">
                Website Niche
              </label>
            </div>
          </div>

          {/* Budget */}
          <div className="relative">
            <input
              type="text"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
              className="peer w-full px-4 py-3 rounded-lg bg-grayDark text-white placeholder-transparent border border-grayMid/30 focus:border-orange outline-none"
            />
            <label className="absolute left-4 top-3 text-grayMid text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-grayMid peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-orange">
              Budget
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 rounded-lg bg-grayDark text-white placeholder-transparent border border-grayMid/30 focus:border-orange outline-none"
            ></textarea>
            <label className="absolute left-4 top-3 text-grayMid text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-grayMid peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-orange">
              Message
            </label>
          </div>

          {/* Status */}
          {status.message && (
            <p
              className={`text-center text-sm ${
                status.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}

          {/* Button */}
          <div className="flex justify-center">
            <Button
              title="Send Message"
              variant="solid"
              className="px-12 py-3 text-lg shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.7)] transition-all"
              type="submit"
            />
          </div>
        </form>

        {/* Direct Email */}
        <p className="text-grayMid text-xs text-center mt-6">
          Prefer direct email?{" "}
          <a
            href="mailto:Sainilalit2751@gmail.com"
            className="text-orange font-semibold hover:underline"
          >
            Sainilalit2751@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
