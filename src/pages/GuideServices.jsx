import React, { useState } from 'react';
import InnerPageHero from '../components/InnerPageHero';
import GuideBookingForm from '../components/home/GuideBookingForm';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const guides = [
  { id: 1, name: 'Sumera Khanam', gender: 'Female', languages: ['English', 'Spanish'], exp: '8 Years', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Amit Kumar', gender: 'Male', languages: ['English', 'French'], exp: '10 Years', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Pallavi Upadhyay', gender: 'Female', languages: ['English', 'Italian'], exp: '6 Years', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Naveen Upadhyay', gender: 'Male', languages: ['English', 'German'], exp: '12 Years', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { id: 5, name: 'Jaya Dubey', gender: 'Female', languages: ['English', 'Russian'], exp: '5 Years', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=400&auto=format&fit=crop' },
  { id: 6, name: 'Hemendra Pratap', gender: 'Male', languages: ['English', 'Japanese'], exp: '15 Years', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  { id: 7, name: 'Ranjeet Singh', gender: 'Male', languages: ['English', 'Chinese'], exp: '9 Years', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
  { id: 8, name: 'Bindu Bisht', gender: 'Female', languages: ['English', 'Portuguese'], exp: '7 Years', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
];

const allLanguages = ['All', 'English', 'Spanish', 'French', 'German', 'Italian', 'Russian', 'Japanese', 'Chinese', 'Portuguese'];

const GuideServices = () => {
  const [activeLang, setActiveLang] = useState('All');

  const filteredGuides = activeLang === 'All' 
    ? guides 
    : guides.filter(g => g.languages.includes(activeLang));

  const scrollToForm = () => {
    document.getElementById('guide-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-50">
      <InnerPageHero 
        title="Professional Tour Guides" 
        subtitle="Uncover the hidden stories of Agra with our certified local experts."
        bgImage="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Guide</h2>
          <p className="text-gray-600 text-lg">
            We offer Govt. Approved guides who speak multiple languages. Select your preferred language to find the perfect match for your tour.
          </p>
        </div>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allLanguages.map(lang => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                activeLang === lang 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredGuides.map((guide) => (
              <motion.div 
                key={guide.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow group text-center pb-6"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={guide.img} alt={guide.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <div className="px-6 pt-6 -mt-8 relative z-10">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                    <h3 className="font-bold text-xl text-gray-900">{guide.name}</h3>
                    <p className="text-primary font-medium text-sm">Govt. Approved Guide</p>
                  </div>
                </div>
                <div className="px-6 mt-4 text-sm text-gray-600 space-y-2 mb-6">
                  <p><span className="font-semibold text-gray-800">Experience:</span> {guide.exp}</p>
                  <p><span className="font-semibold text-gray-800">Languages:</span> {guide.languages.join(', ')}</p>
                </div>
                <div className="px-6">
                  <button onClick={scrollToForm} className="w-full bg-primary/10 text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors">
                    Book Guide
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <div id="guide-form">
        <GuideBookingForm />
      </div>
    </div>
  );
};

export default GuideServices;
