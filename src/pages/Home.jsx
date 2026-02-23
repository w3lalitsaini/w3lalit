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
        className="relative bg-[#050505] min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-orange/10 blur-[100px] rounded-full animate-pulse delay-700"></div>
          <div className="bg-dots absolute inset-0 opacity-20"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 w-full max-w-6xl">
          <motion.div
            className="backdrop-blur-md bg-white/5 border border-white/10 text-xs md:text-sm px-5 py-2 rounded-full mb-8 flex items-center gap-3 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-300 font-medium tracking-wide">
              OPEN FOR FREELANCE PROJECTS — FEB 2025
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight mb-8">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-[#ff8c42] to-[#db6d2d] drop-shadow-sm">
                Masterpieces.
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-grayMid text-lg md:text-2xl max-w-3xl leading-relaxed mb-10 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hey, I'm <span className="text-white font-bold">Lalit Saini</span>.
            A Freelance Full-Stack Developer dedicated to building
            high-converting websites and scalable SaaS products that turn your
            vision into reality.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button
              onClick={() => handleNavigate("/contact")}
              className="bg-orange hover:bg-orange/80 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(219,109,45,0.3)] hover:scale-105 active:scale-95"
            >
              Start Your Project
            </button>
            <button
              onClick={() => handleNavigate("/work")}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View My Portfolio
            </button>
          </motion.div>

          <motion.div
            className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="font-headline text-xl">REACT</span>
            <span className="font-headline text-xl">NEXT.JS</span>
            <span className="font-headline text-xl">NODE.JS</span>
            <span className="font-headline text-xl">MONGODB</span>
            <span className="font-headline text-xl">TAILWIND</span>
          </motion.div>
        </div>
      </section>

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
    </>
  );
};

export default Home;
