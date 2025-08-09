import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Create Something Amazing Together
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-3/5 backdrop-blur-lg bg-zinc-900/50 p-8 rounded-2xl shadow-2xl border border-zinc-800/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field) => (
                <motion.div 
                  key={field}
                  className="relative"
                  initial={false}
                  animate={{
                    scale: focusedField === field ? 1.02 : 1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <label 
                    htmlFor={field}
                    className={`absolute left-3 transition-all duration-300 ${
                      focusedField === field || formData[field]
                        ? '-top-6 text-xs text-blue-400'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      rows="5"
                      className="w-full p-3 rounded-xl bg-zinc-800/50 text-white border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full p-3 rounded-xl bg-zinc-800/50 text-white border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                  )}
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl backdrop-blur-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="w-full lg:w-2/5 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-lg bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Details</h3>
              
              <div className="space-y-6">
                {[
                  { icon: FaEnvelope, label: 'Email', value: 'alok.chaudhary@example.com', href: 'mailto:alok.chaudhary@example.com' },
                  { icon: FaPhone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' }
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-800/50 transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                      <item.icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">{item.label}</h4>
                      <p className="text-lg text-white group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-lg bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-white">Social Links</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/alokchaudhary', color: 'from-[#0077B5] to-[#00A0DC]' },
                  { icon: FaGithub, href: 'https://github.com/alokchaudhary', color: 'from-[#333] to-[#4A4A4A]' },
                  { icon: FaTwitter, href: 'https://twitter.com/alokchaudhary', color: 'from-[#1DA1F2] to-[#0C86D3]' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-br ${item.color} p-4 rounded-xl flex items-center justify-center group hover:shadow-lg transition-all duration-300`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="text-2xl text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;