import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">About Us</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
            Empowering the Next Generation of Lab Professionals.
          </p>

          <p className="mb-6">
            Mission MLT is a dedicated EdTech platform designed specifically for Medical Laboratory Technology (MLT) professionals in India. Founded by a healthcare professional working within the ESIC system, we understand the unique challenges of balancing a full-time lab role while preparing for high-stakes government examinations.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Our Vision</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8 rounded-r-lg">
            <p className="italic text-teal-800 font-medium">
              To bridge the gap between clinical practice and competitive excellence. We aim to be the #1 digital resource for aspirants targeting AIIMS CRE, ESIC, and other central government lab technician roles.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-bold text-teal-700 mb-2">Interactive Mock Test Engine</h3>
              <p className="text-sm text-slate-600">A React-powered testing interface that mimics the real exam environment.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-bold text-teal-700 mb-2">Expertly Curated E-books</h3>
              <p className="text-sm text-slate-600">Comprehensive study material covering Microbiology, Hematology, and Clinical Pathology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};