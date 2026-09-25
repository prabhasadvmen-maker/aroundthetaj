import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Car Rental', path: '/car-rental' },
    { name: 'Guide Services', path: '/guide-services' },
    { name: 'Hotel Booking', path: '/hotel-booking' },
    { name: 'Quick Enquiry', path: '/quick-enquiry' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-colors duration-200 ${
          scrolled ? 'bg-white shadow-md py-3 top-0' : 'bg-transparent py-4 top-0 md:top-10'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Logo.png" alt="Around The Taj Logo" className="h-12 md:h-16 w-auto object-contain drop-shadow-md" />
            <span className={`hidden md:block text-2xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
              Around The Taj
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `font-medium text-sm transition-colors ${
                        isActive
                          ? 'text-secondary font-bold'
                          : scrolled
                          ? 'text-gray-700 hover:text-primary'
                          : 'text-white hover:text-secondary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <Link
              to="/car-rental"
              className={`px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <img src="/Logo.png" alt="Around The Taj Logo" className="h-10 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-600">
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col p-6 space-y-6 flex-grow">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-semibold border-b pb-2 ${
                      isActive ? 'text-primary' : 'text-gray-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 mb-2">Need Help?</p>
                <a href="tel:+919520159043" className="flex items-center gap-3 text-primary font-bold text-xl">
                  <PhoneCall size={24} />
                  +91 95201 59043
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
