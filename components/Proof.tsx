import React from 'react';

export const Proof: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Trust This Book?</h2>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-4 overflow-hidden relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Written by Sanjay B, ESIC</h3>
            <p className="text-teal-600 font-medium mb-4">Laboratory Professional</p>
            <p className="text-slate-600 italic mb-6">
              "I understand exactly what it takes to clear government medical exams because I've done it. This book contains no fluff—only the questions that actually matter for your selection."
            </p>
            
            <a 
              href="https://www.linkedin.com/in/sanjay-b-096a93246?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};