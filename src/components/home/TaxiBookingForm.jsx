import React from 'react';
import { motion } from 'framer-motion';

const TaxiBookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let message = "Hello Around The Taj, I want to book a Car/Taxi:\n\n";
    formData.forEach((value, key) => {
      message += `*${key}*: ${value}\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919520159043?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 text-white">
            <h2 className="text-4xl font-bold mb-6">Book Your Taxi Now</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Fill out the form to request a car booking. We offer a wide range of vehicles for local sightseeing, outstation trips, and airport transfers.
            </p>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="font-bold text-xl mb-2">Need immediate assistance?</h3>
              <p className="text-gray-300 mb-4">Call our 24/7 helpline</p>
              <a href="tel:+919520159043" className="text-3xl font-bold text-secondary">+91 95201 59043</a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                    <input type="tel" name="Mobile" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="+1 234 567 890" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Booking Date *</label>
                    <input type="date" name="Date" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location *</label>
                    <input type="text" name="PickupLocation" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="Hotel Name or Address" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type</label>
                    <select name="VehicleType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50">
                      <option>Toyota Etios (3+1)</option>
                      <option>Maruti Dzire (3+1)</option>
                      <option>Toyota Innova (5+1)</option>
                      <option>Tempo Traveller (9-16 Seater)</option>
                    </select>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message</label>
                  <textarea name="Message" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="Any specific requirements?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-1">
                  Submit Booking Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiBookingForm;
