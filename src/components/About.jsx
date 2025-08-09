import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';

function About() {
  const skills = [
    { icon: FaCode, label: 'Web Development' },
    { icon: FaLaptopCode, label: 'App Design' },
    { icon: FaMobileAlt, label: 'Responsive Design' },
    { icon: FaServer, label: 'Backend Development' },
  ];

  return (
    <section id='about' className="relative min-h-screen py-20 bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('BgBlack.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm Alok
            </motion.h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I am a third-year Computer Science (TYCS) student with a passion for creating innovative digital solutions. My journey in technology is driven by a desire to solve real-world problems through elegant code and intuitive design.
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50 flex items-center gap-3 group hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all duration-300">
                  <skill.icon className="text-xl text-blue-400" />
                </div>
                <span className="font-medium">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="lg:flex-1 w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden border-2 border-zinc-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="alok.jpg" 
                alt="Alok Chaudhary" 
                className="w-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
