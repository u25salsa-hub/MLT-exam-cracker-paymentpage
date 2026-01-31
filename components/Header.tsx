import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 blur-sm opacity-20 rounded-full"></div>
            <img 
              src="https://i.ibb.co/qYGNQGNv/Picsart-26-01-26-13-43-08-173-jpg.jpg" 
              alt="Mission MLT Logo" 
              className="relative h-10 w-10 md:h-12 md:w-12 object-contain rounded-full border border-slate-100"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-none tracking-tight">
              Mission MLT
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-teal-600 font-semibold">Powered by PulseAI™</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => {
                 onNavigate('home');
                 setTimeout(() => document.getElementById('pulse-engine')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => {
                 onNavigate('home');
                 setTimeout(() => document.getElementById('roadmap-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              Roadmap
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              About
            </button>
          </nav>
          
          <button 
             onClick={() => {
               onNavigate('home');
               setTimeout(() => {
                 const el = document.getElementById('payment-section');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }, 100);
             }} 
             className="text-sm font-bold bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
             Join Platform
          </button>
        </div>
      </div>
    </header>
  );
};