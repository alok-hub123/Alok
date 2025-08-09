import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ThemeToggle from '../components/ThemeToggle';
// Comment out GSAP imports until you install the core package
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
  // Comment out GSAP animations for now
  // useEffect(() => {
  //   // Register ScrollTrigger plugin
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   // Initialize GSAP animations
  //   gsap.from('section', {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.3,
  //     duration: 1,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: 'section',
  //       start: 'top 80%',
  //     },
  //   });
  // }, []);

  return (
    <div className="relative">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home;
