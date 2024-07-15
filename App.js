import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main>
        <Services />
        <Portfolio />
        <Testimonials />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
