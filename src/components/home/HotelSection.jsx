import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Hotel Booking Service</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect Stay<br/>Anywhere, Anytime
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience the best hospitality in Agra. Whether you're looking for a luxury suite with a view of the Taj Mahal or a comfortable budget hotel, we provide the best options tailored to your needs.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Best Price Guarantee</h4>
                  <p className="text-sm text-gray-500">We offer competitive prices for all hotel categories.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Flexible Booking</h4>
                  <p className="text-sm text-gray-500">Easy modifications and cancellations on your stay.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-500">Our team is always available to assist you.</p>
                </div>
              </div>
            </div>

            <Link to="/hotel-booking" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary-dark hover:shadow-lg transition-all group">
              Explore Hotels
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop" alt="Hotel" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop" alt="Room" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop" alt="Interior" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1542314831-c6a4d140b3c2?q=80&w=600&auto=format&fit=crop" alt="Pool" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
