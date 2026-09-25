import React from 'react';
import InnerPageHero from '../components/InnerPageHero';
import TaxiBookingForm from '../components/home/TaxiBookingForm';
import { motion } from 'framer-motion';
import { Users, Shield, CheckCircle } from 'lucide-react';

const vehicles = [
  { name: 'Toyota Etios', capacity: '3+1 Seater', type: 'Sedan', features: ['AC', 'Luggage Space', 'Comfortable Seats'], img: '/cars/sedan.png' },
  { name: 'Maruti Suzuki Dzire', capacity: '3+1 Seater', type: 'Sedan', features: ['AC', 'Smooth Ride', 'Fuel Efficient'], img: '/cars/sedan.png' },
  { name: 'Maruti Suzuki Ertiga', capacity: '5+1 Seater', type: 'SUV/MUV', features: ['AC', 'Spacious', 'Family Friendly'], img: '/cars/suv.png' },
  { name: 'Toyota Innova Crysta', capacity: '5+1 Seater', type: 'Premium SUV', features: ['AC', 'Extra Legroom', 'Luxury Travel'], img: '/cars/suv.png' },
  { name: 'Kia Carens', capacity: '5+1 Seater', type: 'Premium SUV', features: ['AC', 'Modern Interiors', 'High Safety'], img: '/cars/suv.png' },
  { name: 'Tempo Traveller', capacity: '9+1 to 16+1', type: 'Van / Minibus', features: ['AC', 'Reclining Seats', 'Group Travel'], img: '/cars/van.png' },
  { name: 'Force Urbania', capacity: '9+1 to 16+1', type: 'Luxury Van', features: ['AC', 'Ultra Luxury', 'Spacious Cabin'], img: '/cars/van.png' },
  { name: 'Luxury Bus', capacity: '40 Seater', type: 'Coach', features: ['AC', 'Large Groups', 'Pushback Seats'], img: '/cars/van.png' },
];

const CarRental = () => {
  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-50">
      <InnerPageHero 
        title="Premium Car Rental" 
        subtitle="Find your perfect ride anywhere, anytime in Agra and beyond."
        bgImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Fleet</h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of well-maintained vehicles to suit your specific travel needs. From comfortable sedans for couples to spacious buses for large groups, we ensure a safe and smooth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {vehicles.map((car, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img src={car.img} alt={car.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-secondary-dark uppercase tracking-wider mb-2">{car.type}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">{car.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-700 font-medium mb-4 pb-4 border-b border-gray-100">
                  <Users size={18} className="text-primary" />
                  <span>Capacity: {car.capacity}</span>
                </div>
                
                <ul className="mb-6 space-y-2">
                  {car.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToForm}
                  className="w-full block text-center py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors"
                >
                  Book This Vehicle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Car Rental?</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Shield size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Verified Chauffeurs</h4>
                    <p className="text-primary-100">Professional, experienced, and background-verified drivers for your safety.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Transparent Pricing</h4>
                    <p className="text-primary-100">No hidden costs. What you see is what you pay.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-white/20">
               <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" alt="Driving" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div id="booking-form">
        <TaxiBookingForm />
      </div>
    </div>
  );
};

export default CarRental;
