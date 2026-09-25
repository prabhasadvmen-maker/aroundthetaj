import React from 'react';
import { PhoneCall, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center hidden md:flex z-50 relative">
      <div className="flex items-center space-x-2">
        <Clock size={16} className="text-secondary" />
        <span className="font-medium">24x7 Available Support</span>
      </div>
      <div className="flex items-center space-x-2">
        <PhoneCall size={16} className="text-secondary" />
        <a href="tel:+919520159043" className="font-bold hover:text-secondary transition-colors">
          +91 95201 59043
        </a>
      </div>
    </div>
  );
};

export default TopBar;
