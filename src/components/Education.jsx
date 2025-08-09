import React, { useEffect, useRef } from 'react';
import { GiBookshelf } from "react-icons/gi";
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaMedal, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const cardsRef = useRef([]);
    
    cardsRef.current = [];
    
    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };
    
    const educationData = [
        {
            id: 1,
            title: "B.Sc. Computer Science",
            period: "2022-2025",
            institution: "Shree Shankar Narayan College of Arts and Commerce",
            location: "Bhyandar East",
            icon: <FaGraduationCap className="text-2xl" />,
            achievements: [
                "First year passed with 9.8 CGPI",
                "Second year passed with 9.8 CGPI",
                "Currently in Third year"
            ],
            type: "Graduation",
            color: "from-blue-500 to-purple-500",
            bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))"
        },
        {
            id: 2,
            title: "Higher Secondary Certificate (HSC)",
            period: "2020-2022",
            institution: "Om Sai High School and Jr. College",
            location: "Tungarphata, Vasai East",
            icon: <FaSchool className="text-2xl" />,
            description: "Passed with 69.50% in Science Stream with subjects Physics, Chemistry, Mathematics, and Biology",
            type: "12th",
            color: "from-green-500 to-teal-500",
            bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))"
        },
        {
            id: 3,
            title: "Secondary School Certificate (SSC)",
            period: "2019-2020",
            institution: "Om Sai High School and Jr. College",
            location: "Tungarphata, Vasai East",
            icon: <FaSchool className="text-2xl" />,
            description: "Passed with 84.6% in SSC",
            type: "10th",
            color: "from-amber-500 to-orange-500",
            bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(249, 115, 22, 0.1))"
        }
    ];

    useEffect(() => {
        const timeline = timelineRef.current;
        const cards = cardsRef.current;
        const section = sectionRef.current;
        
        if (!timeline || !cards.length || !section) return;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 20%",
                scrub: 1,
            }
        });
        
        tl.fromTo(timeline, 
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 1, ease: "power2.inOut" }
        );
        
        cards.forEach((card, index) => {
            gsap.fromTo(card,
                { 
                    opacity: 0,
                    y: 50,
                    x: index % 2 === 0 ? -50 : 50,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
        
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section id="education" className='min-h-screen py-20 bg-gradient-to-b from-black to-zinc-900 text-white relative overflow-hidden' ref={sectionRef}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
            
            <div className='container mx-auto px-4 relative'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className='text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text flex items-center justify-center gap-4'>
                        <GiBookshelf className='text-blue-500' />
                        Education Journey
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My academic path and achievements in the field of Computer Science
                    </p>
                </motion.div>
                
                <div className="relative">
                    <div 
                        ref={timelineRef}
                        className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full'
                    />
                    
                    {educationData.map((item, index) => (
                        <TimelineItem 
                            key={item.id} 
                            item={item} 
                            index={index} 
                            isLast={index === educationData.length - 1}
                            addToRefs={addToRefs}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index, isLast, addToRefs }) {    
    return (
        <div 
            className={`flex items-start mb-20 ${isLast ? 'mb-0' : ''} relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
            <div 
                className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${item.color} rounded-full z-10 shadow-lg flex items-center justify-center border-2 border-white/30 backdrop-blur-sm`}
            >
                {item.icon}
            </div>
            
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div 
                    ref={addToRefs}
                    className={`backdrop-blur-lg bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50 overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group`}
                    style={{ background: item.bgGradient }}
                >
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1500"></div>
                    </div>
                    
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
                    
                    <div className='flex items-center gap-3 mb-4'>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg transform transition-transform group-hover:scale-110 duration-300`}>
                            {item.icon}
                        </div>
                        <h3 className='text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                            {item.type}
                        </h3>
                    </div>
                    
                    <h4 className='text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300'>
                        {item.title}
                    </h4>
                    
                    <div className='space-y-2 text-gray-300'>
                        <div className='flex items-center gap-2 text-sm'>
                            <FaCalendarAlt className="text-blue-500" />
                            <span>{item.period}</span>
                        </div>
                        
                        <div className='flex items-center gap-2 text-sm'>
                            <FaMapMarkerAlt className="text-blue-500" />
                            <span>{item.institution}</span>
                        </div>
                        
                        {item.achievements ? (
                            <div className='mt-4 space-y-2'>
                                {item.achievements.map((achievement, i) => (
                                    <div key={i} className='flex items-center gap-2 text-sm group/item'>
                                        <FaMedal className="text-yellow-500 group-hover/item:rotate-12 transition-transform duration-300" />
                                        <span>{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className='mt-3 text-sm'>{item.description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
