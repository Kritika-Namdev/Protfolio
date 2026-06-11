import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent-purple/30 selection:text-white font-sans text-gray-200">
      {/* Dynamic Interactive Network Canvas */}
      <ParticleBackground />

      {/* Navigation Menu */}
      <Navbar />

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Full-screen Hero Banner */}
        <Hero />

        {/* Detailed Biographical Blocks */}
        <About />

        {/* Skill Progress Dashboard */}
        <Skills />

        {/* Work Timeline */}
        <Experience />

        {/* Perspective Tilt Projects Grid */}
        <Projects />

        {/* Academic Profile */}
        <Education />

        {/* Professional Certifications (CCNA & Full-Stack) */}
        <Certifications />

        {/* Interactive Contact Panel */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

