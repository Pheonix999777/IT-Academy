import { motion } from "framer-motion";

export const CoreValuesHeader = ({ title, text, titleColor, textColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className={`text-3xl font-bold ${titleColor} mb-4`}>{title}</h2>
      <p className={`text-lg ${textColor}`}>{text}</p>
    </motion.div>
  );
};
