import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
              <img 
              src="https://i.ibb.co/qYGNQGNv/Picsart-26-01-26-13-43-08-173-jpg.jpg" 
              alt="Logo" 
              className="h-8 w-8 rounded-full opacity-80 grayscale hover:grayscale-0 transition-all"
            />
            <span className="font-semibold text-slate-300">Mission MLT <span className="text-xs font-normal text-slate-600 ml-1">v2.0 Beta</span></span>
          </div>
          
          <div className="flex space-x-8 text-sm">
              <button onClick={() => onNavigate('about')} className="hover:text-teal-400 transition-colors">About</button>
              <button onClick={() => onNavigate('privacy')} className="hover:text-teal-400 transition-colors">Privacy</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-teal-400 transition-colors">Terms</button>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col items-center">
          <p className="text-xs text-slate-600 text-center mb-4">
            Mission MLT is an independent educational technology platform. 
          </p>
          <p className="text-xs font-mono text-slate-700 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
             Built on Google Cloud Vertex AI
          </p>
          <p className="text-xs mt-6">© 2026 Mission MLT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};