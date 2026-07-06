import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Header with Blue Accent Bar (10px font size increase in SectionTitle) */}
        <SectionTitle>
          About Me
        </SectionTitle>

        {/* Content Container (Increased font size by 5px) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-left max-w-4xl"
        >
          <div className="space-y-6 text-[#C7CDD8] text-lg sm:text-[21px] leading-[1.85] font-normal">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Backend Developer</strong> passionate about building secure and scalable web applications. My expertise includes PHP, Laravel, Python, MySQL, and Core Java, with hands-on experience in backend development using MVC architecture and RESTful APIs.
            </p>

            <p>
              I enjoy designing efficient database solutions, solving backend challenges, and building AI-powered applications. Currently, I am expanding my knowledge in AWS Cloud and DevOps.
            </p>
          </div>

          {/* Action Button: Download Resume (Increased by 5px) */}
          <div className="mt-10 pt-4 flex items-center">
            <Button
              variant="primary"
              size="lg"
              href={`${import.meta.env.BASE_URL}Akshay_Patil_MCA.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FileText size={19} />}
              className="text-base sm:text-lg px-6 py-3"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
