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
  FaLightbulb,
  FaPalette,
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
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              I Build Digital <span className="text-orange">Experiences</span>{" "}
              That Sell.
            </h1>
            <p className="text-xl text-grayMid font-medium leading-relaxed">
              Based in Sikar, Rajasthan, I'm a full-stack developer specializing
              in creating high-end digital solutions for ambitious brands and
              individuals worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange/20 blur-xl rounded-2xl rotate-3"></div>
            <div className="relative aspect-square rounded-2xl border border-white/10 overflow-hidden bg-dark shadow-2xl">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lalit"
                alt="Lalit Saini"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold text-white">
              The Man Behind the Code
            </h2>
            <p className="text-grayMid text-lg leading-relaxed">
              With over 4 years of experience in the digital space, I've
              transitioned from a curious experimenter to a professional
              architect of the web. My focus is on the intersection of{" "}
              <span className="text-white font-bold">performance</span>,
              <span className="text-white font-bold">design</span>, and{" "}
              <span className="text-white font-bold">business results</span>.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-orange text-2xl font-bold block mb-1">
                  50+
                </span>
                <span className="text-grayMid text-sm font-medium">
                  Projects Delivered
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="text-orange text-2xl font-bold block mb-1">
                  4+
                </span>
                <span className="text-grayMid text-sm font-medium">
                  Years Experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              My Methodology
            </h2>
            <div className="h-1.5 w-20 bg-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy First",
                desc: "I don't just write code. I analyze your business goals to ensure the technical choices drive real-world conversion.",
                icon: <FaLightbulb className="text-orange" />,
              },
              {
                title: "Premium Design",
                desc: "Every pixel matters. I create modern, dark-themed aesthetics that command attention and build trust instantly.",
                icon: <FaPalette className="text-orange" />,
              },
              {
                title: "Scalable Code",
                desc: "Using MERN & Next.js, I build foundations that grow with you, ensuring your site stays fast and secure.",
                icon: <FaCode className="text-orange" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-orange/50 transition-all group"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-grayMid leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
