import React from "react";
import { FaCode, FaPaintBrush, FaRocket, FaSearch } from "react-icons/fa";
import SEO from "./SEO"; // Reusable SEO component
import Button from "../components/Button"; // update path as needed
import { useNavigate } from "react-router-dom";


const services = [
  {
    title: "Web Design",
    description:
      "Stunning, user-centric designs that elevate your brand and engage your audience with better conversions.",
    icon: <FaPaintBrush className="text-orange text-4xl" />,
  },
  {
    title: "Web Development",
    description:
      "Clean, scalable, and high-performance websites using modern frameworks like React, Next.js, and Node.js.",
    icon: <FaCode className="text-orange text-4xl" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Rank higher in Google with optimized pages, faster load times, and keyword-focused strategies.",
    icon: <FaSearch className="text-orange text-4xl" />,
  },
  {
    title: "Brand Strategy",
    description:
      "Build a strong online presence with a cohesive brand strategy tailored for growth and awareness.",
    icon: <FaRocket className="text-orange text-4xl" />,
  },
];

const Services = ({
  addSEO = false,
  title = "Our Digital Services - W3 Lalit Saini",
  description = "Explore the full range of services by W3 Lalit Saini including Web Design, Development, SEO, and Brand Strategy to help your business grow online.",
  url = "https://w3lalitsaini.com/#service",
  image = "/pro-img/portfolio.png",
}) => {

  const navigate = useNavigate();

  return (
    <section id="service" className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
      {/* SEO Override (Optional) */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Structured Data: Connect with global company schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Web Services",
            provider: {
              "@type": "Organization",
              name: "W3 Lalit Saini",
              url: "https://w3lalitsaini.com",
              logo: "https://w3lalitsaini.com/logo.png",
              sameAs: [
                "https://instagram.com/w3lalitsaini",
                "https://linkedin.com/in/w3lalitsaini",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9887374746",
                contactType: "Customer Service",
                areaServed: "IN",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Services",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.description,
                },
              })),
            },
          }),
        }}
      />

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Our Services
        </h2>
        <p className="text-grayMid text-sm md:text-base max-w-2xl mx-auto">
          We provide end-to-end web solutions, from beautiful design to SEO and
          brand strategy, helping you grow your online presence.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative group p-[1px] rounded-xl bg-gradient-to-br from-orange via-orange/50 to-dark hover:scale-[1.02] transition-transform duration-300"
          >
            <div
              className="p-6 rounded-xl bg-dark text-center flex flex-col items-center 
              transition-all duration-300 group-hover:shadow-[0_0_4px_4px_rgba(255,107,53,0.5)]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-grayMid text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-6">
          Ready to take your business online?
        </h3>
        <Button
          title="Get In Touch"
          onClick={() => navigate("/contact")}
          variant="solid"
          className="mx-auto block" // centers the button
        />
      </div>


    </section>
  );
};

export default Services;
