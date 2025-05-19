import { motion } from "framer-motion";

export const AnimatedShowcase = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-slate-800/80 rounded-lg shadow-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-purple-500/30 rounded"></div>
              <div className="h-4 w-1/2 bg-blue-500/30 rounded"></div>
              <div className="h-4 w-5/6 bg-purple-500/30 rounded"></div>
              <div className="h-4 w-2/3 bg-blue-500/30 rounded"></div>
              <div className="mt-6 h-32 w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                <span className="text-white/70 text-sm">{title}</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"
        />
      </div>
    </motion.div>
  );
};
