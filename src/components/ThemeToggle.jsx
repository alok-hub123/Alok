import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode since your site has a dark theme

  useEffect(() => {
    // On component mount, check if user has a preference stored
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Update the document class when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-4 z-20 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 shadow-lg"
      aria-label="Toggle theme"
    >
      {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </button>
  );
};

export default ThemeToggle;