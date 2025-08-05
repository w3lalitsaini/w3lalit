import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaUserTie,
  FaMapMarkerAlt,
  FaHandshake,
  FaUsers,
  FaAward,
  FaBriefcase,
} from "react-icons/fa";
import Button from "../components/Button";
import SEO from "../components/SEO"; 

const About = ({
  addSEO = true,
  title = "About Lalit Saini - Web Developer & Founder of W3Lalitsaini",
  description = "Learn more about Web Developer Lalit Saini, founder of W3Lalitsaini. Specializing in React, Next.js, Node.js, and modern web solutions for businesses and startups.",
  url = "https://w3lalitsaini.com/about",
  image = "/pro-img/portfoli2.png",
}) => {
  return (
    <main className="bg-dark bg-dots">
      {/* SEO */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-28 text-center px-6 max-w-5xl mx-auto text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Web Developer <span className="text-orange">Lalit Saini</span>
        </h1>
        <p className="text-grayMid mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          I'm <strong>Lalit Saini</strong>, the founder of{" "}
          <strong>W3Lalitsaini</strong>, a personal brand dedicated to delivering
          premium full-stack web solutions. From startups to enterprises, I
          create scalable, SEO-optimized, and user-focused digital products.
        </p>
      </motion.section>

      {/* Profile & Bio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto mt-16 items-center text-white">
        <motion.img
          src="/avatar/32.jpg"
          alt="Web Developer Lalit Saini - W3Lalitsaini"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Hi, I'm <span className="text-orange">Lalit Saini</span>
          </h2>
          <p className="text-grayMid leading-relaxed mb-4">
            As a self-taught <strong>web developer</strong>, I've built{" "}
            <strong>W3Lalitsaini</strong> into a trusted brand for high-quality
            websites, apps, and digital products. My stack includes React,
            Next.js, Node.js, MongoDB, Tailwind CSS, and API integrations.
          </p>
          <p className="text-grayMid leading-relaxed">
            I help businesses grow online with SEO-focused solutions that rank
            locally and globally. My mission is to create long-lasting digital
            experiences that elevate brands.
          </p>
        </motion.div>
      </section>

      {/* Personal Brand Mission */}
      <section className="bg-dark/80 py-16 mt-20 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          My Mission with <span className="text-orange">W3Lalitsaini</span>
        </h2>
        <p className="text-grayMid max-w-4xl mx-auto leading-relaxed">
          W3Lalitsaini isn't just a portfolio, it's a vision. My goal is to
          become a top-rated <strong>web developer in India</strong> and
          worldwide by helping businesses achieve their digital goals with
          cutting-edge technology, creative design, and SEO-driven strategies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-dark py-16 px-6 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            My <span className="text-orange">Skills</span>
          </h2>
          <p className="text-grayMid mt-3 text-sm md:text-base">
            Combining technical expertise and design thinking to deliver
            top-tier web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaCode className="text-orange text-4xl mb-4" />,
              title: "Frontend Development",
              text: "React.js, Next.js, Tailwind CSS, Framer Motion, responsive design.",
            },
            {
              icon: <FaLaptopCode className="text-orange text-4xl mb-4" />,
              title: "Backend Development",
              text: "Node.js, Express.js, MongoDB, REST APIs, authentication, and security.",
            },
            {
              icon: <FaRocket className="text-orange text-4xl mb-4" />,
              title: "SEO & Branding",
              text: "SEO optimization, personal branding, keyword-rich strategies.",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-dark border border-grayMid/40 rounded-xl p-6 text-center"
            >
              {skill.icon}
              <h4 className="text-xl font-semibold">{skill.title}</h4>
              <p className="text-grayMid mt-2 text-sm leading-relaxed">
                {skill.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Local Network Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            My <span className="text-orange">Local Network</span>
          </h2>
          <p className="text-grayMid mt-3 text-sm md:text-base">
            As <strong>Web Developer Lalit Saini</strong>, I collaborate with
            local businesses, startups, and entrepreneurs to build strong
            relationships and lasting impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaMapMarkerAlt className="text-orange text-3xl mb-3" />,
              title: "Local Presence",
              text: "Based in India and available for meetups, networking, and collaborations.",
            },
            {
              icon: <FaUsers className="text-orange text-3xl mb-3" />,
              title: "Community Focused",
              text: "Working closely with entrepreneurs and professionals in the region.",
            },
            {
              icon: <FaHandshake className="text-orange text-3xl mb-3" />,
              title: "Partnerships",
              text: "Helping local businesses grow with tech-powered solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
              className="bg-dark border border-grayMid/40 rounded-xl p-8"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-grayMid mt-2 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-dark/80 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Experience & <span className="text-orange">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaAward className="text-orange text-4xl mb-4" />,
              title: "15+ Projects Completed",
              text: "Successfully delivered web and mobile solutions for various industries.",
            },
            {
              icon: <FaBriefcase className="text-orange text-4xl mb-4" />,
              title: "5+ Happy Clients",
              text: "Building lasting relationships with businesses worldwide.",
            },
            {
              icon: <FaUserTie className="text-orange text-4xl mb-4" />,
              title: "2+ Years Experience",
              text: "Constantly improving and adapting to the latest web technologies.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-dark border border-grayMid/40 rounded-xl p-6"
            >
              {item.icon}
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-grayMid mt-2 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-dark/90 text-white flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Want to work with{" "}
          <span className="text-orange">Web Developer Lalit Saini?</span>
        </h2>
        <p className="text-grayMid mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Let’s build something amazing! Whether it's a full-stack app, SaaS
          platform, or SEO-optimized business website,{" "}
          <strong>W3Lalitsaini</strong> is here to help you grow.
        </p>
        <div className="mt-6">
          <NavLink to="/contact">
            <Button
              title="Start a Project"
              variant="solid"
              aria-label="Navigate to contact page to start a project"
            />
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default About;
