import React from 'react';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Platform Roadmap</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are building the future of MLT education in real-time. Experience the core today; join the evolution tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0 transform -translate-y-1/2"></div>

          {/* Phase 1 */}
          <div className="relative z-10 bg-white p-6 rounded-xl border-2 border-teal-500 shadow-md">
            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto border-4 border-white">
              1
            </div>
            <div className="text-center">
              <div className="inline-block px-2 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded mb-3">CURRENTLY LIVE</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Foundation & MVP</h3>
              <p className="text-slate-600 text-sm mb-4">
                The Core Content Engine.
              </p>
              <ul className="text-left space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span> 1000+ High-Yield Cloud MCQs
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span> Basic PulseAI™ Diagnostic Audit
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span> E-Book Integration
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative z-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm opacity-90">
             <div className="w-12 h-12 bg-white text-slate-400 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto border-4 border-slate-200">
              2
            </div>
            <div className="text-center">
              <div className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-3">IN DEVELOPMENT</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gamification Layer</h3>
              <p className="text-slate-600 text-sm mb-4">
                Competition drives retention.
              </p>
              <ul className="text-left space-y-2 text-sm text-slate-500">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span> Daily National Leaderboards
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span> Streak-based Rewards
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span> Peer-to-Peer Challenge Mode
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative z-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm opacity-70">
             <div className="w-12 h-12 bg-white text-slate-400 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto border-4 border-slate-200">
              3
            </div>
            <div className="text-center">
              <div className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-3">COMING Q3 2026</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full Adaptive AI</h3>
              <p className="text-slate-600 text-sm mb-4">
                The Vertex AI Full Rollout.
              </p>
              <ul className="text-left space-y-2 text-sm text-slate-500">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span> Automated Remediation Paths
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span> Predictive Exam Readiness Score
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-2">•</span> 1:1 AI Tutor Chatbot
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};