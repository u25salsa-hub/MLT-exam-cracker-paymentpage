import React from 'react';

interface DiagnosticMVPProps {
  onNavigate: (page: string) => void;
}

export const DiagnosticMVP: React.FC<DiagnosticMVPProps> = ({ onNavigate }) => {
  return (
    <section id="diagnostic-section" className="py-24 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 lg:flex">
          
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="inline-block w-fit px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wide mb-6">
              Live Feature MVP
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Take the 20-MCQ <br/><span className="text-teal-600">Deep-Dive Audit</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Experience the core of Mission MLT today. This isn't just a practice test—it's a one-time diagnostic baseline powered by our preliminary algorithm.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0"></path></svg>
                <span className="font-medium">15-Minute Rapid Assessment</span>
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0"></path></svg>
                <span className="font-medium">Immediate Gap Analysis</span>
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0"></path></svg>
                <span className="font-medium">No Credit Card Required</span>
              </li>
            </ul>

            <button 
              onClick={() => onNavigate('diagnostic')}
              className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 text-center"
            >
              Unlock My Audit Now
            </button>
          </div>

          <div className="lg:w-1/2 bg-slate-50 relative min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center p-8">
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 max-w-sm w-full transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
                   <span className="text-xs font-bold text-slate-400 uppercase">Question 14/20</span>
                   <span className="text-xs font-bold text-red-500">Time: 00:45</span>
                 </div>
                 <p className="text-slate-800 font-medium mb-6">
                   Which of the following is the most specific marker for Acute Myocardial Infarction?
                 </p>
                 <div className="space-y-3">
                   <div className="p-3 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 cursor-pointer">A. CK-MB</div>
                   <div className="p-3 border-teal-500 bg-teal-50 rounded-lg text-sm text-teal-700 font-semibold cursor-pointer flex justify-between">
                     <span>B. Troponin I</span>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <div className="p-3 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 cursor-pointer">C. LDH</div>
                   <div className="p-3 border border-slate-200 rounded-lg text-sm text-slate-500 hover:bg-slate-50 cursor-pointer">D. AST</div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};