import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { PulseTech } from './components/PulseTech';
import { DiagnosticMVP } from './components/DiagnosticMVP';
import { Roadmap } from './components/Roadmap';
import { Proof } from './components/Proof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';
import { About } from './components/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <Terms />;
      case 'about':
        return <About />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={() => {
               const el = document.getElementById('diagnostic-section');
               el?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Problem />
            <PulseTech />
            <DiagnosticMVP />
            <Roadmap />
            <Proof />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;