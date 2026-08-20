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
    <main className="bg-dark bg-dots min-h-screen pb-20">
      {/* SEO */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Hero Section */}
      <motion.section
        className="pt-36 text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Choose the <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Perfect Plan</span> for Your Project
        </h1>
        <p className="text-slate-400 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Transparent pricing with premium quality. Pay once, get lifetime
          value.
        </p>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto my-20"
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
              scale: 1.03,
              boxShadow: plan.highlight ? "0px 0px 40px rgba(6,182,212,0.2)" : "0px 0px 30px rgba(99,102,241,0.15)",
            }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-3xl border p-8 text-left transition-all duration-300 backdrop-blur-md flex flex-col justify-between h-full ${plan.highlight
              ? "border-cyan-500/50 bg-slate-950/70"
              : "border-slate-800/80 bg-slate-950/40"
              }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-md">
                Popular
              </span>
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {plan.title}
              </h2>
              <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-2">{plan.price}</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4 border-t border-slate-900 pt-6">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-slate-300 text-sm md:text-base font-medium"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GoCheck className="text-cyan-400 text-lg font-bold" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <NavLink to="/contact" className="block">
                <Button
                  title="Get Started"
                  variant={plan.highlight ? "solid" : "outline"}
                  className="w-full font-bold"
                  aria-label={`Get started with ${plan.title} plan`}
                />
              </NavLink>
            </div>

          </motion.div>
        ))}
      </motion.section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-12">
          Pricing FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-md rounded-2xl border border-slate-800/80 p-5 bg-slate-950/20"
            >
              <button
                className="flex justify-between items-center w-full text-left text-white font-semibold focus:outline-none gap-4"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                {faq.question}
                <span className="text-cyan-400 text-xl font-bold">
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
                    className="mt-4 text-slate-400 text-left text-sm md:text-base leading-relaxed border-t border-slate-800/60 pt-4"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center mt-20 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white max-w-2xl relative z-10">
            Not sure which plan is right for you? <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Let's discuss your project!</span>
          </h2>
          <p className="text-slate-400 mt-4 mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed relative z-10">
            Tell me about your requirements and I will help you choose the best
            plan for your business.
          </p>
          <div className="flex justify-center relative z-10">
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
