import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: 'Accueil',
    href: '#home'
  }, {
    name: 'À Propos',
    href: '#about'
  }, {
    name: 'Événements',
    href: '#events'
  }, {
    name: 'Projets',
    href: '#projects'
  }, {
    name: 'Budget',
    href: '#budget'
  }, {
    name: 'Faire un Don',
    href: '#donate'
  }];
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex items-center">
            <span className="text-2xl font-bold text-green-700">Dahira MBCK Touba Grenoble</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => <motion.button key={link.name} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => scrollToSection(link.href)} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                {link.name}
              </motion.button>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-green-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                  {link.name}
                </button>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};
export default Navigation;