import React from "react";
import SEO from "../components/SEO";

const Terms = () => {
    return (
        <main className="bg-dark min-h-screen pt-28 px-6">
            <SEO
                title="Terms & Conditions - W3Lalitsaini"
                description="Read the terms and conditions for using W3Lalitsaini's services and website."
                url="https://w3lalitsaini.com/terms"
            />
            <div className="max-w-4xl mx-auto text-grayMid leading-relaxed">
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                    Terms & Conditions
                </h1>
                <p className="mb-4">
                    Welcome to <strong>W3Lalitsaini</strong>. By accessing or using our
                    website and services, you agree to the following terms and conditions:
                </p>
                <h2 className="text-xl text-orange mt-6 mb-2">1. Services</h2>
                <p className="mb-4">
                    We provide professional web development, app development, and SaaS
                    solutions. The scope of each project will be defined in a proposal or
                    agreement.
                </p>
                <h2 className="text-xl text-orange mt-6 mb-2">2. Payments</h2>
                <p className="mb-4">
                    Payments must be made as per the agreed milestones. Late payments may
                    delay delivery.
                </p>
                <h2 className="text-xl text-orange mt-6 mb-2">3. Liability</h2>
                <p className="mb-4">
                    We are not liable for any indirect damages, loss of data, or downtime
                    caused by third-party tools or platforms.
                </p>
                <p className="mt-8">Last updated: August 2025</p>
            </div>
        </main>
    );
};

export default Terms;
