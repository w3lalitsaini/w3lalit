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
        <div className="text-center mt-20 mb-8">
            <h4 className="text-cyan-400 font-bold uppercase text-xs md:text-sm tracking-widest">Testimonials</h4>
            <p className="text-3xl md:text-5xl font-extrabold text-white mt-2">What Our Clients Say</p>
        </div>
        <div className="overflow-hidden relative w-full max-w-7xl mx-auto px-4 py-10 mb-20">
            {/* Blur Gradients on sides */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-20"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent z-20"></div>

            {/* Scrolling Row */}
            <div className="flex animate-scroll whitespace-nowrap">
                {testimonials.concat(testimonials).map((t, i) => (
                    <div
                        key={i}
                        className="w-96 min-h-[250px] mx-6 rounded-2xl flex flex-col justify-between p-8 border border-slate-800 bg-slate-950/40 backdrop-blur-md shadow-xl hover:border-cyan-500/30 transition-all duration-300"
                    >
                        <p className="text-slate-300 text-sm leading-relaxed whitespace-normal italic">"{t.text}"</p>
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-900">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-12 h-12 rounded-full border-2 border-indigo-500/30 object-cover shadow-md"
                            />
                            <div>
                                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
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
