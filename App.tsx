import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Bonus } from './components/Bonus';
import { Proof } from './components/Proof';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Bonus />
        <Proof />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;