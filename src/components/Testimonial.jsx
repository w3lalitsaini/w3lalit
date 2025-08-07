import React from "react";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO @ StartupX",
        text: "Lalit's designs completely transformed our online presence. His attention to detail and ability to understand our brand vision was remarkable. Highly recommend for anyone looking for a professional, sleek, and user-friendly website!",
        avatar: "/avatar/john.jpg",
    },
    {
        name: "Sarah Lee",
        role: "Marketing Head @ Brandify",
        text: "The website turned out better than we imagined. Lalit was extremely professional, communicative, and delivered work that was visually stunning and optimized for conversions. We couldn’t be happier with the results.",
        avatar: "/avatar/sara.jpg",
    },
    {
        name: "Umesh",
        role: "Founder @ UDS",
        text: "Delivered ahead of time and exceeded expectations. Lalit ensured our SaaS platform’s design was modern, lightweight, and scalable for the long term. His workflow and creativity are unmatched.",
        avatar: "/avatar/umesh.jpg",
    },
    {
        name: "Priya Sharma",
        role: "CTO @ TechNova",
        text: "Lalit delivered a website that not only looks amazing but also performs flawlessly. From pixel-perfect UI to clean backend integrations, the whole experience was smooth and enjoyable. Truly a reliable developer!",
        avatar: "/avatar/priya.jpg",
    },
    {
        name: "David Miller",
        role: "Co-founder @ GrowthHackers",
        text: "Working with Lalit was a game-changer. He took our vision and made it a reality with innovative solutions, fast turnaround, and clear communication at every step. We’ve already seen an increase in customer engagement since launch!",
        avatar: "/avatar/david.jpg",
    },
];


const TestimonialScroll = () => {
    return (
        <>
        <div className="text-center mt-16">
            <h4 className="text-orange text-lg">Testimonial</h4>
            <p className="text-grayMid text-2xl">What our client say</p>
        </div>
        <div className="overflow-hidden relative w-full max-w-6xl mx-auto px-4 py-10 mb-20">
            {/* Blur Gradients on sides */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-dark via-dark/80 to-transparent z-20"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-dark via-dark/80 to-transparent z-20"></div>

            {/* Scrolling Row */}
            <div className="flex animate-scroll whitespace-nowrap">
                {testimonials.concat(testimonials).map((t, i) => (
                    <div
                        key={i}
                        className="w-80 h-72 ml-12 rounded-lg flex flex-col justify-between p-6 shadow-sm shadow-grayMid backdrop-blur-[1px]"
                    >
                        <p className="text-grayLight text-sm leading-relaxed whitespace-normal">{t.text}</p>
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-12 h-12 rounded-full border-2 border-orange"
                            />
                            <div>
                                <h4 className="text-white font-semibold">{t.name}</h4>
                                <p className="text-grayMid text-sm">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default TestimonialScroll;
