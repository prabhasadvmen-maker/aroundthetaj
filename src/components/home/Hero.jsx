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
          className="w-full h-full object-cover"
        >
          <source src="/Hero section vedio.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient overlay just to keep text readable, video remains neat & clean */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white mt-16 drop-shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-5 py-1.5 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-sm font-bold tracking-widest uppercase mb-6"
        >
          WELCOME TO AROUND THE TAJ
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight text-white drop-shadow-2xl"
        >
          Explore Agra. <br />
          <span className="text-secondary drop-shadow-2xl italic">Experience More.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto font-light text-gray-100 drop-shadow-md tracking-wide"
        >
          Cars • Hotels • Tour Guides • Travel Experiences
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link to="/car-rental" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary text-primary font-bold hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg text-lg">
            Book a Car
          </Link>
          <Link to="/guide-services" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white text-white font-bold hover:bg-white hover:text-primary hover:scale-105 transition-all shadow-lg text-lg">
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
