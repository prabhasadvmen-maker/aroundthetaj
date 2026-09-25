import React from 'react';
import { motion } from 'framer-motion';

const HotelBookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let message = "Hello Around The Taj, I want to book a Hotel:\n\n";
    formData.forEach((value, key) => {
      message += `*${key}*: ${value}\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919520159043?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d140b3c2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-fixed"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Request Hotel Booking</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">Let us know your stay preferences and we'll arrange the perfect accommodation for your trip.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" name="Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input type="email" name="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                <input type="tel" name="Mobile" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date *</label>
                <input type="date" name="CheckIn" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date *</label>
                <input type="date" name="CheckOut" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                <select name="Guests" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type</label>
                <select name="RoomType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50">
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Suite</option>
                  <option>Luxury</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Destination / Preferred Area</label>
                <input type="text" name="Area" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" placeholder="e.g. Near Taj Mahal" />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Requests</label>
              <textarea name="Message" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50" placeholder="Any special requirements?"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-secondary text-primary font-bold text-lg px-12 py-4 rounded-xl hover:bg-yellow-400 hover:shadow-lg transition-all transform hover:-translate-y-1">
                Request Hotel Booking
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelBookingForm;
