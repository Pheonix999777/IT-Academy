import { useState } from "react";

const ConsultationModal = ({ isOpen, onClose, defaultCourse = "" }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse,
    message: "",
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
      }));

      alert(
        "Request Submitted! We'll contact you shortly to schedule your free consultation."
      );

      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
          isSubmitting: false,
          isSubmitted: false,
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400";

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} // faqat fon bosilganda modal yopiladi
    >
      <div
        className="bg-white dark:bg-gray-800 dark:text-white rounded-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // modal ichki qismida bosilsa, yopilmasin
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        {!formState.isSubmitted ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Request Free Consultation
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fill out the form below and our education advisor will contact
                you to schedule your free consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="text-sm font-medium">
                  Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formState.course}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a course</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="data-science">Data Science</option>
                  <option value="mobile-dev">Mobile Development</option>
                  <option value="devops">DevOps</option>
                  <option value="cybersecurity">Cybersecurity</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  className={inputClass}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className={`w-full px-6 py-3 rounded-lg bg-purple-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:bg-purple-700 transition-colors flex items-center justify-center ${
                  formState.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {formState.isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Request Submitted!</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Thank you for your interest! Our education advisor will contact
              you shortly to schedule your free consultation.
            </p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
