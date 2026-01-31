import React from 'react';
import { PaymentPlaceholder } from './PaymentPlaceholder';

export const FinalCTA: React.FC = () => {
  return (
    <section id="payment-section" className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900 rounded-full blur-[120px] opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Beta Cohort</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Get immediate access to the 2026 Content Library, the MVP Diagnostic Tool, and lock in your legacy pricing for the future PulseAI™ platform rollout.
        </p>
        
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl inline-block w-full max-w-md border border-white/10 shadow-2xl">
          <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
            <span className="text-teal-400 text-sm font-bold uppercase tracking-wider">Early Adopter Bundle</span>
            <div className="text-right">
              <span className="text-lg text-slate-500 line-through mr-2">₹999</span>
              <span className="text-4xl font-extrabold text-white">₹249</span>
            </div>
          </div>
          
          <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
            <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> Full 2026 E-Book Access</li>
            <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> Priority PulseAI™ Waitlist</li>
            <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> 3 Premium Diagnostic Tests</li>
          </ul>

          <div className="mb-2">
            <PaymentPlaceholder />
          </div>
          <p className="text-xs text-slate-500 mt-4">Secured via Razorpay • 100% Money-Back Guarantee</p>
        </div>
      </div>
    </section>
  );
};