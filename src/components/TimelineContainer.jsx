import TimelineStep from "./TimelineStep";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Effortless Experience",
    description:
      "Our process saves your time and delivers the best results without constant follow-ups or unnecessary distractions.",
    avatar: "/avatar/2.jpg",
    startText: "Start",
    centerText: "No Distractions",
    endText: "Done",
    tooltip: {
      start: "Kick off your project",
      end: "Completed seamlessly",
    },
  },
  {
    title: "Fast Delivery",
    description:
      "We maintain a rapid execution pace, delivering results quickly with consistent communication.",
    avatar: "/avatar/3.jpg",
    startText: "Brief",
    centerText: "Execution",
    endText: "Delivered",
    tooltip: {
      start: "Project briefing",
      end: "Final product delivered",
    },
  },
  {
    title: "Post Support",
    description:
      "Even after delivery, we stay available for maintenance, fixes, and guidance.",
    avatar: "/avatar/4.jpg",
    startText: "Delivered",
    centerText: "Support Ongoing",
    endText: "Client Happy",
    tooltip: {
      start: "Launch complete",
      end: "Long-term relationship",
    },
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full px-4 py-10">
      <motion.div
        ref={ref}
        className="flex flex-col gap-10 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Vertical line (optional) */}
        <div className="absolute top-0 h-full w-1 bg-[var(--gray-mid)] z-0" />

        {steps.map((step, idx) => (
          <TimelineStep key={idx} index={idx} {...step} />
        ))}
      </motion.div>
    </section>
  );
};

export default Timeline;
