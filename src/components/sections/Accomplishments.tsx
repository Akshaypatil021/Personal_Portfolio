import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Award, Zap, GitBranch, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { handleMouseMove } from '../../utils/mouseGlow';

interface Accomplishment {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const accomplishmentsData: Accomplishment[] = [
  {
    id: 'leetcode',
    title: '140+ DSA Problems',
    description: 'Solved over 140 coding challenges on LeetCode, demonstrating strong problem-solving and algorithmic skills. Solving more on Gfg and Codeforces',
    icon: <Code size={24} className="text-yellow-500" />,
  },
  {
    id: 'hackathon',
    title: 'GIT Belgaon Hackathon 2025',
    description: 'Finalist, GIT Belagavi Hackathon 2025 – built innovative solutions under time constraints, including developing the FairHire AI resume screening model.',
    icon: <Zap size={24} className="text-purple-500" />,
  },
  {
    id: 'dsa',
    title: 'DSA Contest Participant',
    description: 'Regularly practice Data Structures and Algorithms on LeetCode using Java. Participated in coding contests and continuously work on improving contest rating, problem-solving speed, and algorithmic thinking.',
    icon: <Award size={24} className="text-accent-500" />,
  },
  {
    id: 'team-leader',
    title: 'Team Leader in College Projects',
    description: 'Led various college-level project teams and actively participated in events, showcasing leadership and collaboration skills.',
    icon: <Users size={24} className="text-blue-500" />,
  },
  {
    id: 'open-source',
    title: 'Open Source Contributions',
    description: 'Contributed to open-source projects on GitHub by fixing bugs, improving documentation, and enhancing small features. Actively collaborate on personal and community-driven projects, focusing on clean code, version control, and collaborative development workflows.',
    icon: <GitBranch size={24} className="text-orange-500" />,
  },
  {
    id: 'github-stats',
    title: 'GitHub Stats: Active Contributor',
    description: 'Maintains multiple public repositories on GitHub with consistent recent contributions, showcasing hands-on project work, repository quality, and active participation in collaborative development workflows.',
    icon: <Star size={24} className="text-indigo-500" />,
  },
];

const Accomplishments = () => {
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
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="accomplishments" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Key achievements and recognition in my development journey" 
          align="center"
        >
          Accomplishments
        </SectionTitle>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {accomplishmentsData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:border-primary-500/50 relative overflow-hidden group"
              onMouseMove={handleMouseMove}
            >
              {/* Dynamic Mouse Tracking Glow */}
              <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0" 
                style={{
                  background: 'radial-gradient(150px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(99,102,241, 0.15), transparent 80%)'
                }}
              />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm relative group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-shadow duration-300">
                  {item.icon}
                </div>
              
              <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              
                <p className="text-slate-600 dark:text-slate-300 text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accomplishments;