import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Award, Zap, GitBranch, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Accomplishment {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const accomplishmentsData: Accomplishment[] = [
  {
    id: 'leetcode',
    title: '200+ DSA Problems',
    description: 'Solved over 150 coding challenges on LeetCode, demonstrating strong problem-solving and algorithmic skills. Solving more on Gfg and Codeforces.',
    icon: <Code size={22} className="text-[#3B82F6]" />,
  },
  {
    id: 'hackathon',
    title: 'GIT Belgaon Hackathon 2025',
    description: 'GIT Belagavi Hackathon 2025 – built innovative solutions under time constraints, including developing the FairHire AI resume screening model.',
    icon: <Zap size={22} className="text-[#3B82F6]" />,
  },
  {
    id: 'dsa',
    title: 'DSA Contest Participant',
    description: 'Regularly practice Data Structures and Algorithms on LeetCode using Java. Participated in coding contests and continuously work on improving contest rating, problem-solving speed, and algorithmic thinking.',
    icon: <Award size={22} className="text-[#3B82F6]" />,
  },
  {
    id: 'team-leader',
    title: 'Team Leader in College Projects',
    description: 'Led various college-level project teams and actively participated in events, showcasing leadership and collaboration skills.',
    icon: <Users size={22} className="text-[#3B82F6]" />,
  },
  {
    id: 'open-source',
    title: 'Open Source Contributions',
    description: 'Contributed to open-source projects on GitHub by fixing bugs, improving documentation, and enhancing small features. Actively collaborate on personal and community-driven projects.',
    icon: <GitBranch size={22} className="text-[#3B82F6]" />,
  },
  {
    id: 'github-stats',
    title: 'GitHub Stats: Active Contributor',
    description: 'Maintains multiple public repositories on GitHub with consistent recent contributions, showcasing hands-on project work, repository quality, and active development.',
    icon: <Star size={22} className="text-[#3B82F6]" />,
  },
];

const Accomplishments = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="accomplishments" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Header */}
        <SectionTitle subtitle="Key achievements and recognition in my development journey">
          Accomplishments
        </SectionTitle>

        {/* Responsive 3-Column Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {accomplishmentsData.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col items-center group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-[12px] bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] mb-4 shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#C7CDD8] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Accomplishments;