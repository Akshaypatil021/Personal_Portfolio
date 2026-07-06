import { useState, useEffect, createElement, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  PlayCircle,
  Target,
  Cpu,
  Settings,
  Wifi,
  RefreshCw,
  Monitor,
  Terminal,
  Zap,
  Star,
  Calendar,
  Video,
  MessageSquare,
  Users,
  Award,
  LayoutGrid,
  Globe,
  Bell,
  Map,
  User,
  Compass,
  Smartphone,
  Code,
  Shield,
  X
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { useTheme } from "../../contexts/ThemeContext";

// Map of icon names to their components
const iconComponents = {
  "play-circle": PlayCircle,
  target: Target,
  cpu: Cpu,
  settings: Settings,
  wifi: Wifi,
  "refresh-cw": RefreshCw,
  monitor: Monitor,
  terminal: Terminal,
  zap: Zap,
  star: Star,
  calendar: Calendar,
  video: Video,
  "message-square": MessageSquare,
  users: Users,
  award: Award,
  "layout-grid": LayoutGrid,
  globe: Globe,
  bell: Bell,
  map: Map,
  user: User,
  compass: Compass,
  smartphone: Smartphone,
  code: Code,
  shield: Shield,
  github: Github,
  "external-link": ExternalLink,
} as const;

// Project modal styles - dynamically generated based on theme
const getProjectModalStyles = (isDark: boolean) => `
  .project-modal {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: ${isDark ? "#C7CDD8" : "#1f2937"};
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .project-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${isDark ? "#1F2937" : "#e5e7eb"};
  }

  .project-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${isDark ? "#ffffff" : "#1f2937"};
    margin: 0 0 0.5rem 0;
  }

  .project-tagline, .project-subtitle {
    font-size: 1.1rem;
    color: ${isDark ? "#3B82F6" : "#2563eb"};
    margin: 0;
    font-weight: 500;
  }

  .project-description {
    font-size: 1rem;
    color: ${isDark ? "#C7CDD8" : "#374151"};
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  .project-section {
    margin-bottom: 1.8rem;
  }

  .project-section h4 {
    font-size: 1.15rem;
    color: ${isDark ? "#ffffff" : "#1f2937"};
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .project-section h4 .icon {
    width: 1.2rem;
    height: 1.2rem;
    color: #3b82f6;
  }

  .project-section p {
    color: ${isDark ? "#C7CDD8" : "#374151"};
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .tech-tags span {
    background-color: #3b82f6;
    color: #ffffff;
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
  details?: string;
}

const projectsData: Project[] = [
  {
    id: "fairhire-ai",
    title: "FairHire AI",
    description: "An AI/ML-driven candidate evaluation platform designed to remove bias, parse resumes, generate live interview questions via Ollama, and assist HR with an analytics dashboard.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "Flask", "Scikit-Learn", "Ollama (Llama3)", "HTML/CSS/JS"],
    github: "https://github.com/Akshaypatil021/Ai_Recruitment_Agent",
    featured: true,
    details: `
      <div class="project-modal">
        <div class="project-header">
          <h3 class="project-title">FairHire AI – Bias-Free AI Recruitment</h3>
          <div class="project-subtitle">Ethical AI Hiring Solutions</div>
        </div>
        
        <p class="project-description">FairHire AI is a comprehensive talent evaluation system engineered to remove human bias from the hiring pipeline. By masking personal identifiers before screening, it uses Machine Learning to classify resumes, extract skills mapped to domain requirements, and generate dynamic interview questions in real-time using Ollama (Llama3).</p>
        
        <div class="project-section">
          <h4><i data-lucide="target" class="icon"></i> The Problem Solved</h4>
          <p>Traditional hiring suffers from human bias, heavy manual screening loads, and a lack of personalized feedback for candidates. FairHire creates a merit-first approach through AI + Ethics.</p>
        </div>

        <div class="project-section">
          <h4><i data-lucide="star" class="icon"></i> Key Features</h4>
          <div class="features-grid">
            <div class="feature-item">
              <i data-lucide="shield" class="icon"></i>
              <div>
                <h5>Bias Removal</h5>
                <p>Anonymizes PII (Name, Email, Contact) before ML screening.</p>
              </div>
            </div>
            <div class="feature-item">
              <i data-lucide="cpu" class="icon"></i>
              <div>
                <h5>Resume Classification</h5>
                <p>ML-powered selection/rejection via Logistic Regression.</p>
              </div>
            </div>
            <div class="feature-item">
              <i data-lucide="message-square" class="icon"></i>
              <div>
                <h5>Live AI Interview</h5>
                <p>Dynamic context-aware questions utilizing Ollama Llama3.</p>
              </div>
            </div>
            <div class="feature-item">
              <i data-lucide="users" class="icon"></i>
              <div>
                <h5>HR Dashboard</h5>
                <p>Analytics, domain metrics, and bar graphs for recruiters.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="project-section">
          <h4><i data-lucide="settings" class="icon"></i> Tech Stack & ML Model</h4>
          <div class="tech-tags">
            <span>Python (Flask)</span>
            <span>Scikit-Learn</span>
            <span>Sentence Transformers</span>
            <span>Ollama AI (Llama3)</span>
            <span>PyPDF2 / python-docx</span>
            <span>Matplotlib</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "syllabushub",
    title: "SyllabusHub",
    description: "A centralized academic content platform offering syllabus, notes, previous-year papers, timetables, and college notices built with PHP MVC and MySQL.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    tech: ["PHP (MVC)", "MySQL", "HTML/CSS/JS"],
    github: "https://github.com/Akshaypatil021/Syllabus_Hub-Project",
    featured: true,
    details: `
      <div class="project-modal">
        <div class="project-header">
          <h3 class="project-title">SyllabusHub: Study Material Management Platform</h3>
          <div class="project-subtitle">Academic Content Platform</div>
        </div>
        
        <p class="project-description">SyllabusHub is a comprehensive and centralized academic ecosystem designed to streamline access to educational resources. It systematically categorizes syllabus materials, study notes, previous-year question papers, timetables, and official college notices in one secure and fast platform.</p>
        
        <div class="project-section">
          <h4><i data-lucide="users" class="icon"></i> Key Highlights</h4>
          <div class="features-grid">
            <div class="feature-item">
              <i data-lucide="layout-grid" class="icon"></i>
              <div>
                <h5>Centralized Architecture</h5>
                <p>Architected a platform serving comprehensive academic content in a highly organized structure.</p>
              </div>
            </div>
            <div class="feature-item">
              <i data-lucide="database" class="icon"></i>
              <div>
                <h5>Hierarchical Workflows</h5>
                <p>Structured complex backend workflows managing course–semester–subject–material hierarchies.</p>
              </div>
            </div>
            <div class="feature-item">
              <i data-lucide="shield" class="icon"></i>
              <div>
                <h5>Role-Based Security</h5>
                <p>Configured secure authentication ensuring strict admin/student permission boundaries.</p>
              </div>
            </div>
            <div class="feature-item">
              <i data-lucide="settings" class="icon"></i>
              <div>
                <h5>Admin Management</h5>
                <p>Built robust admin modules to add, modify, and remove document assets with robust error handling.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="project-section">
          <h4><i data-lucide="code" class="icon"></i> Technology Stack</h4>
          <div class="tech-tags">
            <span>PHP</span>
            <span>MVC Architecture</span>
            <span>MySQL</span>
            <span>HTML/CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    `
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const iconElementsRef = useRef<Element[]>([]);
  const [openModal, setOpenModal] = useState<string | null>(null);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = getProjectModalStyles(theme === "dark");
    document.head.appendChild(styleElement);
    styleRef.current = styleElement;

    const timer = setTimeout(() => {
      iconElementsRef.current = Array.from(
        document.querySelectorAll("[data-lucide]"),
      );

      iconElementsRef.current.forEach((element) => {
        const iconName = element.getAttribute("data-lucide");
        if (iconName && iconName in iconComponents) {
          const Icon = iconComponents[iconName as keyof typeof iconComponents];
          if (Icon) {
            const wrapper = document.createElement("div");
            const iconElement = createElement(Icon);
            const iconMarkup = renderToStaticMarkup(iconElement);
            wrapper.innerHTML = iconMarkup;

            const originalElement = element;
            const parent = originalElement.parentNode;

            if (parent) {
              parent.replaceChild(wrapper.firstChild as Node, originalElement);
            }
          }
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [theme, openModal]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-16 bg-[#050505] text-white">
      <div className="max-w-6xl pl-[40px] pr-6 md:pr-12">
        
        {/* Section Title */}
        <SectionTitle subtitle="Showcasing my technical projects and applications">
          Projects
        </SectionTitle>

        {/* Projects Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
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
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="bg-[#111827] border border-[#1F2937] rounded-[16px] p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col justify-between cursor-pointer group"
              onClick={() => setOpenModal(project.id)}
            >
              <div>
                {/* Top Row: Title & GitHub Icon Link */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-[8px] bg-[#050505] border border-[#1F2937] text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] transition-colors shrink-0"
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                {/* Description Clamped for Equal Height */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tech Tags (Blue Pills) & Action Buttons */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#3B82F6] text-white text-[11px] font-semibold px-2.5 py-1 rounded-[8px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Horizontal Action Links */}
                <div className="flex items-center gap-2 pt-3 border-t border-[#1F2937]/80" onClick={(e) => e.stopPropagation()}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-[#050505] border border-[#1F2937] text-[#C7CDD8] hover:text-white hover:border-[#3B82F6] text-xs font-medium transition-all"
                    >
                      <Github size={14} className="text-[#94A3B8]" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-[#3B82F6] text-white hover:bg-[#60A5FA] text-xs font-semibold transition-all"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for detailed project breakdown */}
        {openModal && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setOpenModal(null)}
          >
            <div
              className="bg-[#111827] border border-[#1F2937] text-white rounded-[16px] shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-[#94A3B8] hover:text-white p-2 rounded-[10px] hover:bg-[#1F2937] transition-colors"
                onClick={() => setOpenModal(null)}
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              {(() => {
                const project = projectsData.find((p) => p.id === openModal);
                if (!project) return null;
                return (
                  <div>
                    {project.details ? (
                      <div
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: project.details }}
                      />
                    ) : (
                      <div>
                        <h2 className="text-2xl font-bold mb-3 text-white">
                          {project.title}
                        </h2>
                        <p className="text-sm text-[#C7CDD8] mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-[#3B82F6] text-white text-xs px-2.5 py-1 rounded-[8px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* View All GitHub Link */}
        <div className="text-center mt-12">
          <Button
            href="https://github.com/Akshaypatil021"
            external
            variant="secondary"
            className="rounded-[12px] bg-[#111827] border border-[#1F2937] text-white hover:border-[#3B82F6] hover:text-[#3B82F6] px-6 py-2.5 text-sm font-medium inline-flex items-center gap-2"
          >
            <Github size={18} />
            <span>See More on GitHub</span>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
