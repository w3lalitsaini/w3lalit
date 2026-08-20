import React, { useEffect, useRef, useState } from "react";

const stats = [
  { number: 20, suffix: "+", label: "Projects Completed" },
  { number: 10, suffix: "+", label: "Happy Clients" },
  { number: 1, suffix: "+", label: "Years Experience" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
];

const ProjectStats = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
        }, 16);
      });
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl border border-slate-800 bg-slate-950/30 
                       hover:bg-slate-950/60 hover:border-cyan-500/40 
                       transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent transition-transform duration-300 flex items-center justify-center gap-0.5">
              <span>{counts[i]}</span>
              <span className="text-cyan-400">{stat.suffix}</span>
            </h3>
            <p className="text-slate-400 text-sm mt-3 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStats;
