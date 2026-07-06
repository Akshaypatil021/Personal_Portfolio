import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  details: string[];
}

const educationData: EducationItem[] = [
  {
    id: 'dyp',
    institution: 'D Y Patil College of Engineering & Management, Kolhapur',
    degree: 'MCA in Computer Application',
    duration: '2025–2027',
    grade: 'Current CGPA: 9.0',
    details: [
      'Hands-on experience with Laravel, MySQL, and backend development through academic projects',
      'Regular practice of DSA and problem-solving',
      'Active participation in hackathons and technical events'
    ]
  },
  {
    id: 'scg',
    institution: 'Shivraj College Gadhinglaj, Kolhapur',
    degree: 'BCA in Computer Application',
    duration: '2022–2025',
    grade: 'CGPA: 8.52',
    details: [
      'Focused on Computer Science fundamentals, Data Structures, Algorithms, and Software Development',
      'Active participation in technical clubs and hackathons'
    ]
  },
  {
    id: 'jcg',
    institution: 'Jagruti College Gadhinglaj, Kolhapur',
    degree: '12th Board (HSC)',
    duration: '2020–2022',
    grade: 'HSC Percentage: 80.81%',
    details: [
      'Analytical & logical thinking',
      'Basic computer & data handling skills',
      'Strong problem-solving foundation'
    ]
  }
];

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Title with Left Blue Accent Line */}
        <SectionTitle>
          Education
        </SectionTitle>

        {/* Education Cards Stack */}
        <motion.div
          ref={ref}
          className="space-y-6 mt-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 shadow-md transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]"
            >
              {/* Card Top Row: Degree Title (Left) & Year with Calendar Icon (Right) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#94A3B8] shrink-0 font-medium">
                  <Calendar size={15} className="text-[#94A3B8]" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Second Row: Institute Name in Blue */}
              <p className="text-[#3B82F6] font-medium text-sm sm:text-base mb-3">
                {item.institution}
              </p>

              {/* Grade Badge (if present) */}
              {item.grade && (
                <p className="text-xs font-semibold text-[#93C5FD] mb-3">
                  {item.grade}
                </p>
              )}

              {/* Third Row: Existing Details in Light Gray Text */}
              {item.details && item.details.length > 0 && (
                <ul className="space-y-1.5 pt-2 border-t border-[#1F2937]/60">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#C7CDD8] leading-relaxed flex items-start gap-2">
                      <span className="text-[#3B82F6] text-xs font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Education;