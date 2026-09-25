import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoTestimonial = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-bold tracking-wider text-sm mb-2 uppercase">Traveler Stories</p>
          <h2 className="text-4xl font-bold">Hear From Our Guests</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
          {/* Video Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-gray-700 bg-black">
              <video 
                src="/Vedio.mp4" 
                autoPlay
                loop
                muted
                playsInline
                controls 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Testimonial Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/3 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <div className="text-secondary text-4xl font-serif mb-4">"</div>
            <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
              Our trip to Agra was made absolutely perfect by Around The Taj. The car was spotless, the driver was courteous, and our guide brought the history of the Taj Mahal to life. Highly recommended!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Sarah J." className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white">Sarah Jenkins</h4>
                <p className="text-sm text-gray-400">Traveled from UK</p>
              </div>
            </div>
            
            <button className="mt-8 text-primary font-bold hover:text-secondary transition-colors underline underline-offset-4">
              Watch More Videos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
