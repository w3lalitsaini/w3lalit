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
  addSEO = true,
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
      className="w-full px-4 md:px-6 py-16 backdrop-blur-[1px]"
    >
      {/* SEO */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-orange uppercase text-xs md:text-sm tracking-widest">
          FAQs
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white mt-2">
          Frequently Asked Questions
        </h3>
        <p className="text-grayMid mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Got questions? I’ve answered some of the most common ones below.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <div
              key={index}
              className="w-full bg-dark/60 rounded-lg border border-grayMid/40 p-5 md:p-6 cursor-pointer hover:border-orange transition-colors duration-300"
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
              <div className="flex items-center justify-between">
                <h4 className="text-white text-base md:text-lg font-medium">
                  {faq.question}
                </h4>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown
                    className={`text-grayMid ${
                      isOpen ? "text-orange" : ""
                    }`}
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
                    <p className="text-grayMid mt-3 text-sm md:text-base leading-relaxed">
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
