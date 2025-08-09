import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Project Manager",
      company: "TechInnovate Solutions",
      testimonial: "Working with Alok was a fantastic experience. His technical skills and attention to detail resulted in a product that exceeded our expectations. He's a great communicator and problem-solver.",
      rating: 5,
      image: "/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "CTO",
      company: "WebDev Studios",
      testimonial: "Alok delivered our project on time and with exceptional quality. His understanding of both frontend and backend technologies made him an invaluable asset to our development process.",
      rating: 5,
      image: "/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Ananya Desai",
      role: "UI/UX Designer",
      company: "Creative Minds",
      testimonial: "As a designer, I appreciate developers who can bring designs to life exactly as envisioned. Alok has that rare ability to understand design intent and implement it flawlessly.",
      rating: 5,
      image: "/testimonial3.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />
      
      <motion.div 
        className="container mx-auto px-4 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Client Testimonials</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Hear what my clients have to say about their experiences working with me.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div 
                className="h-full backdrop-blur-lg bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50 shadow-xl relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <FaQuoteLeft className="text-4xl text-blue-500/50 mb-6" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                
                <p className="mb-8 text-gray-300 leading-relaxed relative z-10">{testimonial.testimonial}</p>
                
                <motion.div 
                  className="flex items-center"
                  initial={false}
                  animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mr-4 flex items-center justify-center text-xl font-bold shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;