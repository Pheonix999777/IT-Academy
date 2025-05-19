import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import CourseModal from "../../Components/CourseModal/CourseModal";
import { Features } from "/src/data/data.jsx";
import { PopularCoursesData } from "./Data/HomeData";
import { AnimatedShowcase } from "../../Components/AnimatedShowcase/AnimatedShowcase";
import { MentorCarouselSection } from "./Components/MentorCarouselSection/MentorCarouselSection";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { CTASection } from "./Components/CTASection/CTASection";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = Features;

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  opacity: Math.random() * 0.2,
                  filter: "blur(50px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your Tech Potential
              </h1>
              <p className="mt-6 text-lg md:text-xl text-purple-100">
                Join our academy to master in-demand tech skills, connect with
                industry experts, and launch your career in technology.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/courses"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/25 flex items-center"
                  >
                    Explore Courses
                    <FiArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="block px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <AnimatedShowcase title={"Interactive Learning Environment"} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section ref={targetRef} className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ opacity, y }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Why Choose IT Academy?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              We provide a comprehensive learning experience designed to help
              you succeed in the tech industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MentorCarouselSection />

      {/* Popular Courses Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Popular Courses
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Explore our most in-demand courses designed to help you master the
              skills that employers are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PopularCoursesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700"
              >
                <div
                  className={`h-48 ${course.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900 dark:text-white">
                    {course.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900 dark:text-white flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>{" "}
                    {course.rating}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      {course.level}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {course.weeks} weeks
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      ${course.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewCourse(course)}
                      className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/courses"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-lg shadow-purple-500/25 transition-colors"
              >
                View All Courses
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
