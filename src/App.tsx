import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import Web3Section from './components/Web3Section';
import SecuritySection from './components/SecuritySection';
import FaqSection from './components/FaqSection';
import DownloadSection from './components/DownloadSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    document.title = "PalmPay - Future of Biometric Payments";
  }, []);

  return (
    <div className="font-sans text-slate-900">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <AboutSection />
      <Web3Section />
      <SecuritySection />
      <FaqSection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;