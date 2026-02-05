// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Premium Multi-Layer Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F0] via-emerald-50/60 to-teal-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-teal-100/30 via-transparent to-transparent"></div>
      
      {/* Subtle Arabesque Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center min-h-[90vh]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 justify-center px-8 md:pl-20 lg:pl-32 py-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-emerald-600 text-xl md:text-2xl font-medium tracking-[0.3em] uppercase"
          >
            Assalam-u-Alaikum
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[1.1]"
          >
            <p className="text-[#1A1C20] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Explore the
            </p>
            <p className="text-[#1A1C20] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Divine Words
            </p>
            <p className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              of Guidance
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#3A3D42]/70 text-base md:text-lg max-w-lg leading-relaxed mt-4"
          >
            Discover the beauty of the Quran and Hadith — your comprehensive
            source for verses, translations, and audio recitations in Arabic, Urdu
            & English.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 mt-8"
          >
            <a 
              href="/verse" 
              className="group relative px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold tracking-wider uppercase text-sm rounded-lg overflow-hidden shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="relative z-10">Start Reading</span>
              <div className="absolute inset-0 bg-linear-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a 
              href="/About" 
              className="px-8 py-4 border-2 border-[#1A1C20]/20 text-[#1A1C20] font-semibold tracking-wider uppercase text-sm rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all duration-500 hover:-translate-y-1"
            >
              Learn More
            </a>
          </motion.div>
        </div>
        
        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 80,
            damping: 20
          }}
          className="flex-1 flex items-center justify-center p-8 relative"
        >
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-linear-to-br from-emerald-200/40 via-teal-200/30 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <motion.img
            src="/hero.jpg"
            alt="Quran"
            className="relative z-10 max-w-full h-auto max-h-137.5 object-contain rounded-2xl shadow-2xl shadow-[#1A1C20]/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          
          {/* Decorative Border Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-emerald-500/10 rounded-3xl -rotate-3"></div>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
