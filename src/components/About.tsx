"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUser, FaLaptopCode, FaLightbulb, FaChartLine } from 'react-icons/fa';

const About = () => {
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
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Voorstelling
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed">
                Mijn naam is Beytullah Duzenli, ik ben 20 jaar oud en woon in Heusden-Zolder. Momenteel zit ik in mijn laatste jaar van de opleiding Applicatieontwikkeling aan Hogeschool PXL. In mijn vrije tijd hang ik graag met vrienden en doe ook graag voetbal, gamen, zwemmen en ik hou ook van auto's.
              </p>
              <p className="text-lg leading-relaxed">
                Mijn sterkste punten zijn dat ik snel leer, logisch nadenk en goed kan omgaan met stress. Ik hou ervan om oplossingen te zoeken die goed passen bij een specifiek probleem.
              </p>
              <p className="text-lg leading-relaxed">
                Over 3 tot 5 jaar hoop ik mijn eigen IT-bedrijf te hebben of smaen met vrienden of familie samen werk aan projecten. Ik wil graag van alles eens gemaakt hebben in de IT-wereld, zoals websites, mobile apps, games en tools die ook echt gebruikt gaan worden door veel mensen.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FaUser className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-6 mt-2">Mijn Vaardigheden & Sterktes</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Website Ontwikkeling</span>
                      <span className="text-indigo-600 dark:text-indigo-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Probleem Analyse</span>
                      <span className="text-indigo-600 dark:text-indigo-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Mobiele Ontwikkeling</span>
                      <span className="text-indigo-600 dark:text-indigo-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Project Management</span>
                      <span className="text-indigo-600 dark:text-indigo-400">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <FaLaptopCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Snel Leren</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ik kan me snel aanpassen aan nieuwe technologieën en frameworks, waardoor ik op de hoogte blijf van de nieuwste trends.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <FaLightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Logisch Denken</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mijn analytische aanpak helpt mij om complexe problemen efficiënt op te lossen en gestroomlijnde oplossingen te creëren.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                <FaChartLine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stress Bestendig</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ik presteer goed onder druk en kan me blijven concentreren bij deadlines of uitdagingen.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 