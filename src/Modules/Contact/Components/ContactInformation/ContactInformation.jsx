import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { ContactForm } from "../ContactForm/ContactForm";

export const ContactInformation = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <FiMail className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">
                    <a
                      href="mailto:contact@itacademy.com"
                      className="hover:text-purple-600"
                    >
                      contact@itacademy.com
                    </a>
                  </p>
                  <p className="mt-1 text-slate-600">
                    <a
                      href="mailto:admissions@itacademy.com"
                      className="hover:text-purple-600"
                    >
                      admissions@itacademy.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <FiPhone className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">
                    <a
                      href="tel:+15551234567"
                      className="hover:text-purple-600"
                    >
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="mt-1 text-slate-600">
                    <a
                      href="tel:+15559876543"
                      className="hover:text-purple-600"
                    >
                      +1 (555) 987-6543
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">
                    Location
                  </h3>
                  <p className="mt-1 text-slate-600">
                    123 Tech Street, Suite 200
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <FiClock className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Hours</h3>
                  <p className="mt-1 text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                  "facebook",
                  "twitter",
                  "instagram",
                  "linkedin",
                  "youtube",
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 rounded-full bg-current"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
