import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/alokchaudhary", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { icon: FaGithub, href: "https://github.com/alokchaudhary", label: "GitHub", color: "hover:bg-[#333]" },
    { icon: FaTwitter, href: "https://twitter.com/alokchaudhary", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold dancing-script bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Alok Chaudhary
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:alok.chaudhary@example.com" className="hover:text-blue-400 transition-colors">
                alok.chaudhary@example.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-px w-4 bg-blue-500/50" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-zinc-800/50 backdrop-blur-sm ${social.color} transition-all duration-300 group`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to my newsletter for the latest updates and insights.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-zinc-800/50 py-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Alok Chaudhary. All rights reserved. 
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in India
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;