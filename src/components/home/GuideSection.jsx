import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Globe2, Sparkles, ArrowRight } from 'lucide-react';

const GuideSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                alt="Tour Guide Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-secondary text-primary text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                  Top Rated Guides
                </div>
                <h3 className="text-3xl font-bold mb-2">Uncover Hidden Gems</h3>
                <p className="text-white/80">Experience the city like a local.</p>
              </div>
            </div>
            
            {/* Floating Language Badge */}
            <div className="absolute top-10 -left-6 md:-left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">We Speak</p>
              <div className="flex gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">🇬🇧</span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">🇪🇸</span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">🇫🇷</span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">🇩🇪</span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm text-xs font-bold">+6</span>
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
            <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Professional Travel Guide Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Discover more than destinations.
            </h2>
            <p className="text-xl text-gray-700 font-medium mb-6">
              Discover stories, culture, and hidden gems with our expert local guides.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our professional tour guides are passionate about sharing the rich history and culture of Agra. They provide personalized experiences that go beyond the standard tourist trails, ensuring you get the most out of your visit.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Compass size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Expert Local Guides</h4>
                  <p className="text-gray-600">Government-approved, highly knowledgeable guides who know every corner of the city.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Customized Experiences</h4>
                  <p className="text-gray-600">Tailored tours focusing on history, photography, food, or culture based on your interests.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Globe2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Multiple Languages</h4>
                  <p className="text-gray-600">Guides available in English, Spanish, French, German, Italian, Russian, Japanese, and more.</p>
                </div>
              </div>
            </div>

            <Link to="/guide-services" className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-white hover:shadow-lg transition-all group">
              View All Guides
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
