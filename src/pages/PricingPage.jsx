import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoCheck } from "react-icons/go";
import Button from "../components/Button";
import SEO from "../components/SEO"; // Reusable SEO Component
import { NavLink } from "react-router-dom";


const plans = [
  {
    title: "Starter",
    price: "9,999 INR",
    description: "Perfect for personal websites or small businesses.",
    features: [
      "1-3 Pages Website",
      "Responsive Design",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    highlight: false,
  },
  {
    title: "Professional",
    price: "17,999 INR",
    description: "Great for growing businesses and startups.",
    features: [
      "Up to 8 Pages",
      "Responsive + Custom UI",
      "Advanced SEO",
      "3 Months Support",
      "Contact Form Integration",
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "Custom",
    description: "For larger projects with complex functionality.",
    features: [
      "Unlimited Pages",
      "Fully Custom Design",
      "API/Backend Integration",
      "6 Months Support",
      "E-commerce or SaaS Ready",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "I accept UPI, Bank Transfer, PayPal, and major credit/debit cards.",
  },
  {
    question: "Are revisions included?",
    answer:
      "Yes! Each package includes up to 2-3 free revisions. Additional revisions are chargeable.",
  },
  {
    question: "Does the price include hosting and domain?",
    answer:
      "No, domain and hosting are separate. But I can help you set it up or manage it at an additional cost.",
  },
];

const PricingPage = ({
  addSEO = true,
  title = "Pricing Plans - W3 Lalit Saini",
  description = "Choose from Starter, Professional, and Premium pricing plans for custom websites, mobile apps, or SaaS projects. Transparent costs with SEO, performance, and ongoing support.",
  url = "https://w3lalitsaini.com/pricing",
  image = "/og-ab.jpg",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className="bg-dark bg-dots">
      {/* SEO */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Hero Section */}
      <motion.section
        className="pt-28 text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Choose the <span className="text-orange">Perfect Plan</span> for Your
          Project
        </h1>
        <p className="text-grayMid mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Transparent pricing with premium quality. Pay once, get lifetime
          value.
        </p>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto my-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(255,107,53,0.4)",
            }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-xl border p-8 text-left transition-all duration-300 ${plan.highlight
              ? "border-orange bg-dark/80"
              : "border-grayMid/30 bg-dark/50"
              }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              {plan.title}
            </h2>
            <p className="text-3xl font-bold text-orange mt-2">{plan.price}</p>
            <p className="text-grayMid text-sm mt-1 leading-relaxed">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-grayLight text-sm md:text-base"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GoCheck className="text-orange text-lg" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8">
              <NavLink to="/contact" className="block">
                <Button
                  title="Get Started"
                  variant={plan.highlight ? "solid" : "outline"}
                  className="w-full"
                  aria-label={`Get started with ${plan.title} plan`}
                />
              </NavLink>
            </div>

          </motion.div>
        ))}
      </motion.section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-[1px] rounded-lg border border-grayMid/30 p-4"
            >
              <button
                className="flex justify-between items-center w-full text-left text-white font-medium focus:outline-none"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                {faq.question}
                <span className="text-orange text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    id={`faq-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-grayMid text-left text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col bg-gradient-to-r from-dark to-dark/90 py-12 px-4 text-center mt-16 rounded-lg">
          <h2 className="text-xl md:text-3xl font-bold text-white">
            Not sure which plan is right for you?{" "}
            <span className="text-orange">Let's discuss your project!</span>
          </h2>
          <p className="text-grayMid mt-3 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Tell me about your requirements and I will help you choose the best
            plan for your business.
          </p>
          <div className="flex justify-center">
            <NavLink to="/contact">
              <Button
                title="Let's Talk"
                variant="solid"
                aria-label="Contact to discuss pricing plans"
              />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
