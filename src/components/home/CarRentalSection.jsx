import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Toyota Etios', type: '3+1 Seater', img: '/cars/sedan.png' },
  { id: 2, name: 'Maruti Suzuki Dzire', type: '3+1 Seater', img: '/cars/sedan.png' },
  { id: 3, name: 'Toyota Innova Crysta', type: '5+1 Seater', img: '/cars/suv.png' },
  { id: 4, name: 'Tempo Traveller', type: '9+1 / 12+1 / 16+1', img: '/cars/van.png' },
];

const CarRentalSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Car Rental Services</p>
            <h2 className="text-4xl font-bold text-gray-900">Find Your Perfect Ride<br/>Anywhere, Anytime</h2>
          </div>
          <Link to="/car-rental" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-dark">
            View All Vehicles <LinkIcon size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="h-48 overflow-hidden p-4">
                <img src={car.img} alt={car.name} loading="lazy" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{car.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm font-medium">
                  <Users size={16} className="text-primary" />
                  <span>{car.type}</span>
                </div>
                <Link to="/car-rental" className="block w-full text-center py-2.5 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link to="/car-rental" className="flex justify-center items-center gap-2 text-primary font-bold hover:text-primary-dark">
            View All Vehicles <LinkIcon size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarRentalSection;
