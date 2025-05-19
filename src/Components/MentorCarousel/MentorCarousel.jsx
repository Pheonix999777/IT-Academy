import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiLinkedin,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

const MentorCarousel = ({ mentors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isPaused, mentors.length, itemsToShow]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (mentors.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mentors.length - itemsToShow : prevIndex - 1
    );
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const visibleMentors = mentors.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  const slideVariants = {
    hiddenRight: { x: 100, opacity: 0 },
    hiddenLeft: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (direction) => ({
      x: direction === "left" ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div className="overflow-hidden">
        <div className="flex">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {visibleMentors.map((mentor, index) => (
              <motion.div
                key={`${mentor.id}-${index}`}
                custom={direction}
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700 h-full">
                  <div className={`h-48 ${mentor.image} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {mentor.name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                        {mentor.title}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {mentor.company}
                      </p>

                      <div className="flex space-x-3 mb-4">
                        <a
                          href={mentor.social?.linkedin || "#"}
                          className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                        >
                          <FiLinkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={mentor.social?.twitter || "#"}
                          className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                        >
                          <FiTwitter className="h-5 w-5" />
                        </a>
                        <a
                          href={mentor.social?.github || "#"}
                          className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                        >
                          <FiGithub className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none z-10"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none z-10"
        aria-label="Next slide"
      >
        <FiChevronRight className="h-6 w-6" />
      </button>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: mentors.length - itemsToShow + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-6 bg-purple-600 dark:bg-purple-400"
                  : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MentorCarousel;
