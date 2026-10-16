import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Highlights from './sections/Highlights';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent-purple/30 selection:text-white font-sans text-gray-200">
      {/* Static grid background */}
      <ParticleBackground />

      {/* Navigation Menu */}
      <Navbar />

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Full-screen Hero Banner */}
        <Hero />

        {/* Detailed Biographical Blocks */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Work Timeline */}
        <Experience />

        {/* Projects Grid */}
        <Projects />

        {/* Academic Profile */}
        <Education />

        {/* Professional Certifications (CCNA & Full-Stack) */}
        <Certifications />

        {/* Technical Achievements and Co-curricular Activities */}
        <Highlights />

        {/* Interactive Contact Panel */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

