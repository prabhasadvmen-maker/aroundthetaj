import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          poster="https://images.unsplash.com/photo-1564507592208-02df21ead394?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source src="/Hero section vedio.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient overlay just to keep text readable, video remains neat & clean */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 z-10 text-center text-white mt-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-1.5 rounded-full border border-white/30 bg-black/40 text-xs md:text-sm font-bold tracking-widest uppercase mb-6"
        >
          WELCOME TO AROUND THE TAJ
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight text-white"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          Explore Agra. <br />
          <span className="text-secondary italic">Experience More.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-3xl mb-12 max-w-3xl mx-auto font-light text-gray-100 tracking-wide"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
        >
          Cars • Hotels • Tour Guides • Travel Experiences
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
        >
          <Link to="/car-rental" className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary text-primary font-bold hover:bg-yellow-400 hover:scale-105 transition-transform shadow-lg text-lg">
            Book a Car
          </Link>
          <Link to="/guide-services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 border border-white/50 text-white font-bold hover:bg-white hover:text-primary hover:scale-105 transition-transform shadow-lg text-lg">
            Explore Tours
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
