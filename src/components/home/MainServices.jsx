import React from 'react';
import { motion } from 'framer-motion';
import { Car, Hotel, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainServices = () => {
  const services = [
    {
      id: 1,
      title: 'Car Booking',
      description: 'Rent cars with ease. Select car type, pickup and drop location.',
      icon: <Car size={32} />,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
      link: '/car-rental',
    },
    {
      id: 2,
      title: 'Hotel Booking',
      description: 'Discover the best hotel options, compare prices and book your stay.',
      icon: <Hotel size={32} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      link: '/hotel-booking',
    },
    {
      id: 3,
      title: 'Tour Guide Booking',
      description: 'Book professional local guides for a personalized travel experience.',
      icon: <Map size={32} />,
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop',
      link: '/guide-services',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-background relative z-10 -mt-10 rounded-t-[3rem]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">What We Offer</p>
          <h2 className="text-4xl font-bold text-gray-900">Our Primary Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-3 rounded-xl text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-block border-2 border-primary text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MainServices;
