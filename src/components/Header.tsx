import { Menu, X, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: 'home', label: 'الرئيسية', to: '/' },
    { id: 'about', label: 'من نحن', to: '/about' },
    { id: 'marketplace', label: 'سوق نُ', to: '/marketplace' },
    { id: 'jobs', label: 'فرص عمل', to: '/jobs' },
    { id: 'training', label: 'التدريب', to: '/training' },
    { id: 'events', label: 'الفعاليات', to: '/events' },
    { id: 'team', label: 'فريق العمل', to: '/team' },
  ];

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' as const }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3, 
        ease: 'easeInOut' as const,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-pink-100/20 border-b border-white/20' 
          : 'bg-white shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-[#7b2145]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-[#7b2145]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Login button — visible on desktop */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-[#7b2145] text-[#7b2145] rounded-lg font-semibold text-sm hover:bg-[#7b2145] hover:text-white transition-all duration-300"
              >
                <LogIn size={16} />
                <span>تسجيل الدخول</span>
              </Link>
            </motion.div>
          </div>

          <div className="flex-1 text-center">
            <Link to="/" className="inline-block">
              <motion.img 
                src="/NooN-LoGo3.png" 
                alt="Logo" 
                className="h-28 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </Link>
          </div>

          <div className="flex-1"></div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex justify-center gap-8 mt-4 md:mt-0">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-2 px-3 font-medium transition-colors duration-300 relative ${
                    isActive
                      ? 'text-[#7b2145]'
                      : 'text-gray-700 hover:text-[#7b2145]'
                  }`
                }
                end={link.to === '/'}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7b2145]"
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navLinks.map((link) => (
                <motion.div key={link.id} variants={mobileItemVariants}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-3 font-medium transition-all duration-300 rounded-lg my-1 ${
                        isActive
                          ? 'text-[#7b2145] bg-pink-50'
                          : 'text-gray-700 hover:text-[#7b2145] hover:bg-pink-50/50'
                      }`
                    }
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants}>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 font-medium text-[#7b2145] bg-pink-50 rounded-lg my-1 text-center"
                >
                  تسجيل الدخول
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
