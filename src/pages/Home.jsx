import React from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import VideoTestimonial from '../components/home/VideoTestimonial';
import MainServices from '../components/home/MainServices';
import CarRentalSection from '../components/home/CarRentalSection';
import TaxiBookingForm from '../components/home/TaxiBookingForm';
import HotelSection from '../components/home/HotelSection';
import HotelBookingForm from '../components/home/HotelBookingForm';
import GuideSection from '../components/home/GuideSection';
import GuideBookingForm from '../components/home/GuideBookingForm';
import Partners from '../components/home/Partners';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Introduction />
      <VideoTestimonial />
      <MainServices />
      <CarRentalSection />
      <TaxiBookingForm />
      <HotelSection />
      <HotelBookingForm />
      <GuideSection />
      <GuideBookingForm />
      <Partners />
    </div>
  );
};

export default Home;
