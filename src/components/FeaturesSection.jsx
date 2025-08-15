import React from "react";
import SEO from "./SEO"; // Reusable SEO component
import Button from "./Button";
import { NavLink } from "react-router-dom";
import Timeline from "./TimelineContainer";


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
  addSEO = false,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
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
                availableLanguage: ["English", "Hindi"],
              },
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
                },
              })),
            },
          }),
        }}
      />
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
            className="flex flex-col justify-between backdrop-blur-[2px] p-6 rounded-lg bg-Dark transition-all duration-300 shadow-md shadow-grayMid"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-grayMid text-sm md:text-base leading-relaxed mb-4">
              {feature.desc}
            </p>

            {/* Avatars */}
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

            {/* Screens - Dummy Layouts */}
            {feature.type === "screens" && (
              <div className="flex justify-between items-end gap-3 mt-auto">
                {/* Desktop */}
                <div className="flex flex-col items-center w-1/3">
                  <div className="bg-slate-700 rounded-md p-2 aspect-[16/9] w-full flex items-center justify-center">
                    <div className="w-full h-full bg-stone-500 rounded-md shadow-inner">
                      <div className="h-1/4 bg-dark w-3/4 mx-auto mt-2 rounded" />
                      <div className="h-1/4 bg-dark w-1/2 mx-auto mt-2 rounded" />
                    </div>
                  </div>
                  <p className="text-xs text-white mt-1">Desktop</p>
                </div>

                {/* Tablet */}
                <div className="flex flex-col items-center w-1/4">
                  <div className="bg-slate-700 rounded-md p-2 aspect-[3/4] w-full flex items-center justify-center">
                    <div className="w-full h-full bg-stone-500 rounded-md shadow-inner">
                      <div className="h-1/5 bg-dark w-3/4 mx-auto mt-2 rounded" />
                      <div className="h-1/5 bg-dark w-1/2 mx-auto mt-2 rounded" />
                    </div>
                  </div>
                  <p className="text-xs text-white mt-1">Tablet</p>
                </div>

                {/* Mobile */}
                <div className="flex flex-col items-center w-1/5">
                  <div className="bg-slate-700 rounded-md p-2 aspect-[9/16] w-full flex items-center justify-center">
                    <div className="w-full h-full bg-stone-500 rounded-md shadow-inner">
                      <div className="h-1/4 bg-dark w-3/4 mx-auto mt-2 rounded" />
                      <div className="h-1/4 bg-dark w-1/2 mx-auto mt-2 rounded" />
                    </div>
                  </div>
                  <p className="text-xs text-white mt-1">Mobile</p>
                </div>
              </div>
            )}

            {/* Fast Delivery - Horizontal Bar */}
            {feature.type === "progress" && (
              <div className="mt-auto">
                <svg viewBox="0 0 220 100" className="w-full h-28">
                  <defs>
                    <linearGradient
                      id="progressLine"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="var(--orange)" />
                      <stop offset="100%" stopColor="var(--gray-mid)" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="none"
                    stroke="url(#progressLine)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    points="0,90 30,70 60,75 90,50 120,40 150,30 180,20 210,10"
                    className="animate-dash"
                  />
                  {/* Dots on data points */}
                  {[30, 60, 90, 120, 150, 180, 210].map((x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={90 - i * 10}
                      r="3"
                      fill="var(--gray-mid)"
                    />
                  ))}
                </svg>
                <p className="text-xs text-grayMid mt-2">
                  Fast delivery timeline
                </p>
              </div>
            )}

            {/* Quality Work - Circular Progress */}
            {feature.type === "quality" && (
              <div className="flex items-center justify-between mt-auto">
                <div className="text-xs md:text-sm text-grayMid">
                  Quality Work
                </div>
                <div className="relative w-28 h-28">
                  <svg className="transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#qualityGradient)"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="41.8"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="qualityGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="var(--orange)" />
                        <stop offset="100%" stopColor="var(--gray-mid)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                    85%
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <Timeline/>
    </section>
  );
};

export default FeaturesSection;
