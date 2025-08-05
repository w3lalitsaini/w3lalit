import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import SEO from "./SEO"; // Reusable SEO component
import Button from "./Button";
import { NavLink } from "react-router-dom";


// Sample avatars (replace with real client images)
const avatars = ["/avatar/1.jpg", "/avatar/umesh.jpg", "/avatar/3.jpg"];

// Updated & alternate feature content
const features = [
  {
    title: "High-Conversion Designs",
    desc: "We create visually compelling layouts that capture attention and drive more sign-ups, sales, and inquiries for your brand.",
    type: "avatars",
  },
  {
    title: "Flawless Across All Devices",
    desc: "Our websites adapt beautifully on mobile, tablet, and desktop, ensuring a consistent user experience everywhere.",
    type: "screens",
  },
  {
    title: "Lightning-Fast Delivery",
    desc: "Launch your project within 7–14 days without compromising quality, helping you reach your audience faster.",
    type: "progress",
  },
  {
    title: "Unmatched Quality, No Hidden Costs",
    desc: "We deliver premium-quality websites with transparent pricing—no upselling, just results-driven solutions.",
    type: "quality",
  },
];

const FeaturesSection = ({
  addSEO = true,
  title = "Why Choose W3 Lalit Saini?",
  description = "Our unique web design process ensures better results, faster delivery, and exceptional user experiences.",
  url = "https://w3lalitsaini.com/#why-me",
  image = "/avatar/2.jpg",
}) => {
  return (
    <section id="why-me" className="py-28 px-4 md:px-6 max-w-6xl mx-auto">
      {/* SEO Override (Optional) */}
      {addSEO && (
        <SEO title={title} description={description} url={url} image={image} />
      )}

      {/* Structured Data: Connected with global company info */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Design & Development",
          provider: {
            "@type": "Organization",
            name: "W3 Lalit Saini",
            url: "https://w3lalitsaini.com",
            logo: "https://w3lalitsaini.com/logo.ico",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9887374746",
              contactType: "Customer Service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"]
            }
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Features",
            itemListElement: features.map((f) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: f.title,
                description: f.desc,
              }
            }))
          }
        })
      }} />

      {/* Top Headings */}
      <div className="text-center md:text-left">
        <p className="text-base md:text-lg text-orange font-medium mb-2 font-headline">
          Why Work With Me?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Exceptional Web Experiences <br />
          <span className="text-gray-300">
            Designed for Growth & Conversions
          </span>
        </h2>
        <p className="text-grayMid mt-3 max-w-3xl text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col justify-between backdrop-blur-[2px] p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md shadow-grayMid"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-grayMid text-sm md:text-base leading-relaxed mb-4">
              {feature.desc}
            </p>

            {/* Custom content */}
            {feature.type === "avatars" && (
              <div className="flex items-center gap-3 mt-auto">
                <div className="flex -space-x-2">
                  {avatars.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt="Happy Client"
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-dark object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <NavLink to="/contact" className="ml-auto">
                  <Button
                    title="Get in Touch"
                    className="text-xs md:text-sm bg-gradient-to-r from-orange to-dark text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.7)] transition-all"
                    variant="solid"
                    aria-label="Navigate to Contact page"
                  />
                </NavLink>
              </div>
            )}

            {feature.type === "screens" && (
              <div className="flex justify-between gap-3 mt-auto">
                <div className="bg-white/10 flex-1 text-center rounded-md text-xs text-grayMid py-2">
                  Desktop
                </div>
                <div className="bg-white/10 flex-1 text-center rounded-md text-xs text-grayMid py-2">
                  Tablet
                </div>
                <div className="bg-white/10 flex-1 text-center rounded-md text-xs text-grayMid py-2">
                  Mobile
                </div>
              </div>
            )}

            {feature.type === "progress" && (
              <div className="mt-auto">
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <div className="w-2/3 h-full bg-orange rounded-full"></div>
                </div>
                <p className="text-xs text-grayMid mt-2">
                  Fast delivery timeline
                </p>
              </div>
            )}

            {feature.type === "quality" && (
              <div className="flex items-center justify-between mt-auto">
                <div className="text-xs md:text-sm text-grayMid">
                  Quality Work
                </div>
                <div className="bg-white/10 h-2 w-2/3 rounded-full relative">
                  <div className="absolute inset-0 bg-orange rounded-full w-5/6"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 p-6 rounded-lg backdrop-blur-[2px] bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-sm shadow-grayMid">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
          Effortless Experience
        </h3>
        <p className="text-grayMid text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
          Our process saves your time and delivers the best results without
          constant follow-ups or unnecessary distractions.
        </p>

        <div className="relative flex items-center justify-between pt-10">
          {/* Start Button */}
          <div className="px-5 py-2 bg-white/10 -mt-3 bg-gradient-to-r from-gray-500 to-dark text-grayMid rounded-xl z-20 text-xs md:text-sm font-medium">
            Start
          </div>

          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[16px] rounded-md bg-gradient-to-r from-grayMid to-orange z-10"></div>

          {/* Center Avatar */}
          <div className="relative flex flex-col items-center z-20">
            <img
              src="/avatar/2.jpg"
              alt="Effortless Process"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-lg object-cover"
              loading="lazy"
            />
            <p className="text-xs md:text-lg text-grayMid absolute -top-12 whitespace-nowrap">
              No Distractions
            </p>
          </div>

          {/* Done Button */}
          <div className="px-4 md:px-5 py-2 -mt-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-xl text-xs md:text-sm font-medium flex items-center gap-1 z-20">
            Done <IoIosCheckbox className="text-lg leading-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
