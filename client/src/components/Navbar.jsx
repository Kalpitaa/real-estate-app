import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Projects', path: '/upcoming-projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const solidNav = true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl px-5 py-3'
              : 'bg-transparent px-0 py-0'
          }`}
        >

          {/* ── Logo ── */}
          <Link to="/">
            <motion.div
              whileHover="hover"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              {/* Icon badge — spins 360° on hover with spring bounce */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 180, damping: 12 }}
                className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900 flex-shrink-0"
              >
                <FaHome className="text-white text-base" />
              </motion.div>

              {/* Two-tone wordmark — letters stagger in on mount */}
              <span className="text-[1.45rem] font-black tracking-tight leading-none flex">
                {/* "ARK" — dark */}
{"ARK".split("").map((char, i) => (
  <motion.span
    key={`a-${i}`}
    className="text-gray-900 dark:text-white inline-block"
    initial={{ opacity: 0, y: -14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1 + i * 0.045,
      type: 'spring',
      stiffness: 280,
      damping: 18,
    }}
  >
    {char}
  </motion.span>
))}
{/* "HE" — blue */}
{"HE".split("").map((char, i) => (
  <motion.span
    key={`h-${i}`}
    className="text-blue-600 inline-block"
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.42 + i * 0.045,
      type: 'spring',
      stiffness: 280,
      damping: 18,
    }}
  >
    {char}
  </motion.span>
))}
              </span>
            </motion.div>
          </Link>

          {/* ── Desktop: Pill Nav ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center"
          >
            {/* Frosted glass pill container */}
            <div className="flex items-center gap-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/80 dark:border-gray-700/60 rounded-full px-2 py-1.5 shadow-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className="relative"
                    >
                      <motion.span
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`relative inline-flex items-center px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900'
                            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Desktop: Right Controls ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center gap-3"
          >
            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/80 dark:border-gray-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
              aria-label="Toggle dark mode"
            >
              <motion.div
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.4, type: 'spring' }}
              >
                {darkMode
                  ? <FaSun className="text-amber-400 text-sm" />
                  : <FaMoon className="text-gray-500 text-sm" />
                }
              </motion.div>
            </motion.button>

            {/* CTA Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.35)',
                }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold tracking-wide shadow-md shadow-blue-200 dark:shadow-blue-900 transition-colors duration-200"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* ── Mobile: Hamburger ── */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/80 dark:border-gray-700 flex items-center justify-center shadow-sm"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {isOpen
                ? <FaTimes className="text-gray-700 dark:text-white text-base" />
                : <FaBars className="text-gray-700 dark:text-white text-base" />
              }
            </motion.div>
          </motion.button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, type: 'spring', stiffness: 350 }}
              className="md:hidden mt-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/80 dark:border-gray-700/60 shadow-xl p-4 overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.path} variants={itemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600'
                        }`}
                      >
                        <motion.span
                          whileHover={{ x: 4 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="inline-block"
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={itemVariants}
                  className="mt-2 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <motion.div
                      animate={{ rotate: darkMode ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {darkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
                    </motion.div>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </motion.button>

                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md shadow-blue-200 dark:shadow-blue-900"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;