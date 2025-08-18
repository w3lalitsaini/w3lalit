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
            className="group bg-dark rounded-xl overflow-hidden border border-grayMid
            hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            aria-label={`Open details of ${project.title}`}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h4 className="text-base md:text-lg font-semibold text-white">
                {project.title}
              </h4>
              <p className="text-grayMid text-xs md:text-sm">
                {project.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-grayDark text-grayLight rounded-full"
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
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-gradient-to-r from-orange to-dark text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            View More
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-lg md:text-2xl text-white font-semibold mb-4">
          Let's Build Something Amazing Together.
        </h3>
        <NavLink
          to="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-orange to-dark rounded-md shadow-lg text-white hover:shadow-[0_0_20px_rgba(255,107,53,0.8)] transition-all duration-300"
        >
          Start a Project
        </NavLink>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-dark p-6 rounded-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white text-lg"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg mb-6"
              loading="lazy"
            />
            <h4 className="text-white text-xl font-semibold mb-2">
              {selectedProject.title}
            </h4>
            <p className="text-grayMid mb-4 text-sm md:text-base">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-grayDark text-grayLight rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-orange text-white py-2 rounded-md hover:bg-orange/90 transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
