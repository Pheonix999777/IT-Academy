import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiClock,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiCalendar,
} from "react-icons/fi";

const CourseModal = ({ course, isOpen, onClose }) => {
  if (!course) return null;

  const curriculum = [
    {
      week: 1,
      title: "Introduction & Setup",
      topics: ["Course overview", "Environment setup", "Basic concepts"],
    },
    {
      week: 2,
      title: "Core Fundamentals",
      topics: ["Key principles", "Essential techniques", "Practical exercises"],
    },
    {
      week: 3,
      title: "Advanced Concepts",
      topics: [
        "Complex problem solving",
        "Industry best practices",
        "Real-world applications",
      ],
    },
    {
      week: 4,
      title: "Project Development",
      topics: [
        "Planning and architecture",
        "Implementation",
        "Testing and debugging",
      ],
    },
  ];

  const requirements = [
    "Basic computer knowledge",
    "Reliable internet connection",
    "Dedication to learn (10-15 hours/week)",
    "Specific prerequisites may apply for advanced courses",
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image */}
            <div className={`h-48 md:h-64 ${course.image} relative`}>
              <div className="absolute inset-0 bg-black/20 ">
                <img
                  className="w-full h-40 md:w-[886px] md:h-[270px] object-cover mx-auto"
                  src={course.image}
                  alt={course.title}
                />
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-700  hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <FiX className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900">
                {course.category}
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90  backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900  flex items-center">
                <span className="text-yellow-500 mr-1">★</span> {course.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                {course.title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center text-sm font-medium px-2.5 py-0.5 rounded-full bg-purple-100  text-purple-800">
                  {course.level}
                </span>
                <span className="inline-flex items-center text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-100  text-blue-800">
                  <FiClock className="mr-1 h-3 w-3" />
                  {course.weeks} weeks
                </span>
                <span className="inline-flex items-center text-sm font-medium px-2.5 py-0.5 rounded-full bg-green-100  text-green-800">
                  <FiUsers className="mr-1 h-3 w-3" />
                  {course.students?.toLocaleString()} students
                </span>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-slate-600 text-lg">{course.description}</p>
                <p className="text-slate-600">
                  This comprehensive course will take you from beginner to
                  professional, with hands-on projects and personalized feedback
                  from industry experts. You'll build a portfolio of work that
                  demonstrates your skills to potential employers.
                </p>
              </div>

              {/* Curriculum */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <FiCalendar className="mr-2" /> Course Curriculum
                </h3>
                <div className="space-y-4">
                  {curriculum.map((week) => (
                    <div
                      key={week.week}
                      className="bg-slate-50 rounded-lg p-4 border border-slate-20"
                    >
                      <h4 className="font-medium text-slate-90 mb-2">
                        Week {week.week}: {week.title}
                      </h4>
                      <ul className="space-y-1">
                        {week.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start text-slate-600"
                          >
                            <FiCheckCircle className="h-4 w-4 text-green-500  mt-0.5 mr-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <FiAward className="mr-2" /> Requirements
                </h3>
                <ul className="space-y-2">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <FiCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div>
                  <span className="block text-sm text-slate-500">
                    Course Price
                  </span>
                  <span className="text-3xl font-bold text-slate-900">
                    ${course.price}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-3 rounded-lg bg-slate-200 text-slate-800  font-medium hover:bg-slate-300 transition-colors">
                    Add to Wishlist
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
