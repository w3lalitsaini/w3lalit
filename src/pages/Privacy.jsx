import React from "react";
import SEO from "../components/SEO";

const Privacy = () => {
    return (
        <main className="bg-dark min-h-screen pt-28 px-6">
            <SEO
                title="Privacy Policy - W3Lalitsaini"
                description="Read the privacy policy of W3Lalitsaini to understand how we handle your personal data."
                url="https://w3lalitsaini.com/privacy"
            />
            <div className="max-w-4xl mx-auto text-grayMid leading-relaxed">
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                    Privacy Policy
                </h1>
                <p className="mb-4">
                    At <strong>W3Lalitsaini</strong>, we value your privacy. This Privacy
                    Policy explains how we collect, use, and protect your information.
                </p>
                <h2 className="text-xl text-orange mt-6 mb-2">1. Data We Collect</h2>
                <p className="mb-4">
                    We collect information you provide (name, email, phone) through
                    contact forms, and analytics data (cookies).
                </p>
                <h2 className="text-xl text-orange mt-6 mb-2">2. How We Use Data</h2>
                <p className="mb-4">
                    Data is used to improve our services, respond to inquiries, and send
                    updates if you opt in.
                </p>
                <h2 className="text-xl text-orange mt-6 mb-2">3. Third-Party Tools</h2>
                <p className="mb-4">
                    We may use Google Analytics, EmailJS, or similar services. They have
                    their own privacy policies.
                </p>
                <p className="mt-8">Last updated: August 2025</p>
            </div>
        </main>
    );
};

export default Privacy;
