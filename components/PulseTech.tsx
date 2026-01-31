import React from 'react';

export const PulseTech: React.FC = () => {
  return (
    <section id="pulse-engine" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background Tech Lines */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-block px-3 py-1 bg-teal-900 border border-teal-700 rounded-md text-teal-300 text-xs font-mono mb-6">
              gcp.vertex_ai.deploy_model
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Powered by <span className="text-teal-400">PulseAI™</span> Engine
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't just host questions; we engineer success. Our proprietary logic utilizes <strong className="text-white">Google Cloud's Vertex AI</strong> to create a dynamic knowledge graph of your strengths and weaknesses.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700 mt-1">
                  <span className="text-teal-400 font-bold text-sm">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Micro-Competency Tracking</h3>
                  <p className="text-slate-400 text-sm mt-1">We tag every MCQ with 15+ metadata points (e.g., Clinical Pathology > Hematology > Anemia > Iron Deficiency) to pinpoint exactly where your knowledge breaks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700 mt-1">
                  <span className="text-teal-400 font-bold text-sm">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Data-Driven Performance Mapping</h3>
                  <p className="text-slate-400 text-sm mt-1">Compare your accuracy not just against a passing score, but against the 95th percentile of successful AIIMS candidates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-900 flex items-center justify-center border border-teal-700 mt-1">
                  <span className="text-teal-400 font-bold text-sm">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Scalable Cloud Architecture</h3>
                  <p className="text-slate-400 text-sm mt-1">Built on Google Cloud for 99.9% uptime, ensuring your study sessions are never interrupted, even during peak exam season.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-xl bg-slate-800 border border-slate-700 shadow-2xl p-6 md:p-8">
              <div className="absolute -top-4 -right-4 bg-teal-500 text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg">
                LIVE METRICS
              </div>
              
              <div className="space-y-6 font-mono text-sm">
                <div className="border-b border-slate-700 pb-4">
                  <div className="flex justify-between text-slate-400 mb-2">
                    <span>Performance Audit</span>
                    <span className="text-green-400">COMPLETED</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <span className="block text-slate-500 text-xs">Weakness Detected</span>
                    <span className="block text-red-400 font-bold mt-1">Microbiology / Virology</span>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <span className="block text-slate-500 text-xs">Projected Rank</span>
                    <span className="block text-teal-400 font-bold mt-1">Top 8%</span>
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-300 font-bold">PulseAI Recommendation:</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Based on your last 20 MCQs, shift focus to <strong>Immunoassay Techniques</strong>. 75% of your errors in Biochemistry stem from this sub-topic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};