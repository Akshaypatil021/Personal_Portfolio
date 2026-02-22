import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, Library } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { handleMouseMove } from '../../utils/mouseGlow';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  details: string[];
  icon: React.ReactNode;
}

const educationData: EducationItem[] = [
  {
    id: 'dyp',
    institution: 'D Y Patil College of Engineering & Managemnet, Kolhapur',
    degree: 'MCA in Computer Application',
    duration: '2025–2027',
    details: [
      'Current CGPA: 8.52',
      'Hands-on experience with Laravel, MySQL, and backend development through academic projects',
      'Regular practice of DSA and problem-solving',
      'Active participation in hackathons and technical events'
    ],
    icon: <GraduationCap size={24} className="text-primary-500" />,
  },
  {
    id: 'wit',
    institution: 'Shivraj College Gadhinglaj, Kolhapur',
    degree: 'BCA in Computer Application',
    duration: '2022–2025',
    details: [
      'CGPA: 8.52',
      'Focused on Computer Science fundamentals, Data Structures, Algorithms, and Software Development',
      'Active participation in technical clubs and hackathons'
    ],
    icon: <GraduationCap size={24} className="text-primary-500" />,
  },
  {
    id: 'wcas',
    institution: 'Jagruti College Gadhinglaj , Kolhapur',
    degree: '12th Board (HSC)',
    duration: '2020–2022',
    details: [
      'HSC Percentage: 80.81%',
      
    ],
    icon: <School size={24} className="text-primary-500" />,
  },
  {
    id: 'mes',
    institution: 'Maharashtra Highschool Atyal ',
    degree: 'SSC (10th Board)',
    duration: '2019–2020',
    details: [
      'Score: 81%',
      'Strong foundation in Mathematics and Science',
      'Participated in various academic competitions'
    ],
    icon: <Library size={24} className="text-primary-500" />,
  },
];

const Education = () => {
  const [selectedId, setSelectedId] = useState('wit');
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <section id="education" className="py-20 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My academic journey and qualifications">
          Education
        </SectionTitle>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {/* Education List */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              {educationData.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedId === item.id
                        ? 'bg-white/10 border-l-[3px] border-primary-500 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                        : 'bg-transparent border-l-[3px] border-transparent hover:bg-white/5 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-3">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className={`font-display font-medium tracking-wide ${
                          selectedId === item.id 
                            ? 'text-white' 
                            : 'text-slate-400'
                        }`}>
                          {item.institution}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.duration}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Education Details */}
          <div className="md:col-span-2">
            {educationData.map((item) => (
              <div key={item.id} className={`${selectedId === item.id ? 'block' : 'hidden'} h-full`}>
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  perspective={1000}
                  scale={1.01}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <motion.div
                    className="bg-[#0b1120] border border-slate-800 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-[#1e293b] hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-primary-500/50 p-8 h-full relative overflow-hidden transition-all duration-300 group/card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onMouseMove={handleMouseMove}
                  >
                {/* Dynamic Mouse Tracking Glow */}
                <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100 z-0" 
                  style={{
                    background: 'radial-gradient(180px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(99,102,241, 0.20), transparent 80%)'
                  }}
                />

                {/* Subtle backglow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-3xl rounded-full pointer-events-none group-hover/card:bg-primary-500/20 transition-colors duration-500 z-0"></div>

                <h3 className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-primary-50 tracking-widest mb-3 relative z-10 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-primary-400 group-hover:text-primary-300 font-medium mb-6 relative z-10 uppercase tracking-widest text-sm transition-colors">
                  {item.institution} | {item.duration}
                </p>
                <ul className="space-y-4 relative z-10">
                  {item.details.map((detail, index) => (
                    <Tilt
                      key={index}
                      tiltMaxAngleX={5}
                      tiltMaxAngleY={5}
                      perspective={500}
                      scale={1.02}
                      transitionSpeed={1500}
                      className="rounded-lg p-2 -mx-2" // Added padding and negative margin for visual effect
                    >
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)] mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                        <span className="text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">{detail}</span>
                      </li>
                    </Tilt>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;