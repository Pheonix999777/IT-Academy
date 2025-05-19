import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Label } from "../../../../Components/Label.Input/Label-Input";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Send Us a Message
        </h2>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6"
          >
            <p className="font-medium">Thank you for your message!</p>
            <p className="text-sm mt-1">
              We'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Label
              htmlFor={"name"}
              text={"Your Name"}
              type={"text"}
              id={"name"}
              name={"name"}
              formData={formData.name}
              handleChange={handleChange}
              placeholder={"John Doe"}
            />

            <Label
              htmlFor={"email"}
              text={"Email Address"}
              type={"email"}
              id={"email"}
              name={"email"}
              formData={formData.email}
              handleChange={handleChange}
              placeholder={"john@example.com"}
            />

            <Label
              htmlFor={"subject"}
              text={"Subject"}
              type={"text"}
              id={"subject"}
              name={"subject"}
              formData={formData.subject}
              handleChange={handleChange}
              placeholder={"Course Inquiry"}
              false={false}
            />

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg bg-purple-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:bg-purple-700 transition-colors flex items-center justify-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};
