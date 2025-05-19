import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="mt-4 text-lg text-purple-100">
              Join thousands of students who have transformed their careers with
              IT Academy. Our next cohort starts soon!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 max-w-[155px]"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-purple-600 font-medium shadow-lg hover:bg-purple-50 transition-colors"
              >
                Enroll Now
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 relative z-10">
              <h3 className="text-xl font-bold mb-4">
                Get a Free Consultation
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="" className="bg-slate-800">
                      Select a Course
                    </option>
                    <option value="web" className="bg-slate-800">
                      Web Development
                    </option>
                    <option value="data" className="bg-slate-800">
                      Data Science
                    </option>
                    <option value="mobile" className="bg-slate-800">
                      Mobile Development
                    </option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-3 rounded-lg bg-white text-purple-600 font-medium hover:bg-purple-50 transition-colors"
                >
                  Request Information
                </motion.button>
              </form>
            </div>

            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
