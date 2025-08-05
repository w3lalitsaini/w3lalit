// src/components/SEO.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet"; // ✅ Updated import

const SEO = ({
  title = "W3 Lalit Saini - Web Developer in Sikar, Rajasthan, India",
  description = "I build modern, high-converting websites, SaaS platforms, and web apps using React, Node.js, and Tailwind CSS.",
  url = "https://w3lalitsaini.com",
  image = "https://w3lalitsaini.com/og-ab.jpg",
  keywords = "Web Developer, React, Node.js, Tailwind, SaaS, India, Sikar",
  schema = true
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "W3 Lalit Saini",
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Lalit Saini",
      "telephone": "+91-9887374746",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sikar",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan",
        "postalCode": "332405",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://instagram.com/w3lalitsaini",
        "https://linkedin.com/in/w3lalitsaini"
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local SEO */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Sikar, Rajasthan" />
      <meta name="geo.position" content="27.6094;75.1399" />
      <meta name="ICBM" content="27.6094, 75.1399" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
