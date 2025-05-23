import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLinks } from "/src/data/data.jsx";
import ConsultationModal from "../Consultation-modal/Consultation-modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">IT</span>
              </motion.div>
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Academy
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-purple-600"
                      : "text-slate-700 hover:text-purple-600"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={openModal}
                className="relative group overflow-hidden px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">Enroll Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleMenu} className="text-xl">
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-purple-600"
                    : "text-slate-700 hover:text-purple-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={openModal}
              className="relative w-full text-left group overflow-hidden px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
