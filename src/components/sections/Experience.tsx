import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { handleMouseMove } from '../../utils/mouseGlow';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
  id: 1,
  title: 'Backend Developer Intern',
  company: 'Official College Project (DYPSEM)',
  location: 'Kolhapur, India',
  period: 'Oct 2025 – Present',
  description: [
    'Developed and maintained backend modules using Laravel (PHP) and MySQL',
    'Designed database schema and implemented CRUD operations for roles, departments, and registrations',
    'Integrated authentication and role-based access control (admin/teacher)',
    'Optimized queries and fixed production-level bugs during development'
  ],
},
  {
  id: 2,
  title: 'AI/ML Project Developer',
  company: 'FairHire AI (Resume Screening System)',
  location: 'Remote',
  period: 'Nov 2025 – Dec 2025',
  description: [
    'Built an AI-powered resume screening system using Python and machine learning techniques',
    'Implemented NLP-based parsing to extract skills, experience, and keywords from resumes',
    'Developed automated candidate scoring and ranking based on job descriptions',
    'Integrated AI models to generate personalized feedback and interview questions for candidates',
    'Improved shortlisting efficiency by reducing manual resume screening effort'
  ],
}
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My professional journey and work experience">
          Experience
        </SectionTitle>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experienceData.map((item) => (
            <Tilt
              key={item.id}
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              scale={1.01}
              transitionSpeed={2500}
              className="group relative"
            >
              <motion.div
                variants={itemVariants}
                className="w-full h-full"
              >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline marker (only visible on md and up) */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                <div className="hidden md:flex flex-col items-center w-12">
                  <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-800 z-10"></div>
                  <div className="w-0.5 flex-grow bg-slate-200 dark:bg-slate-700"></div>
                </div>

                {/* Content */}
                <div 
                  className="bg-[#0b1120] border border-slate-800 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-[#1e293b] hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-primary-500/50 p-8 md:ml-8 flex-1 transition-all duration-300 group-hover:scale-[1.02] transform relative overflow-hidden group/card"
                  onMouseMove={handleMouseMove}
                >
                  {/* Dynamic Mouse Tracking Glow */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100 z-0" 
                    style={{
                      background: 'radial-gradient(180px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(99,102,241, 0.20), transparent 80%)'
                    }}
                  />

                  {/* Subtle backglow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/5 blur-3xl rounded-full pointer-events-none group-hover/card:bg-primary-500/20 transition-colors duration-500 z-0"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 relative z-10">
                    <h3 className="text-2xl font-display font-medium text-white tracking-widest group-hover:text-primary-50 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-primary-400 font-bold uppercase tracking-wider mt-2 sm:mt-0 bg-primary-900/20 px-4 py-1.5 rounded-full border border-primary-500/30 group-hover:border-primary-500/60 group-hover:bg-primary-900/40 transition-colors">
                      <Briefcase size={16} className="mr-2" />
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6 text-sm text-slate-400 font-medium tracking-wide uppercase relative z-10">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-primary-500 group-hover:text-primary-400 transition-colors" />
                      {item.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-primary-500 group-hover:text-primary-400 transition-colors" />
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {item.description.map((desc, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)] mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                        <span className="text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;