import React, { useState } from 'react'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiCplusplus } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-4xl text-blue-400" />,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" />, description: "Semantic HTML, Accessibility" },
        { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-400" />, description: "Flexbox, Grid, Animations" },
        { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400" />, description: "ES6+, DOM Manipulation" },
        { name: "React", level: 80, icon: <FaReact className="text-blue-300" />, description: "Hooks, Context, Redux" },
        { name: "Next.js", level: 75, icon: <SiNextdotjs />, description: "SSR, API Routes" }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      description: "Creating robust server-side applications",
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" />, description: "Express, REST APIs" },
        { name: "Express.js", level: 75, icon: <SiExpress />, description: "Middleware, Routing" }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-4xl text-blue-500" />,
      description: "Managing and optimizing data storage",
      skills: [
        { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-600" />, description: "Aggregation, Indexing" },
        { name: "MySQL", level: 70, icon: <SiMysql className="text-blue-600" />, description: "Queries, Normalization" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <FaPython className="text-4xl text-blue-500" />,
      description: "Mastering various programming paradigms",
      skills: [
        { name: "Python", level: 85, icon: <FaPython className="text-blue-500" />, description: "Django, Data Science" },
        { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400" />, description: "Full-stack Development" },
        { name: "Java", level: 70, icon: <FaJava className="text-red-500" />, description: "OOP, Spring Boot" },
        { name: "C++", level: 65, icon: <SiCplusplus className="text-blue-500" />, description: "DSA, Problem Solving" }
      ]
    }
  ];

  return (
    <section id="skills" className='min-h-screen py-20 bg-zinc-900 text-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.h2 
          className='text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MdOutlineWorkspacePremium className='text-blue-500 animate-pulse' />
          Skills & Expertise
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative group cursor-pointer p-6 rounded-2xl backdrop-blur-sm transition-all duration-300
                ${selectedCategory === category.title ? 'bg-blue-500/10 ring-2 ring-blue-500/50' : 'bg-zinc-800/50 hover:bg-zinc-800/80'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category.title === selectedCategory ? null : category.title)}
              whileHover={{ scale: 1.02 }}
              layout
            >
              <div className='flex items-center gap-4 mb-4'>
                <motion.div 
                  className='p-3 rounded-xl bg-zinc-700/50 text-blue-400'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className='text-xl font-semibold text-blue-400'>{category.title}</h3>
                  <p className='text-sm text-gray-400'>{category.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {selectedCategory === category.title && (
                  <motion.div 
                    className='space-y-4'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className='relative'
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <div className='flex items-center gap-3 mb-2'>
                          <motion.span 
                            className='text-2xl'
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.icon}
                          </motion.span>
                          <span className='font-medium'>{skill.name}</span>
                          <span className='ml-auto text-sm text-gray-400'>{skill.level}%</span>
                        </div>

                        <div className='relative w-full h-2 bg-zinc-700/50 rounded-full overflow-hidden'>
                          <motion.div 
                            className='absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full'
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                          <motion.div 
                            className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400/20 to-transparent rounded-full'
                            animate={{ 
                              x: ['-100%', '100%'],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>

                        {hoveredSkill === skill.name && (
                          <motion.div 
                            className='absolute -top-12 left-0 w-full bg-zinc-800 text-sm p-2 rounded-lg shadow-xl z-10'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            {skill.description}
                            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-zinc-800 rotate-45'></div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative elements */}
              <div className='absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                <div className='absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl'></div>
                <div className='absolute bottom-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl'></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
