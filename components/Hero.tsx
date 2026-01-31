import React from 'react';

interface HeroProps {
  onNavigate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wide mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span>Now Live: PulseAI™ Beta Access</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
            The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">AI-Native</span> Intelligence Platform for AIIMS CRE.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Stop guessing. Start analyzing. Mission MLT leverages <span className="font-semibold text-slate-900">Google Cloud Vertex AI</span> to audit your micro-competencies and predict exam readiness.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={onNavigate}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Start Free AI Diagnostic
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('payment-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Join the Waitlist
            </button>
          </div>

          {/* Tech Badges */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Built On</span>
            <div className="flex items-center gap-2">
               <span className="font-bold text-slate-600">Google Cloud</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-bold text-slate-600">Vertex AI</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="font-bold text-slate-600">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};