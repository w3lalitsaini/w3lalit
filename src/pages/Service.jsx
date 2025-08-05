import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaTools } from "react-icons/fa";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO"; // Reusable SEO Component

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites built with React, Next.js & Tailwind CSS. Fast, secure, and scalable for your business.",
    icon: <FaLaptopCode className="text-orange text-4xl" />,
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with smooth UI/UX. Using React Native and modern APIs.",
    icon: <FaMobileAlt className="text-orange text-4xl" />,
  },
  {
    id: "cloud-hosting",
    title: "Cloud & Hosting Setup",
    description:
      "AWS, Vercel, Netlify, or custom hosting solutions with automated backups and security.",
    icon: <FaCloud className="text-orange text-4xl" />,
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing support, updates, bug fixes, and performance monitoring for all your projects.",
    icon: <FaTools className="text-orange text-4xl" />,
  },
];

const ServicePage = ({
  addSEO = true,
  title = "Services - W3 Lalit Saini",
  description = "Explore premium services including web development, mobile app development, cloud hosting setup, and ongoing maintenance for scalable and high-performing solutions.",
  url = "https://w3lalitsaini.com/services",
  image = "/og-ab.jpg",
}) => {
  return (
    <main className="pt-28 bg-dark bg-dots">
      {/* SEO */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Hero Section */}
      <motion.section
        className="text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Services <span className="text-orange">I Offer</span>
        </h1>
        <p className="text-grayMid mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I help businesses build fast, scalable, and premium digital products.
          From idea to deployment, I deliver results-driven solutions.
        </p>
      </motion.section>

      {/* Service Cards */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto my-16"
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
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(255,107,53,0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/services/${service.id}`} aria-label={service.title}>
              <div
                className="bg-dark/50 border border-grayMid/30 rounded-lg p-6 text-center
                     hover:border-orange transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="text-grayMid text-sm md:text-base mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* Why Choose Me Section */}
      <motion.section
        className="bg-dark/80 py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Why Choose Me?
        </h2>
        <p className="text-grayMid max-w-2xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
          I focus on delivering high-quality solutions tailored to your needs.
          Every project gets personalized attention, ensuring premium design,
          performance, and scalability.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {[
            { title: "10+ Projects", text: "Completed successfully" },
            {
              title: "Fast Delivery",
              text: "Most projects delivered ahead of schedule",
            },
            { title: "100% Support", text: "Always available for you" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-dark border border-grayMid/40 rounded-xl p-6 max-w-xs"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-orange text-lg font-semibold">
                {stat.title}
              </h3>
              <p className="text-grayMid text-sm mt-1">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ addSEO={false} />

      {/* CTA Section */}
      <motion.section
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Got questions? <span className="text-orange">Let's talk!</span>
        </h2>
        <p className="text-grayMid mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Need a custom service or want to know more about the process? I’d be
          happy to discuss your project in detail.
        </p>

        <div className="mt-6 flex justify-center">
          <NavLink to="/contact">
            <Button
              title="Contact Me"
              variant="solid"
            />
          </NavLink>
        </div>

      </motion.section>
    </main>
  );
};

export default ServicePage;
