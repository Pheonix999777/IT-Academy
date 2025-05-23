import { motion } from "framer-motion";
import { OurValues } from "../../../../data/about-data";
import { CoreValuesHeader } from "../../../../Components/CoreValuesHeader/CoreValuesHeader";

export const OurCoreValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreValuesHeader
          title={"Our Core Values"}
          text={
            "These principles guide everything we do at IT Academy, from curriculum development to student support."
          }
          titleColor={"text-slate-900"}
          textColor={"text-slate-600"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OurValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-100"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
