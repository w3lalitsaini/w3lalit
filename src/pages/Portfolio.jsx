import React from "react";
import Projects from "../components/Projects";
import ProjectStats from "../components/ProjectStats";
import TestimonialScroll from "../components/Testimonial";
import CTASection from "../components/CTASection";
import SEO from "../components/SEO"; // Reusable SEO component

const Portfolio = ({
  addSEO = true,
  title = "Portfolio - W3 Lalit Saini",
  description = "Explore my portfolio of web development projects including SaaS apps, e-commerce websites, blogs, and portfolio designs. Showcasing high-quality responsive designs and scalable code.",
  url = "https://w3lalitsaini.com/work",
  image = "/pro-img/1.png",
}) => {
  return (
    <main className="bg-dark bg-dots min-h-screen pt-36 pb-16 px-4 md:px-6">
      {/* SEO Integration */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Page Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          My Creative <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Dive into a collection of projects that reflect my expertise in
          creating impactful, scalable, and visually stunning web applications.
        </p>
      </div>

      {/* Projects Section */}
      <section className="mb-10">
        <Projects addSEO={true} />
      </section>

      {/* Project Stats */}
      <section className="mb-20">
        <ProjectStats />
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <TestimonialScroll />
      </section>

      {/* CTA Section */}
      <section className="mt-12">
        <CTASection />
      </section>
    </main>
  );
};

export default Portfolio;
