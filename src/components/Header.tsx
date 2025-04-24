"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Voorstelling', href: '#about' },
    { title: 'Activiteiten', href: '#activities' },
    { title: 'Selectie', href: '#selected' },
    { title: 'Reflectie', href: '#reflection' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold"
          variants={itemVariants}
        >
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Beytullah Duzenli
            </span>
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <motion.nav className="hidden md:flex space-x-8" variants={itemVariants}>
          {navItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Link 
                href={item.href}
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-indigo-900/95 backdrop-blur-sm"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="text-white hover:text-cyan-300 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header; 