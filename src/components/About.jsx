import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';

function About() {
  const skills = [
    { icon: FaCode, label: 'Building dynamic, scalable front-end applications' },
    { icon: FaLaptopCode, label: 'Crafting pixel-perfect UI designs' },
    { icon: FaMobileAlt, label: 'Ensuring responsive and accessible layouts' },
    { icon: FaServer, label: 'Collaborating effectively with cross-functional teams' }
  ];

  return (
    <section id='about' className="relative min-h-screen py-20 bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[url('BgBlack.jpg')] bg-cover bg-center opacity-20 transition-opacity duration-500 hover:opacity-25" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

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
            I am a  passionate Front-End Developer with a strong focus on creating intuitive, responsive, and visually engaging web experiences. My expertise lies in modern technologies such as React.js, Next.js, HTML, CSS, Tailwind CSS, and Bootstrap, along with hands-on experience in React Native for mobile app development.
            I enjoy turning ideas into clean, functional, and user-friendly interfaces, ensuring that every project I work on delivers both great design and seamless usability. Constantly exploring new tools and techniques, I strive to stay ahead in the ever-evolving web development landscape.
          </motion.p>

          <motion.h3
              className=" font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Specialties:
            </motion.h3>

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
                src="alok.png"
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
