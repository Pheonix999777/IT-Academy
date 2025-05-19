"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiGithub, FiFilter } from "react-icons/fi";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { Specialties } from "/src/data/data.jsx";
import { MentorsData } from "/src/data/data.jsx";
import { MentorsPageData } from "/src/data/data.jsx";

const Mentors = () => {
  const [activeSpecialty, setActiveSpecialty] = useState("all");

  const filteredMentors = MentorsData.filter((mentor) => {
    if (activeSpecialty !== "all" && mentor.specialty !== activeSpecialty)
      return false;
    return true;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SectionHeader
        title={"Meet Our Expert Mentors"}
        text={
          "Learn from industry professionals with years of real-world experience in the tech industry."
        }
      />

      {/* Filters */}
      <section className="sticky top-16 z-20 bg-white dark:bg-slate-800 shadow-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FiFilter className="text-slate-500 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Filter by specialty:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {Specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => setActiveSpecialty(specialty.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    activeSpecialty === specialty.id
                      ? "bg-purple-600 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700 flex flex-col h-full"
              >
                <div
                  className={`h-48 ${mentor.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-900 dark:text-white">
                    {Specialties.find((s) => s.id === mentor.specialty)?.name}
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
                        href={mentor.social.linkedin}
                        className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                      >
                        <FiLinkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={mentor.social.twitter}
                        className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                      >
                        <FiTwitter className="h-5 w-5" />
                      </a>
                      <a
                        href={mentor.social.github}
                        className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                      >
                        <FiGithub className="h-5 w-5" />
                      </a>
                    </div>

                    <div className="w-full border-t border-slate-200 dark:border-slate-700 pt-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-3">
                        {mentor.bio}
                      </p>

                      <div className="text-sm text-slate-700 dark:text-slate-300">
                        <span className="font-medium">Experience:</span>{" "}
                        {mentor.experience} years
                      </div>

                      <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="font-medium">Courses:</span>
                        <ul className="mt-1 space-y-1">
                          {mentor.courses.map((course, i) => (
                            <li
                              key={i}
                              className="text-slate-600 dark:text-slate-400"
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    View Profile
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300">
                No mentors match your filter
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Try selecting a different specialty
              </p>
              <button
                onClick={() => setActiveSpecialty("all")}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Show All Mentors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Become a Mentor
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Are you an industry expert passionate about sharing your
                knowledge? Join our team of mentors and help shape the next
                generation of tech professionals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Share your expertise with motivated students",
                  "Flexible teaching schedule",
                  "Competitive compensation",
                  "Access to our learning platform and resources",
                  "Networking opportunities with other industry experts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 text-purple-600 dark:text-purple-400">
                      ✓
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/25"
              >
                Apply to Become a Mentor
              </motion.button>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                  Mentor Requirements
                </h3>
                <ul className="space-y-4 relative z-10">
                  {MentorsPageData.map((item, i) => (
                    <li
                      key={i}
                      className="pb-4 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0"
                    >
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;
