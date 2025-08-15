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
    <motion.div variants={fadeUpVariant} className="relative pl-14 py-10 ">
      {/* Connector line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute left-0 top-6 w-1 bg-gradient-to-b from-yellow-400 to-red-500 z-0"
      />

      {/* Numbered dot */}
      <div className="absolute left-4 top-6 w-8 h-8 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center font-bold text-white text-sm z-10 shadow">
        {index + 1}
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between shadow-grayMid shadow-md p-4 gap-8 rounded-md">
        {/* Start tag with tooltip */}
        <div className="px-4 py-2 bg-gray-300 text-black rounded-xl text-xs font-medium relative group w-fit">
          {startText}
          {tooltip?.start && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
              {tooltip.start}
            </div>
          )}
        </div>

        {/* Center avatar with 2s spring transition */}
        <motion.div
          whileInView={{ scale: 1.3, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 10,
            duration: 2,
          }}
          className="relative flex flex-col items-center"
        >
          <img
            src={avatar}
            alt={centerText}
            className="w-14 h-14 rounded-full border-2 border-white object-cover"
            loading="lazy"
          />
          {centerText && (
            <p className="text-xs text-gray-400 mt-2">{centerText}</p>
          )}
        </motion.div>

        {/* End tag with tooltip */}
        <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-xl text-xs font-medium flex items-center gap-1 relative group w-fit">
          {endText}
          <IoIosCheckbox className="text-lg" />
          {tooltip?.end && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
              {tooltip.end}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
