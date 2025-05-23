import { motion } from "framer-motion";
import { ContactFaq } from "../../Data/ContactData";
import { CoreValuesHeader } from "../../../../Components/CoreValuesHeader/CoreValuesHeader";

export const Faq = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreValuesHeader
          title={"Frequently Asked Questions"}
          text={
            "Find answers to common questions about our programs, admissions process, and more."
          }
          titleColor={"text-slate-900"}
          textColor={"text-slate-600"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ContactFaq.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
