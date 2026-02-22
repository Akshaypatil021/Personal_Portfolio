import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Cpu, PenTool as Tool, BarChart, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { handleMouseMove } from '../../utils/mouseGlow';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
  colSpan?: boolean;
}

const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <Code size={24} className="text-primary-500" />,
    skills: ['Java', 'Python', 'JavaScript','PHP'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layers size={24} className="text-primary-500" />,
    skills: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Database and Backend Development',
    icon: <Layers size={24} className="text-primary-500" />,
    skills: [ 'Node.js', 'MongoDB', 'Firebase', 'MySQL','Laravel (PHP)', 'Git & GitHub',
    'API Integration'],
  },
  {
    id: 'ai',
    title: 'AI/ML',
    icon: <Cpu size={24} className="text-primary-500" />,
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: <Tool size={24} className="text-primary-500" />,
    skills: ['Git', 'GitHub', 'REST APIs','XAMPP','NPM',
'Composer', 'Postman', 'Docker', 'CI/CD Pipelines', 'Redis'],
  },
  {
    id: 'concepts',
    title: 'Core CS',
    icon: <BarChart size={24} className="text-primary-500" />,
    colSpan: true,
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Database Management', 
    'Computer Networks',
    'Software Engineering',
    'System Design (Basics)',
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: <Users size={24} className="text-primary-500" />,
    skills: ['Team Leadership', 'Communication', 'Problem-Solving', 'Collaboration', 'Consistency', 'Analytical Thinking', 'Discipline'],
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="My technical expertise and professional competencies" 
          align="center"
        >
          Skills & Capabilities
        </SectionTitle>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillsData.map((category) => (
            <Tilt
              key={category.id}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.03}
              transitionSpeed={1500}
              className={`h-full ${category.colSpan ? 'md:col-span-2 lg:col-span-2 xl:col-span-2' : ''}`}
            >
              <motion.div
                variants={itemVariants}
                className="bg-[#0b1120] border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:bg-[#1e293b] hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-primary-500/50 flex flex-col h-full group relative overflow-hidden"
                onMouseMove={handleMouseMove}
              >
                {/* Dynamic Mouse Tracking Glow */}
                <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0" 
                  style={{
                    background: 'radial-gradient(150px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(99,102,241, 0.25), transparent 80%)'
                  }}
                />
                
                <div className="flex items-center mb-3 relative z-10">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 mr-4 shadow-inner group-hover:bg-primary-500/20 group-hover:border-primary-500/50 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-display font-medium text-white group-hover:text-primary-50 tracking-widest leading-tight transition-colors relative z-10">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 relative z-10">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:border-primary-500/30 group-hover:bg-[#0b1120] hover:!bg-primary-500 hover:!text-white hover:!border-primary-500 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;