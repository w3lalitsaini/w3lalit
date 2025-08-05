import React from "react";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";

const Sitemap = () => {
    const pages = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
    ];

    return (
        <main className="bg-dark min-h-screen pt-28 px-6">
            <SEO
                title="Sitemap - W3Lalitsaini"
                description="Sitemap for W3Lalitsaini website. Easily navigate to all important pages."
                url="https://w3lalitsaini.com/sitemap"
            />
            <div className="max-w-4xl mx-auto text-grayMid leading-relaxed">
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                    Sitemap
                </h1>
                <ul className="space-y-3">
                    {pages.map((page) => (
                        <li key={page.path}>
                            <NavLink
                                to={page.path}
                                className="text-orange hover:underline text-lg"
                            >
                                {page.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Sitemap;
