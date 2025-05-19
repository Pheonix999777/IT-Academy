import { motion } from "framer-motion";
import { AnimatedShowcase } from "../../../../Components/AnimatedShowcase/AnimatedShowcase";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About IT Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-purple-100 mb-6"
            >
              Empowering the next generation of tech professionals with
              cutting-edge education and mentorship.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "10,000+", label: "Students" },
                { number: "95%", label: "Job Placement" },
                { number: "50+", label: "Courses" },
                { number: "30+", label: "Countries" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="text-2xl md:text-3xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <AnimatedShowcase title={"Our Mission: Empower Through Education"} />
        </div>
      </div>
    </section>
  );
};
