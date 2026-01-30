import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
        <p className="text-slate-600 mb-6">
          Have any questions or need support? We're here to help.
        </p>
        <a 
          href="mailto:support@missionmlt.in" 
          className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 font-medium transition-colors bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 hover:shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span>support@missionmlt.in</span>
        </a>
      </div>
    </section>
  );
};