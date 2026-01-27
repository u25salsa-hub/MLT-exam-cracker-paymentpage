import React from 'react';
import { PaymentPlaceholder } from './PaymentPlaceholder';

export const FinalCTA: React.FC = () => {
  return (
    <section id="payment-section" className="py-20 bg-teal-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey to Success Today</h2>
        <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
          Join hundreds of other students mastering the syllabus with the Mission MLT Cracker 2026 Edition.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block w-full max-w-md border border-white/20">
          <div className="flex justify-between items-end mb-6 border-b border-white/20 pb-4">
            <span className="text-teal-200 text-sm">E-book Price</span>
            <div className="text-right">
              <span className="block text-sm text-red-300 line-through decoration-red-300">₹999</span>
              <span className="text-3xl font-bold text-white">₹249</span>
            </div>
          </div>
          <div className="mb-2">
            <PaymentPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};