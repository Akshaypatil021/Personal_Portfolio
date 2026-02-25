import { useState, useEffect, createElement, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
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
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import TechBadge from "../ui/TechBadge";
import { useTheme } from "../../contexts/ThemeContext";
import { handleMouseMove } from "../../utils/mouseGlow";

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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    color: ${isDark ? "#e2e8f0" : "#1f2937"};
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .project-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${isDark ? "#475569" : "#e5e7eb"};
  }

  .project-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${isDark ? "#ffffff" : "#1f2937"};
    margin: 0 0 0.5rem 0;
  }

  .project-tagline, .project-subtitle {
    font-size: 1.1rem;
    color: ${isDark ? "#cbd5e1" : "#6b7280"};
    margin: 0;
    font-weight: 500;
  }

  .project-description {
    font-size: 1.05rem;
    color: ${isDark ? "#e2e8f0" : "#374151"};
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  .project-section {
    margin-bottom: 1.8rem;
  }

  .project-section h4 {
    font-size: 1.2rem;
    color: ${isDark ? "#f1f5f9" : "#1f2937"};
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
    color: ${isDark ? "#e2e8f0" : "#374151"};
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .tech-tags span {
    background-color: ${isDark ? "#1e3a8a" : "#e0f2fe"};
    color: ${isDark ? "#93c5fd" : "#0369a1"};
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
  }

  .feature-item {
    background: ${isDark ? "#1e293b" : "#f9fafb"};
    border: 1px solid ${isDark ? "#334155" : "#e5e7eb"};
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    transition: all 0.2s ease;
  }

  .feature-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .feature-item .icon {
    color: #3b82f6;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  .feature-item h5 {
    margin: 0 0 0.25rem 0;
    font-size: 1rem;
    color: ${isDark ? "#f1f5f9" : "#111827"};
  }

  .feature-item p {
    margin: 0;
    font-size: 0.9rem;
    color: ${isDark ? "#cbd5e1" : "#374151"};
  }

  .code-block {
    background: #1e293b;
    color: #e2e8f0;
    padding: 1rem;
    border-radius: 0.5rem;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.9rem;
    overflow-x: auto;
  }

  .code-block code {
    display: block;
    white-space: pre;
    line-height: 1.6;
  }

  .code-block code:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .project-footer {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${isDark ? "#475569" : "#e5e7eb"};
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    border-radius: 0.375rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    background-color: ${isDark ? "#334155" : "#f3f4f6"};
    color: ${isDark ? "#e2e8f0" : "#374151"};
    border: 1px solid ${isDark ? "#475569" : "#e5e7eb"};
  }

  .project-link.primary {
    background-color: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }

  .project-link:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .project-link.primary:hover {
    background-color: #2563eb;
    border-color: #2563eb;
  }

  .project-link .icon {
    width: 1rem;
    height: 1rem;
  }

  .project-impact {
    background-color: ${isDark ? "#1e3a8a" : "#f0f9ff"};
    border-left: 3px solid #0ea5e9;
    padding: 1rem;
    border-radius: 0 0.375rem 0.375rem 0;
    margin: 1.5rem 0;
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .project-impact .icon {
    color: #0ea5e9;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  .project-impact span {
    font-size: 0.95rem;
    color: ${isDark ? "#93c5fd" : "#075985"};
  }

  .project-roadmap {
    margin-top: 2rem;
    padding: 1.25rem;
    background-color: ${isDark ? "#1e293b" : "#f8fafc"};
    border-radius: 0.5rem;
    border: 1px solid ${isDark ? "#334155" : "#e2e8f0"};
  }

  .roadmap-list {
    margin: 0.75rem 0 0 1.25rem;
    padding: 0;
  }

  .roadmap-list li {
    margin-bottom: 0.5rem;
    color: ${isDark ? "#cbd5e1" : "#1f2937"};
    position: relative;
    padding-left: 1.25rem;
  }

  .roadmap-list li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }

  .how-it-works {
    margin: 1rem 0 0 1.25rem;
    padding: 0;
    list-style-type: none;
    counter-reset: step-counter;
  }

  .how-it-works li {
    margin-bottom: 0.75rem;
    padding-left: 1.75rem;
    position: relative;
    color: ${isDark ? "#e2e8f0" : "#374151"};
  }

  .how-it-works li:before {
    content: counter(step-counter);
    counter-increment: step-counter;
    position: absolute;
    left: 0;
    background-color: #3b82f6;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${isDark ? "#1e293b" : "#f8fafc"};
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    color: ${isDark ? "#cbd5e1" : "#334155"};
    border: 1px solid ${isDark ? "#334155" : "#e2e8f0"};
  }

  .highlight-item .icon {
    color: #3b82f6;
    width: 1rem;
    height: 1rem;
  }

  .project-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1.5rem 0;
  }

  .mission-statement {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: ${isDark ? "#1e3a8a" : "#f0f9ff"};
    padding: 1.25rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
    border-left: 3px solid #0ea5e9;
  }

  .mission-statement .icon {
    color: #0ea5e9;
    margin-top: 0.2rem;
  }

  .mission-statement h4 {
    margin: 0 0 0.5rem 0;
    color: ${isDark ? "#93c5fd" : "#075985"};
  }

  .mission-statement p {
    margin: 0;
    color: ${isDark ? "#bfdbfe" : "#0c4a6e"};
  }

  .impact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .impact-item .icon {
    color: #10b981;
    margin-top: 0.2rem;
  }

  .impact-item h4 {
    margin: 0 0 0.25rem 0;
    color: ${isDark ? "#86efac" : "#065f46"};
  }

  .impact-item p {
    margin: 0;
    color: ${isDark ? "#86efac" : "#047857"};
    font-size: 0.95rem;
  }
  
  .feature-list {
    color: ${isDark ? "#cbd5e1" : "#374151"};
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
  details?: string; // <-- Add this line
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
          <div class="project-subtitle">Hackathon Project: Ethical AI Hiring Solutions</div>
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
          <p class="mt-4 text-sm text-slate-400">The core predictor utilizes a trained Logistic Regression classifier alongside rule-based heuristics and a NLP pipeline for skillset extraction.</p>
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
          <div class="project-subtitle">Academic Content Platform (Jan 2025 – Mar 2025)</div>
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
  const [mounted, setMounted] = useState(false);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const iconElementsRef = useRef<Element[]>([]);

  useEffect(() => {
    setMounted(true);

    // Add styles to document head based on theme
    const styleElement = document.createElement("style");
    styleElement.textContent = getProjectModalStyles(theme === "dark");
    document.head.appendChild(styleElement);
    styleRef.current = styleElement;

    // Initialize icons after a small delay to ensure DOM is ready
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

            // Store reference to the original element
            const originalElement = element;
            const parent = originalElement.parentNode;

            if (parent) {
              // Replace the original element with the icon
              parent.replaceChild(wrapper.firstChild as Node, originalElement);
            }
          }
        }
      });
    }, 100);

    // Clean up
    return () => {
      clearTimeout(timer);
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, [theme]);
  // Removed selectedFilter since we just show all projects
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  // Modal state
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-transparent transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Showcasing my technical projects and applications">
          Key Projects
        </SectionTitle>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
              className="h-full"
            >
              <motion.div
                variants={itemVariants}
                className="bg-[#0b1120] backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-[#1e293b] hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-primary-500/50 transition-all duration-500 flex flex-col h-full cursor-pointer group relative"
                onClick={() => setOpenModal(project.id)}
                onMouseMove={handleMouseMove}
              >
                {/* Dynamic Mouse Tracking Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                  style={{
                    background:
                      "radial-gradient(180px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(99,102,241, 0.25), transparent 80%)",
                  }}
                />

                <div className="h-52 overflow-hidden relative z-10">
                  {/* Image overlay glow */}
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20">
                  {/* Subtle glow behind title */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary-500/20 blur-3xl rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

                  <h3 className="text-xl font-display font-medium text-white group-hover:text-primary-50 tracking-widest mb-3 z-10 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow z-10 group-hover:text-slate-200 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto relative z-20">
                    <div onClick={(e) => e.stopPropagation()}>
                      <Button
                        href={project.github}
                        variant="outline"
                        size="sm"
                        icon={<Github size={16} />}
                        external
                      >
                        GitHub
                      </Button>
                    </div>
                    {project.demo && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <Button
                          href={project.demo}
                          size="sm"
                          icon={<ExternalLink size={16} />}
                          external
                        >
                          Live Demo
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Modal for project details */}
        {openModal && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
            onClick={() => setOpenModal(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-[120]"
                onClick={() => setOpenModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              {(() => {
                const project = projectsData.find((p) => p.id === openModal);
                if (!project) return null;
                if (project.details) {
                  return (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h2>
                      <div
                        className="prose dark:prose-invert max-w-none mb-4"
                        dangerouslySetInnerHTML={{
                          __html: project.details || "",
                        }}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h2>
                      <p className="mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 underline"
                          >
                            Live Link
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 underline"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            href="https://github.com/Akshaypatil021"
            variant="ghost"
            size="lg"
            icon={<Github size={20} />}
            external
          >
            See More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
