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
            className="group p-6 rounded-lg border border-grayMid/30 bg-dark/50 
                       hover:bg-dark/70 hover:border-orange/70 
                       transition-all duration-300 shadow-md"
          >
            <h3 className="text-4xl font-bold text-orange group-hover:scale-110 transition-transform duration-300">
              {counts[i]}
              {stat.suffix}
            </h3>
            <p className="text-grayMid text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStats;
