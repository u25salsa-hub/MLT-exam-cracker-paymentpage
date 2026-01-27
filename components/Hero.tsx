import React from 'react';
import { PaymentPlaceholder } from './PaymentPlaceholder';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-100 text-teal-800 font-semibold text-sm tracking-wide">
              #1 Resource for Medical Lab Technicians
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Crack Your <span className="text-teal-600">AIIMS CRE</span> & Govt Exams
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The ultimate guide for aspiring Lab Technicians. Updated for 2026 with 1000+ high-yield MCQs and exclusive online mock tests.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
               <div className="w-full sm:w-auto">
                 <PaymentPlaceholder />
               </div>
            </div>
          </div>

          {/* Book Cover Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="absolute inset-0 bg-teal-200 rounded-full filter blur-3xl opacity-20 transform translate-y-10"></div>
            <img 
              src="https://i.ibb.co/JWV7TcKH/Picsart-26-01-26-11-51-23-273-jpg.jpg" 
              alt="Mission MLT Cracker Book Cover" 
              className="relative w-64 md:w-80 lg:w-96 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
};