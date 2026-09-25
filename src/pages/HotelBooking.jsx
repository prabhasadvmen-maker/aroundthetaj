import React from 'react';
import InnerPageHero from '../components/InnerPageHero';
import HotelBookingForm from '../components/home/HotelBookingForm';
import { motion } from 'framer-motion';
import { Star, Wifi, Coffee, MapPin, CheckCircle } from 'lucide-react';

const hotels = [
  { id: 1, name: 'The Oberoi Amarvilas', category: 'Luxury', rating: 5, price: 'Premium', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'ITC Mughal', category: 'Premium', rating: 5, price: 'High', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Taj Hotel & Convention', category: 'Premium', rating: 5, price: 'High', img: 'https://images.unsplash.com/photo-1542314831-c6a4d140b3c2?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Crystal Sarovar', category: 'Budget / Family', rating: 4, price: 'Affordable', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop' },
];

const HotelBooking = () => {
  const scrollToForm = () => {
    document.getElementById('hotel-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-50">
      <InnerPageHero 
        title="Hotel Booking" 
        subtitle="Find the perfect stay. From budget-friendly comfort to ultra-luxury with Taj Mahal views."
        bgImage="https://images.unsplash.com/photo-1542314831-c6a4d140b3c2?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Featured Hotels */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Handpicked Stays</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Hotels in Agra</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {hotels.map((hotel, idx) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="h-56 relative overflow-hidden">
                <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {hotel.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-1 text-secondary mb-3">
                  {[...Array(hotel.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{hotel.name}</h3>
                
                <div className="flex gap-4 text-gray-400 mb-6 border-b border-gray-50 pb-4">
                  <Wifi size={18} />
                  <Coffee size={18} />
                  <MapPin size={18} />
                </div>
                
                <button onClick={scrollToForm} className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                  Request Booking
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Best Price Guaranteed</h3>
              <p className="text-gray-600">We negotiate the best rates with top hotels to ensure you get the most value for your money.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Flexible Cancellation</h3>
              <p className="text-gray-600">Plans change? No problem. Enjoy flexible booking policies and easy cancellations.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 Customer Care</h3>
              <p className="text-gray-600">Our dedicated support team is available round the clock to assist you during your stay.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="hotel-form">
        <HotelBookingForm />
      </div>
    </div>
  );
};

export default HotelBooking;
