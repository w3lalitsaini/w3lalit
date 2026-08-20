import React, { useState } from "react";
import SEO from "./SEO"; // Reusable SEO Component
import { NavLink } from "react-router-dom";

const projects = [
  {
    title: "Atoz Movies",
    subtitle: "SaaS Movie Review Website",
    image: "/pro-img/Movie.jpg",
    description:
      "A dynamic movie review platform where users can explore, read reviews, and share ratings. Built with React, Tailwind, and NodeJS with a clean UI and real-time updates.",
    tags: ["React", "Tailwind", "NodeJS"],
    link: "https://atozmovies.in/",
  },
  {
    id: "Shayam-cafe",
    title: "shayam Cafe",
    subtitle: "Modern Cafe Website",
    image: "/pro-img/shayam-cafe.jpg",
    description:
      "A stylish and responsive cafe website showcasing delicious menu items, customer testimonials, a photo gallery, and a smooth cart & checkout experience. Built with React and Tailwind CSS, with EmailJS integration for order notifications.",
    tags: ["React", "Tailwind", "EmailJS"],
    link: "https://shayam-cafe.vercel.app/",
  },

  {
    title: "Rajasthan Tourism",
    subtitle: "Tourism Agency Website",
    image: "/pro-img/Toursim.jpg",
    description:
      "A visually captivating tourism website featuring destination highlights, curated tour packages, and mobile-friendly booking features.",
    tags: ["React", "Tailwind", "API Integration"],
    link: "https://rajasthan-tourism.vercel.app/",
  },
  {
    id: "resume-builder-saas",
    title: "Resume Builder",
    subtitle: "Modern Resume Builder SAAS",
    image: "/pro-img/resume-builder.jpg",
    description:
      "A professional resume builder web application that allows users to select templates, edit content in real-time, and download A4-formatted resumes as PDFs. Built with React, Tailwind CSS, Node.js, and html2pdf.js, it features live preview, form-based editing, template selection, and custom styling.",
    tags: ["React", "Tailwind", "Node.js", "html2pdf.js"],
    link: "https://devfolio-saas.vercel.app/",
  },
  {
    title: "Furniture House",
    subtitle: "Furniture E-Commerce Web",
    image: "/pro-img/Furnture.jpg",
    description:
      "An elegant and functional e-commerce platform for premium furniture shopping. Fully responsive, secure checkout and optimized for speed.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://furniture-web-rho-ten.vercel.app/",
  },
  {
    title: "Univ Result",
    subtitle: "Dynamic Blogging Web App",
    image: "/pro-img/3.jpg",
    description:
      "A blog platform with categories, search filters, and fully responsive design. Built with Next.js, Tailwind, MongoDB, and NodeJS.",
    tags: ["Next.js", "Tailwind", "MongoDB", "NodeJS"],
    link: "https://univresult.in/",
  },
  {
    title: "Lali Studio",
    subtitle: "Digital Photography Studio",
    image: "/pro-img/Studio.jpg",
    description:
      "A professional studio website with galleries, booking services, and package details. Sleek UI optimized for performance.",
    tags: ["HTML", "CSS", "JS", "APIs"],
    link: "https://photoghraphy-studio.vercel.app/",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    image: "/pro-img/portfolio2.jpg",
    description:
      "A clean, responsive personal portfolio showcasing projects, skills, and achievements with smooth animations.",
    tags: ["HTML", "CSS", "JS"],
    link: "https://portfolio-v1-eta-ten.vercel.app/",
  },
  {
    title: "Rajasthan Landing",
    subtitle: "Rangilo Rajasthan",
    image: "/pro-img/Rajastha.jpg",
    description:
      "A striking landing page promoting Rajasthan tourism with engaging imagery and strong CTAs.",
    tags: ["HTML", "CSS", "JS", "GSAP"],
    link: "https://rajasthan-view.vercel.app/",
  },
  {
    title: "Info Blog",
    subtitle: "Modern Blog App",
    image: "/pro-img/1.jpg",
    description:
      "A feature-rich blog built with React, NodeJS and APIs. Fully responsive and optimized for smooth user experience.",
    tags: ["React", "APIs", "NodeJS"],
    link: "https://info.univresult.in/",
  },
];

const Projects = ({
  addSEO = true,
  title = "Projects - W3 Lalit Saini",
  description = "Showcasing a variety of my web development projects, including SaaS apps, e-commerce platforms, blogs, portfolios, and more.",
  url = "https://w3lalitsaini.com/projects",
  image = "/pro-img/portfolio.jpg",
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
      {/* SEO Integration */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-orange uppercase text-xs md:text-sm tracking-wider">
          My Work
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white mt-2">
          View My Projects
        </h3>
        <p className="text-grayMid mt-2 text-sm md:text-base max-w-xl mx-auto">
          My skills shine through each unique project I deliver.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="group bg-slate-950/50 rounded-2xl overflow-hidden border border-slate-800/80
            hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:scale-[1.01] transition-all duration-500 cursor-pointer flex flex-col h-full"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            aria-label={`Open details of ${project.title}`}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm mt-1">
                {project.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-slate-900/60 text-cyan-400 border border-cyan-500/20 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {!showAll && projects.length > 4 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white rounded-full font-semibold shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-20 p-8 md:p-12 rounded-3xl bg-slate-950/40 border border-slate-800/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 blur-[100px] rounded-full"></div>
        <h3 className="text-xl md:text-3xl text-white font-bold mb-4 relative z-10">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8 relative z-10">
          Have an idea or a project in mind? Let's turn it into a high-performance digital reality.
        </p>
        <NavLink
          to="/contact"
          className="inline-block px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full font-semibold text-white hover:from-indigo-400 hover:to-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 relative z-10"
        >
          Start a Project
        </NavLink>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-950 border border-slate-800/80 p-6 md:p-8 rounded-3xl max-w-lg w-full relative shadow-[0_0_50px_rgba(99,102,241,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl bg-slate-900/60 p-1.5 rounded-full border border-slate-800"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-2xl mb-6 aspect-video object-cover"
              loading="lazy"
            />
            <h4 className="text-white text-2xl font-bold mb-2">
              {selectedProject.title}
            </h4>
            <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 bg-slate-900/60 text-cyan-400 border border-cyan-500/20 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-semibold py-3 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.2)] transition duration-300"
            >
              Visit Project Website
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
