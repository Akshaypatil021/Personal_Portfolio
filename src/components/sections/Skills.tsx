import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Monitor, Database, Wrench, Brain, Cpu, Shield, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <Code2 size={22} className="text-[#3B82F6]" />,
    skills: ['Java', 'Python', 'JavaScript', 'PHP','C' ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Server size={22} className="text-[#3B82F6]" />,
    skills: ['Java',  'PHP', 'Laravel', 'REST APIs', 'Node.js'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Monitor size={22} className="text-[#3B82F6]" />,
    skills: ['HTML', 'CSS', 'JavaScript',  'React'],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: <Database size={22} className="text-[#3B82F6]" />,
    skills: ['MySQL', 'MongoDB', 'Firebase' ,'MongoDB'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: <Shield size={22} className="text-[#3B82F6]" />,
    skills: ['AWS', 'GCP', 'Docker', 'Linux', 'CI/CD Pipelines'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: <Wrench size={22} className="text-[#3B82F6]" />,
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'XAMPP', 'NPM', 'Composer'],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    icon: <Sparkles size={22} className="text-[#3B82F6]" />,
    skills: ['ChatGPT', 'Google Gemini', 'Claude', 'GitHub Copilot'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: <Brain size={22} className="text-[#3B82F6]" />,
    skills: [ 'NLP', 'Ollama (Llama3)', 'Scikit-Learn'],
  },
  {
    id: 'core-cs',
    title: 'Core CS & Concepts',
    icon: <Cpu size={22} className="text-[#3B82F6]" />,
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design (Basics)', 'Database Management', 'Operating Systems', 'Computer Networks'],
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Header */}
        <SectionTitle subtitle="My technical expertise and professional competencies">
          Skills &amp; Tools
        </SectionTitle>

        {/* Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
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
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col justify-between group"
            >
              <div>
                {/* Card Header: Category Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-[10px] bg-[#3B82F6]/10 text-[#3B82F6] shrink-0 border border-[#3B82F6]/20">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags (Rounded Pills) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#C7CDD8] bg-[#050505] border border-[#1F2937] rounded-full hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;