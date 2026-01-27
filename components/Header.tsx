import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://i.ibb.co/qYGNQGNv/Picsart-26-01-26-13-43-08-173-jpg.jpg" 
            alt="MLT Exam Cracker Logo" 
            className="h-12 w-12 object-contain rounded-full border border-slate-100 shadow-sm"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-teal-900 leading-tight">
              MLT Exam Cracker 2026 Edition
            </h1>
          </div>
        </div>
        <div className="hidden md:block">
           <a href="#payment-section" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors">
             Get the Book
           </a>
        </div>
      </div>
    </header>
  );
};