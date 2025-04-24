"use client";

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              Beytullah Duzenli
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            IT Student | Web Developer | Applicatieontwikkelaar
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <FaCode className="w-8 h-8" />
              </div>
              <p className="mt-2 font-medium">Web Dev</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FaLaptopCode className="w-8 h-8" />
              </div>
              <p className="mt-2 font-medium">App Dev</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400">
                <FaServer className="w-8 h-8" />
              </div>
              <p className="mt-2 font-medium">IT Student</p>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#about"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ontdek Meer
            </motion.a>
            
            <motion.a
              href="#selected"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bekijk Selectie
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 