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
// Remove ThemeToggle import

function Home() {
  return (
    <div className="relative">
      <Navbar />
      {/* Remove ThemeToggle component from here */}
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
