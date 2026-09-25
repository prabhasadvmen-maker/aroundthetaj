import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Users, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Around The Taj
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-300"
          >
            Your trusted travel partner in Agra. We turn your travel dreams into reality with premium services and unforgettable experiences.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1517427677506-ade074eb14e7?q=80&w=1000&auto=format&fit=crop" alt="Our Team" className="rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-primary mb-1">10+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Who We Are</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Agra's Premier Travel Company</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Around The Taj is a dedicated travel and tourism company based in the heart of Agra. We specialize in providing comprehensive travel solutions including luxury car rentals, comfortable hotel accommodations, and professional tour guide services.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Our mission is to showcase the beauty and heritage of Agra and surrounding regions while ensuring absolute comfort, safety, and satisfaction for our guests from around the globe.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-bold text-gray-800">Car Rentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-bold text-gray-800">Hotel Bookings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-bold text-gray-800">Tour Guides</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="font-bold text-gray-800">Custom Packages</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">The Around The Taj Advantage</p>
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MapPin size={32} />, title: 'Local Expertise', desc: 'Deep knowledge of Agra, ensuring you visit the best spots at the right time.' },
              { icon: <Clock size={32} />, title: '24/7 Support', desc: 'Our team is always on standby to assist you at any point during your journey.' },
              { icon: <Users size={32} />, title: 'Professional Guides', desc: 'Govt. approved guides who speak multiple languages and know the history.' },
              { icon: <Shield size={32} />, title: 'Safe & Comfortable', desc: 'Well-maintained fleet of vehicles driven by experienced, verified chauffeurs.' },
              { icon: <CheckCircle size={32} />, title: 'Flexible Booking', desc: 'Easy booking process with transparent pricing and flexible cancellation policies.' },
              { icon: <Heart size={32} />, title: 'Personalized Service', desc: 'We tailor every experience to match your unique travel preferences and pace.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1564507592208-02df21ead394?q=80&w=1000&auto=format&fit=crop')] bg-cover"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-primary-100 text-lg">Contact us today and let us plan the perfect Agra itinerary for you.</p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link to="/quick-enquiry" className="px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-xl">
              Send an Enquiry
            </Link>
            <a href="tel:+919520159043" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/30 backdrop-blur-sm">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
