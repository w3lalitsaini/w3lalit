import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaTools } from "react-icons/fa";
import SEO from "../components/SEO"; // Reusable SEO component

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites built using React, Next.js, and Tailwind CSS with clean code, fast load times, and SEO optimization. Ideal for startups and businesses looking for premium quality.",
    image: "/service/web.jpg",
    icon: <FaLaptopCode className="text-orange text-4xl" />,
    features: [
      "Fully responsive & mobile-friendly",
      "SEO-optimized pages for better ranking",
      "Performance-focused with lightning-fast load times",
      "Integration with APIs and third-party tools",
      "CMS options like WordPress or Headless CMS",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with smooth UI/UX using React Native and modern APIs. Scalable and performance-oriented for Android and iOS.",
    image: "/service/mobile.jpg",
    icon: <FaMobileAlt className="text-orange text-4xl" />,
    features: [
      "One codebase for both Android & iOS",
      "Offline support & push notifications",
      "Payment gateway integration",
      "High-performance, scalable architecture",
      "App store publishing support",
    ],
  },
  {
    id: "cloud-hosting",
    title: "Cloud & Hosting Setup",
    description:
      "Secure and scalable cloud hosting solutions on AWS, Vercel, Netlify, or custom servers with automated backups and SSL security.",
    image: "/service/hosting.jpg",
    icon: <FaCloud className="text-orange text-4xl" />,
    features: [
      "Setup on AWS, Vercel, Netlify, or DigitalOcean",
      "Custom domain integration with SSL certificates",
      "Automated backups & disaster recovery",
      "Advanced security configurations & monitoring",
      "CI/CD pipelines for automated deployments",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Comprehensive maintenance plans that keep your website or app up-to-date, secure, and running at peak performance.",
    image: "/service/maintanence.jpg",
    icon: <FaTools className="text-orange text-4xl" />,
    features: [
      "Regular updates & bug fixes",
      "24/7 uptime monitoring & security checks",
      "Database optimization & backup management",
      "Content updates & feature enhancements",
      "Priority support for urgent issues",
    ],
  },
];

const ServiceDetail = ({
  addSEO = true,
  urlBase = "https://w3lalitsaini.com/services",
}) => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center mt-36 text-white min-h-[50vh] flex flex-col items-center justify-center">
        <p className="text-xl font-semibold mb-4">Service not found.</p>
        <Link
          to="/service"
          className="text-cyan-400 underline hover:text-cyan-300 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full px-6 pt-36 pb-20 bg-dark bg-dots min-h-screen"
    >
      {/* SEO */}
      {addSEO && (
        <SEO
          title={`${service.title} - W3 Lalit Saini`}
          description={service.description}
          url={`${urlBase}/${service.id}`}
          image={service.image}
        />
      )}

      {/* Breadcrumb */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        aria-label="Breadcrumb"
        className="text-slate-400 text-sm mb-8 max-w-4xl mx-auto"
      >
        <Link to="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/service" className="hover:text-cyan-400 transition-colors">
          Services
        </Link>{" "}
        / <span className="text-cyan-400 font-semibold">{service.title}</span>
      </motion.nav>

      {/* Title and Description */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          {service.title}
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          {service.description}
        </p>
      </motion.header>

      {/* Image */}
      <div className="max-w-4xl mx-auto mb-16">
        <motion.img
          src={service.image}
          alt={service.title}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-3xl shadow-2xl border border-slate-800/80 max-h-[450px] object-cover"
        />
      </div>

      {/* Features */}
      <div className="max-w-3xl mx-auto bg-slate-950/40 border border-slate-800/80 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-900 pb-4">Key Features Included:</h3>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-4 text-slate-300 text-sm md:text-base"
        >
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { x: -15, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="flex items-start gap-3"
            >
              <span className="text-cyan-400 text-lg font-bold mt-0.5">✓</span>
              <span className="leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full font-bold text-white hover:from-indigo-400 hover:to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Start a Project
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default ServiceDetail;
