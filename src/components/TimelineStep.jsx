import { motion } from "framer-motion";
import { IoIosCheckbox } from "react-icons/io";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const TimelineStep = ({
  index,
  title,
  description,
  avatar,
  startText,
  centerText,
  endText,
  tooltip,
}) => {
  return (
    <motion.div variants={fadeUpVariant} className="relative pl-14 pt-6">
      {/* Connector line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute left-4 top-6 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 z-0"
      />

      {/* Numbered dot */}
      <div className="absolute left-0 top-6 w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full border border-slate-900 flex items-center justify-center font-bold text-white text-sm z-10 shadow-lg shadow-indigo-500/20">
        {index + 1}
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between border border-slate-800/80 p-6 sm:p-8 gap-6 sm:gap-8 rounded-2xl bg-slate-950/40 backdrop-blur-md shadow-xl shadow-slate-950/50">
        {/* Start tag with tooltip */}
        <div className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold relative group w-fit cursor-help">
          {startText}
          {tooltip?.start && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
              {tooltip.start}
            </div>
          )}
        </div>

        {/* Center avatar with spring transition */}
        <motion.div
          whileInView={{ scale: 1.1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 15,
            duration: 1.5,
          }}
          className="relative flex flex-col items-center"
        >
          
          {centerText && (
            <p className="text-xs text-slate-400 mt-2 font-medium">{centerText}</p>
          )}
        </motion.div>

        {/* End tag with tooltip */}
        <div className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 relative group w-fit cursor-help shadow-lg shadow-indigo-500/10">
          {endText}
          <IoIosCheckbox className="text-base text-white" />
          {tooltip?.end && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
              {tooltip.end}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
