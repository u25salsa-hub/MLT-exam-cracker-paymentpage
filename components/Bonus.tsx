import React from 'react';

export const Bonus: React.FC = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-500 overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Limited Time Offer
          </div>
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2">The Exclusive Bonus</h3>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">3 FREE Online Mock Tests</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Don't just read—practice! Inside the book, you'll get exclusive web access to 3 Interactive Online Mock Tests designed specifically to mimic the <span className="font-semibold text-slate-900">AIIMS CRE computer-based exam environment</span>.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Real-time exam simulation
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Instant score analysis
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Performance tracking
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-teal-100 w-full aspect-square rounded-full flex items-center justify-center p-8">
                <div className="text-center">
                   <span className="block text-4xl font-bold text-teal-600 mb-1">FREE</span>
                   <span className="text-sm font-semibold text-teal-800 uppercase">Worth ₹499</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};