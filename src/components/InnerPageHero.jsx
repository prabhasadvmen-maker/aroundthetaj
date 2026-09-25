import React from 'react';
import { motion } from 'framer-motion';

const InnerPageHero = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-300 font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default InnerPageHero;
