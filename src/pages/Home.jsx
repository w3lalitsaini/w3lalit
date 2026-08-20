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
      {/* Hero Section */}
      <section
        id="home"
        className="bg-dark bg-dots min-h-screen flex flex-col pt-32 pb-16 relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col justify-center items-center text-center text-white px-6 flex-1 relative z-10">
          <motion.div
            className="bg-slate-950/80 border border-slate-800/80 text-xs px-4 py-1.5 rounded-full mb-8 flex items-center gap-2.5 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            <span className="text-slate-300 font-medium">
              Available now — let's collaborate on your next big idea.
            </span>
          </motion.div>

          <motion.h3
            className="text-cyan-400 text-sm md:text-base font-bold uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            Hey! My name is Lalit Saini
          </motion.h3>

          <motion.h1
            className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight mt-4 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            I help <span className="text-gradient">brands</span> shine online with <span className="text-gradient">high-converting</span> websites.
          </motion.h1>

          <motion.p
            className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            My mission is to craft modern, engaging, and performance-driven web
            experiences.
          </motion.p>

          <motion.p
            className="mt-3 text-slate-500 text-base md:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            I design and develop websites that captivate users and deliver
            results.
          </motion.p>

          <motion.div
            className="my-8 flex items-center gap-6 flex-wrap justify-center"
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
        <h2 className="text-center font-bold font-headline text-2xl md:text-3xl py-10 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-8">
          Powerful stacks behind stunning projects
        </h2>

        <InfinityScrollBar />

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
