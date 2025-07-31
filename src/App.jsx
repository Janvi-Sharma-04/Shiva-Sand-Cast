import React from 'react';

import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import AboutUs from './component/AboutUs';
import HeroSection from './component/HeroSection';
import InspectionQuality from './component/InspectionQuality';
import Products from './component/Products';
import Services from './component/Services';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <Services />
      <InspectionQuality />
      <Footer />
      {/* <EnquiryForm /> */}
    </>
  );
}

export default App;
