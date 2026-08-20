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
    <main className="pt-36 bg-dark bg-dots">
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
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Services <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">I Offer</span>
        </h1>
        <p className="text-slate-400 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I help businesses build fast, scalable, and premium digital products.
          From idea to deployment, I deliver results-driven solutions.
        </p>
      </motion.section>

      {/* Service Cards */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto my-20"
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
              scale: 1.02,
              boxShadow: "0px 0px 30px rgba(6,182,212,0.15)",
            }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden"
          >
            <Link to={`/services/${service.id}`} aria-label={service.title}>
              <div
                className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-8 text-center
                     hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md h-full flex flex-col items-center"
              >
                <div className="mb-6 p-4 bg-slate-900 rounded-2xl border border-slate-800 text-cyan-400 flex items-center justify-center">
                  {React.cloneElement(service.icon, { className: "text-cyan-400 text-4xl" })}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-slate-400 text-sm md:text-base mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* Why Choose Me Section */}
      <motion.section
        className="bg-slate-950/20 py-20 px-6 text-center border-t border-b border-slate-900 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Why Choose Me?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          I focus on delivering high-quality solutions tailored to your needs.
          Every project gets personalized attention, ensuring premium design,
          performance, and scalability.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mt-12 relative z-10">
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
              className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 max-w-xs flex-1 min-w-[240px]"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-cyan-400 text-lg font-bold">
                {stat.title}
              </h3>
              <p className="text-slate-400 text-sm mt-2">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ addSEO={false} />

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 max-w-5xl mx-auto text-center relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold max-w-2xl relative z-10 text-white">
            Got questions? <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Let's talk!</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed relative z-10">
            Need a custom service or want to know more about the process? I’d be
            happy to discuss your project in detail.
          </p>

          <div className="mt-8 relative z-10">
            <NavLink to="/contact">
              <Button
                title="Contact Me"
                variant="solid"
              />
            </NavLink>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ServicePage;
