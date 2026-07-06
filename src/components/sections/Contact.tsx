import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/akshay-patil-305a23242/',
    handle: 'linkedin.com/in/akshay-patil',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Akshaypatil021',
    handle: 'github.com/Akshaypatil021',
    icon: Github,
  },
];

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Header */}
        <SectionTitle subtitle="Get in touch with me for opportunities or technical collaboration">
          Contact Me
        </SectionTitle>

        {/* Responsive Two-Column Layout */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {/* LEFT CARD: Personal Contact Information */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 sm:p-7 transition-all duration-300 hover:border-[#3B82F6]/60 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Get In Touch
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                I'm open to backend development roles, cloud &amp; DevOps engineering opportunities, and technical collaborations. Feel free to reach out directly!
              </p>

              {/* Simple Clean Contact Rows without colored background boxes */}
              <div className="space-y-4">
                {/* Email Row */}
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#94A3B8] shrink-0" />
                  <a
                    href="mailto:patils.akshaypatil21@gmail.com"
                    className="text-xs sm:text-sm text-[#C7CDD8] hover:text-[#3B82F6] transition-colors truncate"
                  >
                    patils.akshaypatil21@gmail.com
                  </a>
                </div>

                {/* Location Row */}
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#94A3B8] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#C7CDD8]">
                    Kolhapur, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: Social Connections */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 sm:p-7 transition-all duration-300 hover:border-[#3B82F6]/60 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Connect
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Explore my code repositories, technical profiles, and problem-solving activity across developer platforms.
              </p>

              {/* Simple Bordered Rectangle Rows */}
              <div className="space-y-3">
                {socialLinks.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-[10px] bg-[#050505] border border-[#1F2937] hover:border-[#3B82F6] text-[#C7CDD8] hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className="text-[#94A3B8] group-hover:text-[#3B82F6] transition-colors shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#3B82F6] transition-colors">
                          {platform.name}
                        </span>
                      </div>

                      <ExternalLink size={14} className="text-[#94A3B8] group-hover:text-[#3B82F6] transition-colors shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;