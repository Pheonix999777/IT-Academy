import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLinks } from "/src/data/data.jsx";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: 5 }}
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">IT</span>
              </motion.div>
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Academy
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-md">
              Empowering the next generation of tech professionals with
              cutting-edge courses, expert mentorship, and a supportive learning
              community.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-purple-600"
              >
                <FiGithub className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-500 hover:text-purple-600"
              >
                <FiTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-purple-600"
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-500 hover:text-purple-600"
              >
                <FiInstagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NavLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-600 hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-600">
                123 Tech Street, Digital City
              </li>
              <li>
                <a
                  href="mailto:contact@itacademy.com"
                  className="text-sm text-slate-600 hover:text-purple-600"
                >
                  contact@itacademy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-sm text-slate-600 hover:text-purple-600"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-center text-slate-500">
            &copy; {new Date().getFullYear()} IT Academy. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
