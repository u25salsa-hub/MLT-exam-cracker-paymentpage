import React, { useState, useEffect } from 'react';

interface DiagnosticTestProps {
  onNavigate: (page: string) => void;
}

// Mock Questions for the demo
const QUESTIONS = [
  {
    id: 1,
    question: "Which of the following is the most specific marker for Acute Myocardial Infarction?",
    options: ["CK-MB", "Troponin I", "LDH", "AST"],
    correct: 1,
    subject: "Biochemistry"
  },
  {
    id: 2,
    question: "In which condition is osmotic fragility of Red Blood Cells increased?",
    options: ["Iron Deficiency Anemia", "Thalassemia", "Hereditary Spherocytosis", "Sickle Cell Anemia"],
    correct: 2,
    subject: "Hematology"
  },
  {
    id: 3,
    question: "Which anticoagulant is best suited for osmotic fragility test?",
    options: ["EDTA", "Heparin", "Sodium Citrate", "Sodium Fluoride"],
    correct: 1,
    subject: "Hematology"
  },
  {
    id: 4,
    question: "The infective stage of Entamoeba histolytica is:",
    options: ["Trophozoite", "Precyst", "Quadrinucleate cyst", "Binucleate cyst"],
    correct: 2,
    subject: "Parasitology"
  },
  {
    id: 5,
    question: "Which medium is used for the cultivation of Mycobacterium tuberculosis?",
    options: ["MacConkey Agar", "Lowenstein-Jensen Medium", "Blood Agar", "Chocolate Agar"],
    correct: 1,
    subject: "Microbiology"
  }
];

// Simplified for MVP demo (usually 20, showing 5 for flow demonstration in code, but UI says 20)
const DEMO_QUESTIONS = QUESTIONS;

export const DiagnosticTest: React.FC<DiagnosticTestProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<'intro' | 'test' | 'analyzing' | 'result'>('intro');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  // Analysis Simulation Effect
  useEffect(() => {
    if (phase === 'analyzing') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setPhase('result');
            return 100;
          }
          return prev + 2;
        });
      }, 60); // 3 seconds analysis time
      return () => clearInterval(interval);
    }
  }, [phase]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (currentQIndex < DEMO_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setPhase('analyzing');
    }
  };

  const score = answers.reduce((acc, ans, idx) => {
    return ans === DEMO_QUESTIONS[idx].correct ? acc + 1 : acc;
  }, 0);

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Diagnostic Demo (Live MVP)</h1>
            <p className="text-teal-400 font-mono text-sm">PulseAI™ Engine v1.0.4 Ready</p>
          </div>
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Before you begin:</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                You are about to enter the <span className="font-semibold text-teal-600">PulseAI Interactive Diagnostic</span>. This module allows you to take 20 MCQs right now to receive a baseline analysis.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-sm text-amber-800 font-medium">
                  <strong>Note:</strong> This analysis is a one-time deep-dive designed to provide immediate value and demonstrate our tracking capabilities.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-10 text-slate-700">
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold mr-3">1</span>
                20 High-Yield Questions
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold mr-3">2</span>
                Real-time Micro-Competency Tracking
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold mr-3">3</span>
                Instant AI Performance Audit
              </li>
            </ul>

            <button
              onClick={() => setPhase('test')}
              className="w-full py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Start Diagnostic Audit
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full mt-4 py-2 text-slate-500 text-sm font-medium hover:text-slate-800"
            >
              Cancel and Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'test') {
    const question = DEMO_QUESTIONS[currentQIndex];
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 px-8 py-4 flex justify-between items-center">
            <span className="text-slate-400 text-sm font-mono">Question {currentQIndex + 1} of {DEMO_QUESTIONS.length}</span>
            <span className="text-teal-400 text-sm font-bold">{question.subject}</span>
          </div>
          
          <div className="p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-snug">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all group"
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-teal-500 flex items-center justify-center text-slate-400 group-hover:text-teal-600 font-bold mr-4 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-slate-700 group-hover:text-slate-900 font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 px-8 py-4 border-t border-slate-100">
            <div className="w-full bg-slate-200 rounded-full h-1.5">
              <div 
                className="bg-teal-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentQIndex) / DEMO_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'analyzing') {
    return (
      <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 mb-8 relative">
          <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-teal-500 rounded-full border-t-transparent animate-spin"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl">
            {progress}%
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">PulseAI™ is Analyzing</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          Mapping your responses against the AIIMS CRE competency framework and calculating your national percentile...
        </p>
        <div className="font-mono text-xs text-teal-400 space-y-1">
          <p>{progress > 20 && "> Assessing Hematology accuracy..."}</p>
          <p>{progress > 50 && "> Identifying micro-gaps in Parasitology..."}</p>
          <p>{progress > 80 && "> Generating remediation path..."}</p>
        </div>
      </div>
    );
  }

  // Result Phase
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-8">
          <div className="bg-slate-900 p-8 text-center md:text-left md:flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Diagnostic Audit Complete</h1>
              <p className="text-slate-400 text-sm">Session ID: #AI-MVP-8821</p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1">Projected Score</span>
              <span className="text-4xl font-bold text-teal-400">{score}/{DEMO_QUESTIONS.length}</span>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">PulseAI™ Findings</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    <div>
                      <h4 className="font-bold text-red-800 text-sm">Critical Gap: Parasitology</h4>
                      <p className="text-xs text-red-700 mt-1">You missed basic lifecycle questions. This topic constitutes 12% of the AIIMS exam.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0"></path></svg>
                    <div>
                      <h4 className="font-bold text-green-800 text-sm">Strength: Biochemistry</h4>
                      <p className="text-xs text-green-700 mt-1">Strong conceptual understanding of cardiac markers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Recommended Remediation</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-slate-700">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Review Entamoeba Histolytica Lifecycle
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Practice 50+ Hematology MCQs
                </li>
                <li className="flex items-center text-sm text-slate-700">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Read Chapter 4: Culture Media
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-200">
                 <p className="text-xs text-slate-500 italic">"Based on this trajectory, your estimated percentile is 65%. To reach the top 5%, you need to improve retention in Parasitology."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
          <h2 className="text-2xl font-bold mb-4 relative z-10">Get Full Access to PulseAI™ Insights</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            This was just a demo. Join the platform to unlock the full 1000+ Question Bank, detailed analytics, and the complete 2026 Edition E-Book.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
             <button 
                onClick={() => {
                    onNavigate('home');
                    setTimeout(() => document.getElementById('payment-section')?.scrollIntoView(), 100);
                }}
                className="px-8 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30"
             >
               Get Early Access Bundle (₹249)
             </button>
             <button
                onClick={() => window.location.href = "mailto:sanjay@mltmission.in?subject=Wanting to join waitlist"}
                className="px-8 py-3 bg-transparent border border-slate-600 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
             >
               Join Waitlist
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};