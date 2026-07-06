import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Accomplishments from './components/sections/Accomplishments';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Akshay Patil | Backend & DevOps Developer";
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Accomplishments />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;