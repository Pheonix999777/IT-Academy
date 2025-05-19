import { motion } from "framer-motion";
import { TestimonialsData } from "../../Data/HomeData";
export const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Hear from our graduates who have successfully transformed their
            careers with IT Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TestimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-xl dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <div className="text-6xl text-purple-200 dark:text-purple-900/30">
                  "
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
