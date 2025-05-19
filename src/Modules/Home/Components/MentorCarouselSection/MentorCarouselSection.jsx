import { motion } from "framer-motion";
import { Mentors } from "../../Data/HomeData";
import MentorCarousel from "../../../../Components/MentorCarousel/MentorCarousel";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export const MentorCarouselSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Meet Our Expert Mentors
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Learn from industry professionals with years of experience in
            leading tech companies.
          </p>
        </div>

        <MentorCarousel mentors={Mentors} />

        <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/mentors"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-lg shadow-purple-500/25 transition-colors"
            >
              View All Mentors
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
