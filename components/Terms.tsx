import React from 'react';

export const Terms: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-700">
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-6">By accessing Mission MLT, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using this site.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h2>
          <p className="mb-4">Permission is granted to download one copy of the Mission MLT ebook for personal, non-commercial transitory viewing only.</p>
          <p className="mb-2">You may not:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Modify or copy the mock test materials.</li>
            <li>Use the materials for any commercial purpose.</li>
            <li>Attempt to decompile or reverse engineer any software (React app) contained on the website.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Disclaimer</h2>
          <p className="mb-6">The materials on Mission MLT are provided on an 'as is' basis. While we strive for accuracy in our AIIMS CRE mock tests, Mission MLT makes no warranties regarding the results of using these materials for competitive exams.</p>
        </div>
      </div>
    </section>
  );
};