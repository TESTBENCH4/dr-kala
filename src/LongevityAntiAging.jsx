import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { ArrowLeft, Target, Activity, Zap, Microscope, ChevronRight } from 'lucide-react';

const LongevityAntiAging = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-black selection:text-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow grid lg:grid-cols-12 max-w-[1440px] mx-auto w-full">
        {/* LEFT: Clinical Content (6 Columns) */}
        <div className="lg:col-span-6 px-6 sm:px-10 md:px-16 py-16 lg:py-24 flex flex-col justify-center space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#A69D89]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A69D89]">Mitochondrial Rejuvenation</span>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.8] tracking-tighter">
              Longevity <br />
              <span className="italic font-light text-slate-300">& Anti-Aging.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light italic leading-relaxed max-w-md border-l border-slate-100 pl-8">
              "We reverse biological age by optimizing cellular energy and resilience."
            </p>
          </div>
          {/* The Four Pillars - Improved Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { 
                title: "Mitochondrial Boost", 
                icon: <Zap size={16} />,
                detail: "Enhancing mitochondrial function for increased vitality and longevity." 
              },
              { 
                title: "Senescence Clearance", 
                icon: <Activity size={16} />,
                detail: "Targeted removal of senescent cells to slow aging processes." 
              },
              { 
                title: "Epigenetic Reset", 
                icon: <Microscope size={16} />,
                detail: "Reprogramming gene expression for youthfulness and disease resistance." 
              },
              { 
                title: "Resilience Protocols", 
                icon: <Target size={16} />,
                detail: "Personalized interventions to enhance stress resistance and repair." 
              }
            ].map((item, i) => (
              <div key={i} className="group space-y-3">
                <div className="flex items-center gap-3 text-[#A69D89]">
                  {item.icon}
                  <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]">{item.title}</h4>
                </div>
                <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <button className="group relative flex items-center gap-12 bg-[#1A1A1A] text-white px-10 py-6 rounded-full overflow-hidden transition-all hover:pr-16">
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">Inquire for Assessment</span>
              <ChevronRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#A69D89] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
        {/* RIGHT: Technical Visual (6 Columns) */}
        <div className="lg:col-span-6 bg-[#080808] relative min-h-[600px] flex items-center justify-center p-6 md:p-12 lg:p-20">
          {/* Diagnostic HUD Elements */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          {/* The Content Portal */}
          <div className="relative w-full max-w-lg aspect-[4/5] group">
            <div className="absolute inset-0 bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
              {/* Image with Treatment */}
              <img 
                src="/Longevity & Anti-Aging.png" 
                alt="Longevity & Anti-Aging" 
                className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen group-hover:scale-110 transition-transform duration-[3000ms]"
              />
              {/* Laser Scan Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A69D89]/30 to-transparent h-1/4 w-full -translate-y-full animate-[scan_5s_linear_infinite]" />
              {/* UI Overlays */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-[#A69D89] font-bold tracking-widest uppercase">Analysis: LONGEVITY_04</p>
                  <p className="text-[8px] font-mono text-white/30 tracking-widest uppercase">Target: Biological Age</p>
                </div>
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#A69D89] rounded-full animate-ping" />
                </div>
              </div>
              {/* Dynamic Data Counters */}
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex justify-between items-end border-t border-white/10 pt-4">
                    <div className="space-y-1">
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Youth Index</span>
                      <p className="text-xl font-mono text-white tracking-tighter">0.991 <span className="text-[10px] text-[#A69D89]">+9.1%</span></p>
                    </div>
                    <div className="h-8 w-24 flex items-end gap-1">
                      {[80, 95, 75, 105, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#A69D89]/20 group-hover:bg-[#A69D89]/50 transition-all duration-500" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                 </div>
              </div>
            </div>
            {/* Floating Captions */}
            <div className="absolute -bottom-4 -left-4 bg-white p-6 shadow-2xl rounded-2xl hidden md:block max-w-[180px] border border-slate-50">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-2">Clinical Note</p>
              <p className="text-[10px] leading-relaxed font-medium text-slate-600">
                Protocols aim to <span className="text-black font-bold">restore cellular youth</span> and extend healthspan.
              </p>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default LongevityAntiAging;
