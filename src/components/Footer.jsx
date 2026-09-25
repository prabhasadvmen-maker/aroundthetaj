import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/Logo.png" alt="Around The Taj Logo" className="h-16 w-auto object-contain brightness-0 invert opacity-90" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted travel partner in Agra. We provide premium car rentals, hotel bookings, and professional tour guides to make your journey unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/car-rental" className="hover:text-secondary transition-colors">Car Rental</Link></li>
              <li><Link to="/guide-services" className="hover:text-secondary transition-colors">Guide Services</Link></li>
              <li><Link to="/hotel-booking" className="hover:text-secondary transition-colors">Hotel Booking</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/car-rental" className="hover:text-secondary transition-colors">Car Rental</Link></li>
              <li><Link to="/hotel-booking" className="hover:text-secondary transition-colors">Hotel Booking</Link></li>
              <li><Link to="/guide-services" className="hover:text-secondary transition-colors">Tour Guide</Link></li>
              <li><Link to="/quick-enquiry" className="hover:text-secondary transition-colors">Tour Packages</Link></li>
              <li><Link to="/quick-enquiry" className="hover:text-secondary transition-colors">Airport Transfer</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span>Taj East Gate Road, Agra, Uttar Pradesh 282001, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <a href="tel:+919520159043" className="hover:text-white transition-colors">+91 95201 59043</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <a href="mailto:info@aroundthetaj.in" className="hover:text-white transition-colors">info@aroundthetaj.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Around The Taj. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
