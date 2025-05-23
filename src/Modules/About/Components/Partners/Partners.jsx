import { motion } from "framer-motion";
import { CoreValuesHeader } from "../../../../Components/CoreValuesHeader/CoreValuesHeader";

export const Partners = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreValuesHeader
          title={"Our Partners"}
          text={
            "We collaborate with leading tech companies to ensure our curriculum meets industry needs and to provide career opportunities for our graduates."
          }
          titleColor={"text-slate-900"}
          textColor={"text-slate-600 "}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex items-center justify-center"
            >
              <div className="h-12 w-full bg-slate-200 rounded flex items-center justify-center">
                <span className="text-slate-400 font-medium">Partner Logo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
