import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Mail, Phone, Github , Linkedin, Code } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setFormStatus('success');
      setFormState(initialFormState);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Get in touch with me for opportunities or collaboration">
          Contact Me
        </SectionTitle>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Contact Information */}
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            scale={1.02}
            transitionSpeed={2000}
            className="h-full"
          >
            <div className="bg-[#0b1120] border border-slate-800 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] hover:border-primary-500/60 p-8 relative overflow-hidden group h-full transition-all duration-300">
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-secondary-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-secondary-500/20 transition-colors duration-700"></div>
            
            <h3 className="text-3xl font-display font-medium text-white tracking-widest mb-8 relative z-10">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary-100 dark:bg-primary-900/50 mr-4">
                  <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Email
                  </h4>
                  <a 
                    href="mailto:patils.akshaypatil21@gmail.com" 
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    patils.akshaypatil21@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary-100 dark:bg-primary-900/50 mr-4">
                  <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Phone
                  </h4>
                  <a 
                    href="tel:+9067572015" 
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +91 90675 72015
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative z-10">
              <h4 className="text-lg font-display font-medium text-white tracking-widest mb-6">
                Find Me Online
              </h4>
              
              <div className="space-y-5">
                <a 
                  href="https://github.com/Akshaypatil021" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-white transition-colors group/link"
                >
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 mr-4 group-hover/link:border-primary-500/50 group-hover/link:shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all">
                    <Github size={18} />
                  </div>
                  <span className="tracking-wider text-sm font-light">github.com/Akshaypatil</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/akshay-patil-305a23242/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-white transition-colors group/link"
                >
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 mr-4 group-hover/link:border-primary-500/50 group-hover/link:shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all">
                    <Linkedin size={18} />
                  </div>
                  <span className="tracking-wider text-sm font-light">linkedin.com/in/akshay-patil</span>
                </a>
                
                <a 
                  href="https://leetcode.com/u/akshay_patil021/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-white transition-colors group/link"
                >
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 mr-4 group-hover/link:border-primary-500/50 group-hover/link:shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all">
                    <Code size={18} />
                  </div>
                  <span className="tracking-wider text-sm font-light">leetcode.com/u/akshay_patil021/</span>
                </a>
              </div>
            </div>
          </div>
          </Tilt>
          
          {/* Contact Form */}
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            scale={1.02}
            transitionSpeed={2000}
            className="h-full"
          >
            <div className="bg-[#0b1120] border border-slate-800 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] hover:border-primary-500/60 p-8 relative overflow-hidden group h-full transition-all duration-300">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-primary-600/10 blur-3xl rounded-full pointer-events-none group-hover:bg-primary-600/20 transition-colors duration-700"></div>

            <h3 className="text-3xl font-display font-medium text-white tracking-widest mb-8 relative z-10">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all font-light"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all font-light"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all font-light resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error! Try Again'}
                </Button>
                
                {formStatus === 'success' && (
                  <p className="mt-3 text-sm text-success-600 dark:text-success-400 text-center">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;