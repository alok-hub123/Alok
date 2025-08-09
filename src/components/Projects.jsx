import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiChartdotjs, SiStripe } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { RiComputerLine } from "react-icons/ri";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (tech) => {
    const icons = {
      "React": <FaReact className="text-blue-400" />,
      "Node.js": <FaNodeJs className="text-green-500" />,
      "MongoDB": <SiMongodb className="text-green-400" />,
      "Stripe": <SiStripe className="text-purple-500" />,
      "Firebase": <SiFirebase className="text-yellow-500" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
      "JavaScript": <FaJs className="text-yellow-400" />,
      "Chart.js": <SiChartdotjs className="text-pink-400" />
    };
    return icons[tech] || <RiComputerLine className="text-gray-400" />;
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      longDescription: "Built with modern web technologies, this platform offers a seamless shopping experience with features like real-time inventory management, secure payment processing, and responsive design for all devices.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/alokchaudhary/ecommerce-platform",
      demo: "https://ecommerce-demo.netlify.app",
      image: "/project1.jpg",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
      longDescription: "Streamline your workflow with this intuitive task management solution featuring real-time updates, team collaboration tools, and customizable project boards.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/alokchaudhary/task-manager",
      demo: "https://task-manager-demo.netlify.app",
      image: "/project2.jpg",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information dashboard with forecast data and location search.",
      longDescription: "Stay informed with accurate weather forecasts, interactive maps, and detailed meteorological data. Features include location-based updates and historical weather patterns.",
      technologies: ["JavaScript", "Chart.js"],
      github: "https://github.com/alokchaudhary/weather-dashboard",
      demo: "https://weather-dashboard-demo.netlify.app",
      image: "/project3.jpg",
      color: "from-yellow-500/20 to-orange-500/20"
    },
  ];

  return (
    <section id="projects" className='min-h-screen py-20 bg-zinc-900 text-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.h2 
          className='text-4xl font-bold mb-16 text-center relative'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Featured Projects</span>
          <motion.div 
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className={`group relative rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300
                ${selectedProject === project.id ? 'ring-2 ring-blue-500/50 bg-zinc-800/90' : 'bg-zinc-800/50 hover:bg-zinc-800/70'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              layout
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Project Preview */}
              <div className='relative h-48 overflow-hidden'>
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-zinc-900/90'>
                  <motion.div 
                    className='text-4xl text-blue-400 transform'
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {getProjectIcon(project.technologies[0])}
                  </motion.div>
                </div>
                <motion.div 
                  className='absolute bottom-0 left-0 right-0 p-4 text-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className='text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300'>
                    {project.title}
                  </h3>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className='p-6 relative'>
                <AnimatePresence>
                  {selectedProject === project.id ? (
                    <motion.p
                      className='text-gray-300 mb-4'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.longDescription}
                    </motion.p>
                  ) : (
                    <motion.p
                      className='text-gray-300 mb-4'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Technologies */}
                <div className='flex flex-wrap gap-3 mb-6'>
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      className='flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-700/50 text-sm'
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {getProjectIcon(tech)}
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <div className='flex justify-between items-center'>
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700/30 hover:bg-zinc-700/50 transition-all duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 transition-all duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-20 h-20 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-20 h-20 bg-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
