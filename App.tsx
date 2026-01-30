import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Bonus } from './components/Bonus';
import { Proof } from './components/Proof';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
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
            <Hero />
            <Problem />
            <Solution />
            <Bonus />
            <Proof />
            <FinalCTA />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;