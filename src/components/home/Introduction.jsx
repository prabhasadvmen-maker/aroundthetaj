import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1400&auto=format&fit=crop" 
                alt="Taj Mahal Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xl font-bold mb-1">Your trusted travel partner in Agra.</p>
                <div className="w-16 h-1 bg-secondary rounded-full"></div>
              </div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                10+
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-tight">Years of<br/>Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Welcome to Around The Taj</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We create unforgettable travel experiences.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Around The Taj is a premium travel company based in Agra, dedicated to providing exceptional travel services. Whether you need a comfortable ride, a luxurious stay, or an expert guide to uncover the hidden gems of the city, we have you covered.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Premium Car Rental</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Luxury & Budget Hotel Booking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Professional Tour Guides</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Customized Travel Assistance</span>
              </div>
            </div>

            <Link to="/about-us" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary-dark hover:shadow-lg transition-all group">
              More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
