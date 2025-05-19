import { CoreValuesHeader } from "../../../../Components/CoreValuesHeader/CoreValuesHeader";
import { motion } from "framer-motion";
import { TestimonialsData } from "../../../../data/about-data";

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreValuesHeader
          title={"What Our Students Say"}
          text={
            "Don't just take our word for it. Hear from our graduates who have transformed their careers with IT Academy."
          }
          titleColor={"text-white"}
          textColor={"text-purple-100"}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TestimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <div className="text-6xl text-white/20">"</div>
              </div>
              <p className="italic mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-purple-200">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
