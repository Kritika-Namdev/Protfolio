import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom inline SVG replacements for brand icons
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Leetcode = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-8-7.728a1.155 1.155 0 0 1 0-1.677l2.697-2.607c.466-.45 1.211-.45 1.677 0a1.155 1.155 0 0 1 0 1.677l-1.859 1.797 6.323 6.108 4.677-4.515a1.155 1.155 0 0 1 1.677 0c.466.45.466 1.21 0 1.677zM20.579 7.42c-.466-.45-1.211-.45-1.677 0L14.225 11.9a1.155 1.155 0 0 1-1.677 0c-.466-.45-.466-1.21 0-1.677l4.677-4.515c.466-.45.466-1.21 0-1.677-.466-.45-1.211-.45-1.677 0l-4.677 4.515a3.465 3.465 0 0 0 0 4.975 3.465 3.465 0 0 0 4.976 0l4.677-4.515c.466-.45.466-1.21 0-1.677z" />
  </svg>
);



export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]/20">
      {/* Background radial accent glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2 block font-mono">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact Me</h2>
          <div className="w-16 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Let's Connect & Collaborate!</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Whether you have a full-stack engineering question, want to chat about CCNA enterprise network design, or have an open role, my inbox is always open. I'll do my best to get back to you as soon as possible!
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">Email Me</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-gray-200 hover:text-accent-purple transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">Call Me</span>
                    <span className="text-sm font-semibold text-gray-200">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">Location</span>
                    <span className="text-sm font-semibold text-gray-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social handles links */}
            <div className="pt-8 border-t border-white/5">
              <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider font-mono mb-4">Follow My Work</span>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/2 border border-white/10 hover:border-accent-purple flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-purple/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/2 border border-white/10 hover:border-accent-purple flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-purple/20 hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/2 border border-white/10 hover:border-accent-purple flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-purple/20 hover:scale-110 transition-all duration-300"
                  title="Leetcode Profile"
                >
                  <Leetcode className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glassmorphism-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300 ${
                          errors.name ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-xs text-red-500 mt-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300 ${
                          errors.email ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="johndoe@example.com"
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-xs text-red-500 mt-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="Hi Kritika, let's talk about..."
                      />
                      {errors.message && (
                        <span className="flex items-center gap-1 text-xs text-red-500 mt-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-accent-purple hover:bg-accent-purple/90 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent-purple/10 hover:shadow-accent-purple/30 hover:glow-purple transition-all duration-300 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                // Success Layout overlay
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Thank You!</h3>
                  <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
                    Your message has been transmitted successfully. I will review it and follow up as quickly as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-accent-purple/40 bg-white/5 hover:bg-accent-purple/10 text-white text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
