import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-24">
      
      {/* Animated Comet / Ring Background (Full Screen) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <motion.div 
          className="absolute aspect-square rounded-full border border-white/60 shadow-[0_0_30px_rgba(255,255,255,0.2)] bg-gradient-to-b from-white/5 to-transparent"
          initial={{ width: '20%', opacity: 0 }}
          animate={{ width: ['20%', '150%'], opacity: [0, 0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute aspect-square rounded-full border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          initial={{ width: '20%', opacity: 0 }}
          animate={{ width: ['20%', '150%'], opacity: [0, 0.6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 3 }}
        />
        {/* The diagonal comet beam */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[15%] bg-gradient-to-r from-transparent via-primary-400 to-transparent blur-[40px] transform -rotate-[30deg] opacity-30"></div>
        <motion.div 
          className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-4 h-[250px] bg-white rounded-full blur-[2px] transform -rotate-[30deg] shadow-[0_0_50px_10px_rgba(255,255,255,0.8)] z-0"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.div>
      </div>

      {/* Main Content: 2-Column Layout */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full sm:mt-[-5%] mb-20 md:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-widest mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Akshay
              <br />
              Patil.
            </motion.h1>
            
            <motion.p 
              className="text-slate-300 text-base md:text-lg font-light tracking-wide max-w-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Driven MCA undergrad | Backend Developer | AI/ML Enthusiast
              <br /> Skilled in Java, Python, DSA, and modern web tech.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                <Button href="#projects" className="rounded-full bg-white text-black hover:bg-slate-200 px-8 py-3 font-medium tracking-wide">
                  View Projects
                </Button>
                <Button href={`${import.meta.env.BASE_URL}FinalResume2.pdf`} variant="outline" className="rounded-full border-white/20 hover:bg-white/5 text-white px-8 py-3 font-medium tracking-wide" external>
                  Resume
                </Button>
            </motion.div>
          </div>

          {/* Right Side: Profile Photo */}
          <div className="flex justify-center lg:justify-end">
             <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                className="relative"
             >
                <motion.div 
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.3)] backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                    {/* Inner glowing ring on image */}
                    <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full z-20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 via-transparent to-transparent z-10 pointer-events-none rounded-full"></div>
                    <img 
                      src={`${import.meta.env.BASE_URL}Myself.webp`} 
                      alt="Akshay Patil" 
                      className="w-full h-full object-cover object-center relative z-0"
                    />
                </motion.div>
                
                {/* Decorative floating elements */}
                <motion.div 
                  className="absolute top-4 -right-4 md:top-8 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-[#0A0A14] border border-white/10 rounded-full flex items-center justify-center shadow-lg pointer-events-none z-30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 -left-4 md:bottom-12 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-[#0A0A14] border border-white/10 rounded-full flex items-center justify-center shadow-lg pointer-events-none z-30"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                   <div className="w-3 h-3 md:w-4 md:h-4 bg-secondary-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,1)]"></div>
                </motion.div>
             </Tilt>
          </div>

        </div>
      </div>



      {/* Down arrow outside the tablet */}
      <motion.div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#projects" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-white/30 hover:text-white transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;