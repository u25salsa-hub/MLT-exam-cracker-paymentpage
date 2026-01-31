import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-3">The Industry Gap</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          The "Static Learning" Trap
        </h3>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Information Overload</h4>
            <p className="text-slate-600 leading-relaxed">
              Traditional books dump 5,000+ uncurated questions on you. You spend 80% of your time on topics you already know and 20% on what actually kills your score.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Zero Feedback Loops</h4>
            <p className="text-slate-600 leading-relaxed">
              Static resources can't tell you <em>why</em> you failed a Hematology question. They lack the data layer to map your performance against national benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};