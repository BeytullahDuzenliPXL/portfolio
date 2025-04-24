"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Beytullah Duzenli</h3>
            <p className="text-gray-300">IT Student | Web Developer | Applicatieontwikkelaar</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:beytullah.duzenli@student.pxl.be" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-white" />
            </a>
            <a 
              href="https://github.com/BeytullahDuzenliPXL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/beytullah-duzenli-63bb242a7/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white" />
            </a>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Beytullah Duzenli - I-Talent Portfolio - Hogeschool PXL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 