import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech?: string[];
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
    tech: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Git']
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Header */}
        <SectionTitle subtitle="My professional journey and work experience">
          Experience
        </SectionTitle>

        {/* Experience Cards Container */}
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
                staggerChildren: 0.15
              }
            }
          }}
        >
          {experienceData.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group"
            >
              {/* Card Header: Job Title, Company, Location & Period */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1F2937]/80">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="text-[#3B82F6] font-semibold text-sm sm:text-base flex items-center gap-1.5">
                      <Building2 size={16} className="shrink-0" />
                      {item.company}
                    </span>
                    <span className="text-[#64748B]">•</span>
                    <span className="text-xs sm:text-sm text-[#94A3B8] flex items-center gap-1">
                      <MapPin size={14} className="shrink-0" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="self-start md:self-center">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#050505] border border-[#1F2937] text-xs font-semibold text-[#94A3B8] group-hover:border-[#3B82F6]/50 group-hover:text-white transition-colors">
                    <Calendar size={14} className="text-[#3B82F6]" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Achievements Bullet Points */}
              <div className="pt-6">
                <ul className="space-y-3">
                  {item.description.map((desc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm sm:text-base text-[#C7CDD8] leading-relaxed">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              {item.tech && item.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#1F2937]/50">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-[#C7CDD8] bg-[#050505] border border-[#1F2937] rounded-[8px] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;