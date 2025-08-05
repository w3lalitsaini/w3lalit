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
      <div className="text-center mt-20 text-white">
        <p className="text-lg">Service not found.</p>
        <Link
          to="/service"
          className="text-orange underline hover:text-orange/80 transition"
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
      className="w-full px-6 pt-28 pb-16 bg-dark bg-dots min-h-screen"
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
        className="text-grayMid text-sm mb-6"
      >
        <Link to="/" className="hover:text-orange">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/service" className="hover:text-orange">
          Services
        </Link>{" "}
        / <span className="text-orange">{service.title}</span>
      </motion.nav>

      {/* Title and Description */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {service.title}
        </h1>
        <p className="text-grayMid mt-3 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          {service.description}
        </p>
      </motion.header>

      {/* Image */}
      <motion.img
        src={service.image}
        alt={service.title}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full rounded-lg shadow-xl mb-10 border border-grayMid/20 max-h-[400px] object-cover"
      />

      {/* Features */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="space-y-4 text-grayMid text-base md:text-lg max-w-3xl mx-auto"
      >
        {service.features.map((feature, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { x: -20, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="flex items-center gap-3"
          >
            <span className="text-orange text-xl">✔</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-orange text-white rounded-lg hover:bg-orange/80 transition text-base md:text-lg font-medium"
        >
          Start a Project
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default ServiceDetail;
