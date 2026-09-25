import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const CarRental = lazy(() => import('./pages/CarRental'));
const GuideServices = lazy(() => import('./pages/GuideServices'));
const HotelBooking = lazy(() => import('./pages/HotelBooking'));
const QuickEnquiry = lazy(() => import('./pages/QuickEnquiry'));
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="car-rental" element={<CarRental />} />
            <Route path="guide-services" element={<GuideServices />} />
            <Route path="hotel-booking" element={<HotelBooking />} />
            <Route path="quick-enquiry" element={<QuickEnquiry />} />
          </Route>
        </Routes>
      </Suspense>
      <FloatingContact />
    </BrowserRouter>
  );
}

export default App;
