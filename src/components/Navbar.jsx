import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { label: 'ABOUT', href: '#about' },
        { label: 'EDUCATION', href: '#education' },
        { label: 'PROJECTS', href: '#projects' },
        { label: 'CONTACT', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5
        });

        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-black/70 shadow-lg' : 'bg-transparent'}`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='relative group flex-shrink-0'
                    >
                        <div className='absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500'></div>
                        <h1 className='dancing-script text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative'>
                            Alok Chaudhary
                        </h1>
                    </motion.div>

                    {/* Desktop Menu - Center */}
                    <div className='hidden md:flex items-center justify-center flex-grow mx-4'>
                        <motion.div 
                            className='bg-zinc-900/50 backdrop-blur-sm p-1.5 rounded-full border border-zinc-800/50 flex items-center'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeSection === item.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div
                                            layoutId="navbar-active"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {item.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side - Theme Toggle and Mobile Menu */}
                    <div className='flex items-center gap-2'>
                        <div className='hidden md:block'>
                            <ThemeToggle />
                        </div>
                        <motion.button
                            className='md:hidden p-2 rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='md:hidden overflow-hidden bg-zinc-900/95 backdrop-blur-lg rounded-2xl mt-2 border border-zinc-800/50'
                        >
                            <div className='p-4 space-y-3'>
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className={`block px-4 py-2 rounded-lg ${activeSection === item.href.slice(1) ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:bg-zinc-800/50'} transition-all duration-300`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                                <div className='pt-2 px-4'>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;
