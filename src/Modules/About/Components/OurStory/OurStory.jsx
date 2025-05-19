import { motion } from "framer-motion";

export const OurStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl">
                <div className="p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">2015</div>
                    <div className="text-xl">Year Founded</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                IT Academy was founded in 2015 by a group of tech industry
                veterans who recognized a significant gap between traditional
                education and the skills needed in the rapidly evolving tech
                industry.
              </p>
              <p>
                What began as a small coding bootcamp with just 15 students has
                grown into a global education platform serving thousands of
                students across more than 30 countries. Our commitment to
                practical, industry-relevant education has remained unchanged.
              </p>
              <p>
                Today, IT Academy offers over 50 courses across various tech
                disciplines, from web development and data science to
                cybersecurity and cloud computing. Our curriculum is constantly
                updated to reflect the latest industry trends and technologies.
              </p>
              <p>
                We're proud of our 95% job placement rate and the success
                stories of our alumni who now work at leading tech companies
                around the world. Our mission continues to be empowering
                individuals with the skills they need to thrive in the digital
                economy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
