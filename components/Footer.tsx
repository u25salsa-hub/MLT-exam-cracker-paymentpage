import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
            <img 
            src="https://i.ibb.co/qYGNQGNv/Picsart-26-01-26-13-43-08-173-jpg.jpg" 
            alt="Logo" 
            className="h-8 w-8 rounded-full opacity-80"
          />
          <span className="font-semibold text-slate-200">Mission MLT Cracker</span>
        </div>
        <p className="text-sm">© 2026 Mission MLT Cracker. All rights reserved.</p>
        <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};