import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import InfinityScrollBar from "../components/InfinityScrollBar";
import InfinityScrollBar2 from "../components/InfinityScrollBar2";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialScroll from "../components/Testimonial";
import Services from "../components/Services";
import ProjectStats from "../components/ProjectStats";
import FAQ from "../components/FAQ";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <SEO
        title="W3 Lalit | High-Converting Websites & Web Development Services"
        description="W3 Lalit builds fast, SEO-optimized, and high-converting websites using React, Next.js & Tailwind CSS. Based in Sikar, Rajasthan, India."
        keywords="web development, React,web-development in sikar, shekhawati website, Next.js, Tailwind CSS, SEO, Sikar, Rajasthan, India, UI/UX design, full-stack developer"
      />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-dark bg-dots min-h-screen flex flex-col pt-28"
      >
        <div className="flex flex-col justify-center items-center text-center text-white px-6 flex-1">
          <motion.div
            className="bg-black border border-grayMid text-sm px-4 py-1 rounded-full mb-6 flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>

            <span>
              Available now — let's collaborate on your next big idea.
            </span>
          </motion.div>

          <motion.h3
            className="text-orange text-lg font-headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            Hey! My name is Lalit Saini
          </motion.h3>

          <motion.h2
            className="text-3xl md:text-5xl font-semibold leading-tight mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            I help <span className="text-orange font-headline">brands</span>{" "}
            shine online with
            <span className="text-orange font-headline">
              {" "}
              high-converting
            </span>{" "}
            websites.
          </motion.h2>

          <motion.p
            className="mt-4 text-grayMid text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            My mission is to craft modern, engaging, and performance-driven web
            experiences.
          </motion.p>

          <motion.p
            className="mt-2 text-grayMid text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            I design and develop websites that captivate users and deliver
            results.
          </motion.p>

          <motion.div
            className="my-6 flex items-center gap-6 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
          >
            <Button
              onClick={() => handleNavigate("/contact")}
              title="Get in Touch"
            />
            <Button
              onClick={() => handleNavigate("/work")}
              title="See My Work"
              variant="blurred"
            />
          </motion.div>
        </div>

        {/* Scrolling Tech Logos */}
        <InfinityScrollBar />
        <h2 className="text-center font-semibold font-headline text-2xl md:text-3xl py-6 text-orange">
          Powerful stacks behind stunning projects
        </h2>
        <InfinityScrollBar2 />

        {/* Features / Stats / Services */}
        <FeaturesSection />

        <ProjectStats />

        <Services />

        {/* Testimonials & FAQs */}
        <TestimonialScroll />

        <FAQ />
      </section>
    </>
  );
};

export default Home;
