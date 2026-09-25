import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { id: 1, name: 'MakeMyTrip', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/MakeMyTrip_Logo.svg/512px-MakeMyTrip_Logo.svg.png' },
    { id: 2, name: 'TripAdvisor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TripAdvisor_Logo.svg/512px-TripAdvisor_Logo.svg.png' },
    { id: 3, name: 'Booking.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Booking.com_logo.svg/512px-Booking.com_logo.svg.png' },
    { id: 4, name: 'Agoda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Agoda_transparent_logo.png/512px-Agoda_transparent_logo.png' },
    { id: 5, name: 'Goibibo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Goibibo_logo.png/512px-Goibibo_logo.png' },
    { id: 6, name: 'Expedia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Expedia_logo.svg/512px-Expedia_logo.svg.png' },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Trusted By Our Partners</h3>
      </div>
      
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.ul 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none gap-8 md:gap-16 whitespace-nowrap"
        >
          {/* Loop twice for continuous scroll effect */}
          {[...partners, ...partners].map((partner, idx) => (
            <li key={idx} className="flex-shrink-0 w-32 md:w-40 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img src={partner.logo} alt={partner.name} className="object-contain max-h-12 w-full" />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Partners;
