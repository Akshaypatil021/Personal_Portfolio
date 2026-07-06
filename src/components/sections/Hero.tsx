import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-10 pb-16 pl-[40px] pr-6 md:pr-12 max-w-6xl flex flex-col justify-center min-h-[calc(100vh-70px)]">
      
      {/* Section Indicator Bar: | Introduction (10px size increase) */}
      <motion.div 
        className="flex items-center gap-3.5 mb-[75px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-3 h-9 sm:h-11 bg-[#3B82F6] rounded-full inline-block shrink-0" />
        <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold font-sans text-white tracking-tight leading-tight">
          Introduction
        </h2>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex flex-col items-start max-w-4xl">
        
        {/* Name Heading: Hi, I'm Akshay Patil */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="text-[#3B82F6]">Akshay Patil</span>
        </motion.h1>

        {/* Headline Subtitle (Increased by 5px) */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-[26px] font-medium text-[#C7CDD8] mb-6 tracking-wide leading-snug"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Backend Developer &amp; Cloud Enthusiast
        </motion.h2>

        {/* Concise Paragraph (Increased by 5px) */}
        <motion.p 
          className="text-lg sm:text-[21px] text-[#94A3B8] leading-[1.85] mb-9 max-w-3xl font-normal"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I am passionate about developing reliable backend solutions with <strong className="text-slate-900 dark:text-white font-semibold">Python</strong> and continuously expanding my knowledge in <strong className="text-slate-900 dark:text-white font-semibold">Cloud Computing, DevOps, and modern software development</strong>. I enjoy building real-world projects, solving challenging problems, and writing clean, maintainable code.
        </motion.p>

        {/* Action Buttons (Increased size by 5px) */}
        <motion.div 
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="primary" 
            size="lg"
            href="#projects"
            icon={<ArrowRight size={19} />}
            iconPosition="right"
            className="text-base sm:text-lg px-6 py-3"
          >
            View Projects
          </Button>

          <Button 
            variant="secondary" 
            size="lg"
            href={`${import.meta.env.BASE_URL}Akshay_Patil_MCA.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FileText size={19} />}
            className="text-base sm:text-lg px-6 py-3"
          >
            Resume
          </Button>

          <Button 
            variant="secondary" 
            size="lg"
            href="#contact"
            icon={<Mail size={19} />}
            className="text-base sm:text-lg px-6 py-3"
          >
            Contact Me
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;