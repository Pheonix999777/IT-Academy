import { motion } from "framer-motion";
import { TeamData } from "../../../../data/about-data";
import { CoreValuesHeader } from "../../../../Components/CoreValuesHeader/CoreValuesHeader";

export const Team = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreValuesHeader
          title={"Leadership Team"}
          text={
            " Meet the experienced professionals leading IT Academy's mission to transform tech education."
          }
          titleColor={"text-slate-900"}
          textColor={"text-slate-600 "}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TeamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700"
            >
              <div className={`h-32 ${member.image} relative`}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-20 h-20 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>

              <div className="pt-12 p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400">
                    {member.title}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
