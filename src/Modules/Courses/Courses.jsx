import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiFilter,
  FiSearch,
  FiClock,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { Categories } from "/src/data/data.jsx";
import { Levels } from "/src/data/data.jsx";
import { CoursesData } from "/src/data/data.jsx";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");

  const filteredCourses = CoursesData.filter((course) => {
    if (activeCategory !== "all" && course.category !== activeCategory)
      return false;
    if (activeLevel !== "all" && course.level !== activeLevel) return false;
    return true;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SectionHeader
        title={"Explore Our Courses"}
        text={
          "Discover our comprehensive curriculum designed to help you master in-demand tech skills and advance your career."
        }
      />

      {/* Filters */}
      <section className="sticky top-16 z-20 bg-white dark:bg-slate-800 shadow-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FiFilter className="text-slate-500 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Filters:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {Categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-purple-600 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {Levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    activeLevel === level.id
                      ? "bg-purple-600 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>

            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {filteredCourses.length}{" "}
              {filteredCourses.length === 1 ? "Course" : "Courses"} Available
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700 flex flex-col h-full"
              >
                <div
                  className={`h-48 ${course.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors">
                    <img src={course.image} alt={course.image} />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900 dark:text-white">
                    {Categories.find((c) => c.id === course.category)?.name}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900 dark:text-white flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>{" "}
                    {course.rating}
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      {Levels.find((l) => l.id === course.level)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      <span>{course.weeks} weeks</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                      ${course.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors flex items-center"
                    >
                      Enroll Now
                      <FiArrowRight className="ml-2" />
                    </motion.button>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300">
                No courses match your filters
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Try adjusting your search criteria
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveLevel("all");
                }}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
