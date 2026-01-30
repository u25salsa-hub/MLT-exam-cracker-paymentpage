import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="https://i.ibb.co/qYGNQGNv/Picsart-26-01-26-13-43-08-173-jpg.jpg" 
            alt="MLT Exam Cracker Logo" 
            className="h-12 w-12 object-contain rounded-full border border-slate-100 shadow-sm"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-teal-900 leading-tight">
              Mission MLT
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => onNavigate('about')} 
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
          >
            About Us
          </button>
          <button 
             onClick={() => {
               onNavigate('home');
               // Small timeout to allow render before scrolling
               setTimeout(() => {
                 const el = document.getElementById('payment-section');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }, 100);
             }} 
             className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
             Get the Book
          </button>
        </div>
      </div>
    </header>
  );
};