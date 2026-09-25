import React from 'react';
import { motion } from 'framer-motion';

const GuideBookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let message = "Hello Around The Taj, I want to book a Tour Guide:\n\n";
    formData.forEach((value, key) => {
      message += `*${key}*: ${value}\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919520159043?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-5/12">
              <p className="text-secondary-dark font-bold tracking-wider text-sm mb-2 uppercase">Book a Tour Guide</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Ready to explore with an expert?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the details below and we will connect you with a professional guide who perfectly matches your language preference and interests.
              </p>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Licensed & Verified Guides
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Fluent in 10+ Languages
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Flexible Tour Timings
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-7/12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <input type="text" name="Name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Full Name *" />
                    </div>
                    <div>
                      <input type="email" name="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Email Address *" />
                    </div>
                    <div>
                      <input type="tel" name="Mobile" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Mobile Number *" />
                    </div>
                    <div>
                      <input type="date" name="Date" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                    <div>
                      <select name="Language" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none text-gray-600">
                        <option value="">Preferred Language</option>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Russian</option>
                        <option>Italian</option>
                      </select>
                    </div>
                    <div>
                      <input type="number" name="Travelers" min="1" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Number of Travelers" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea name="Message" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Tour Interests or Special Requests"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-1">
                    Book Guide
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideBookingForm;
