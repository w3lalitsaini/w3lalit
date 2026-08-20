import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "./SEO";

const faqs = [
  {
    question: "Do you provide hosting and domain?",
    answer:
      "Yes! I can help you purchase and set up hosting and domain for your project. Hosting and domain costs are separate from my service charges.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "I accept UPI, bank transfers, PayPal, and major credit/debit cards for Indian and international clients.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "All packages include 2-3 free revisions. Extra revisions will be charged based on complexity.",
  },
  {
    question: "Can you also maintain my website after launch?",
    answer:
      "Yes, I offer maintenance packages that include updates, backups, and security checks.",
  },
];

const FAQ = ({
  addSEO = false,
  title = "FAQs - W3 Lalit Saini",
  description = "Frequently Asked Questions about my web design, development, hosting, maintenance and payment options.",
  url = "https://w3lalitsaini.com/#faQ",
  image = "/avatar/1.jpg",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full px-4 md:px-6 py-20 bg-slate-950/20"
    >
      {/* SEO */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-cyan-400 font-bold uppercase text-xs md:text-sm tracking-widest">
          FAQs
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          Frequently Asked Questions
        </h3>
        <p className="text-slate-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Got questions? I’ve answered some of the most common ones below.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <div
              key={index}
              className="w-full bg-slate-900/30 rounded-2xl border border-slate-800/80 p-5 md:p-6 cursor-pointer hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] transition-all duration-300 backdrop-blur-md"
              onClick={() => toggleFAQ(index)}
              role="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && toggleFAQ(index)
              }
            >
              {/* Question */}
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-white text-base md:text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                  {faq.question}
                </h4>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown
                    className={`text-slate-400 ${isOpen ? "text-cyan-400" : ""}`}
                  />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={answerId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
