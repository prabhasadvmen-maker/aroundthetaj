import React from 'react';
import InnerPageHero from '../components/InnerPageHero';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const QuickEnquiry = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let message = "Hello Around The Taj, I have a new enquiry:\n\n";
    formData.forEach((value, key) => {
      message += `*${key}*: ${value}\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919520159043?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full bg-gray-50">
      <InnerPageHero 
        title="Quick Enquiry" 
        subtitle="Have a travel requirement? Tell us what you need and our team will contact you immediately."
        bgImage="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you want to book a car, find a hotel, or need a customized tour package, we are here to help. Reach out to us 24/7.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                <a href="tel:+919520159043" className="text-gray-600 hover:text-primary transition-colors block">+91 95201 59043</a>
                <p className="text-sm text-gray-400 mt-1">Available 24x7</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                <a href="mailto:info@aroundthetaj.in" className="text-gray-600 hover:text-primary transition-colors block">info@aroundthetaj.in</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                <p className="text-gray-600">Taj East Gate Road,<br/>Agra, Uttar Pradesh 282001,<br/>India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                    <input type="tel" name="Mobile" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type *</label>
                    <select name="Service" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50 text-gray-700">
                      <option value="">Select a Service</option>
                      <option>Car Rental</option>
                      <option>Hotel Booking</option>
                      <option>Tour Guide</option>
                      <option>Tour Package</option>
                      <option>Airport Transfer</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Date</label>
                    <input type="date" name="Date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                    <input type="number" name="Travelers" min="1" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50" />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <textarea name="Message" required rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none transition-shadow bg-gray-50" placeholder="Please describe your requirements in detail..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-96 bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d113579.8080517865!2d77.94709403867623!3d27.176156976698993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
};

export default QuickEnquiry;
