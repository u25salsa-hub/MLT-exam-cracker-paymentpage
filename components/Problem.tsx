import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          The Problem
        </h2>
        <p className="text-xl md:text-2xl font-light text-slate-300 mb-10">
          Struggling with vast syllabi and confusing MCQs?
        </p>
        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
          <p>
            Many students study hard but fail because they don't practice the <span className="text-teal-400 font-semibold">right questions</span>.
          </p>
          <p>
            Traditional books are often outdated, bulky, or too expensive for simple revision. You need a targeted approach to clear competitive exams like AIIMS CRE.
          </p>
        </div>
        <div className="mt-12 h-1 w-24 bg-teal-500 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};