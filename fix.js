const fs = require('fs');
const lines = fs.readFileSync('src/components/sections/Projects.tsx', 'utf8').split('\n');

const newArray = `const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Your Project Title",
    description: "A brief description of your project. Explain what it does and why you built it. Keep it concise but informative.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project",
    demo: "https://yourprojectdemo.com",
    featured: true,
    details: \`<div class="project-modal">
      <div class="project-header">
        <h3 class="project-title">Your Project Title</h3>
        <div class="project-subtitle">Role / Event / Context</div>
      </div>
      
      <p class="project-description">A more detailed description of your project goes here. You can explain the problem it solves, the architecture, and your specific contributions.</p>
      
      <div class="project-section">
        <h4><i data-lucide="target" class="icon"></i> Objective</h4>
        <p>The main goal or objective of this project.</p>
      </div>

      <div class="project-section">
        <h4><i data-lucide="cpu" class="icon"></i> Tech Stack</h4>
        <div class="tech-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
        </div>
      </div>
    </div>
  }
];`;

const newLines = [
  ...lines.slice(0, 422),
  newArray,
  ...lines.slice(868)
];

fs.writeFileSync('src/components/sections/Projects.tsx', newLines.join('\n'));
console.log('Fixed syntax error by replacing the broken projectsArray.');
