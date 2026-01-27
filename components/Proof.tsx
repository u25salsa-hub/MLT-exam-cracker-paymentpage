import React from 'react';

export const Proof: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Trust This Book?</h2>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Written by a Professional</h3>
            <p className="text-teal-600 font-medium mb-4">Working Lab Technician, AIIMS Delhi</p>
            <p className="text-slate-600 italic">
              "I understand exactly what it takes to clear government medical exams because I've done it. This book contains no fluff—only the questions that actually matter for your selection."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};