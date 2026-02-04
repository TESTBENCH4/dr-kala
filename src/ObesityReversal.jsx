import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Target, Activity, Zap, Microscope, ChevronRight } from 'lucide-react';

const ObesityReversal = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-black selection:text-white flex flex-col overflow-x-hidden">
      
      <Navbar />

      <main className="flex-grow grid lg:grid-cols-12 max-w-[1440px] mx-auto w-full">
        
        {/* LEFT: Clinical Content */}
        <div className="lg:col-span-6 px-6 sm:px-10 md:px-16 py-16 lg:py-24 flex flex-col justify-center space-y-16">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#A69D89]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A69D89]">
                Metabolic Restoration
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.8] tracking-tighter">
              Obesity <br />
              <span className="italic font-light text-slate-300">Reversal.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light italic leading-relaxed max-w-md border-l border-slate-100 pl-8">
              "We don't manage weight; we re-engineer the biological pathways that dictate fat storage and energy utilization."
            </p>
          </div>

          {/* Four Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                title: "Metabolic Reset",
                icon: <Zap size={16} />,
                detail:
                  "Targeting mitochondrial efficiency to shift the body from glucose dependence to fat-oxidation fluidity."
              },
              {
                title: "Hormonal Sync",
                icon: <Activity size={16} />,
                detail:
                  "Recalibrating leptin and ghrelin sensitivity while optimizing the HPA axis to lower systemic cortisol."
              },
              {
                title: "Visceral Mapping",
                icon: <Microscope size={16} />,
                detail:
                  "Advanced quantification of deep organ fat using AI-driven imaging to mitigate inflammatory cytokine release."
              },
              {
                title: "Peptide Strategy",
                icon: <Target size={16} />,
                detail:
                  "Bespoke GLP-1 and GIP agonist protocols combined with cellular growth factors for lean mass preservation."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-3 text-[#A69D89]">
                  {item.icon}
                  <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <button className="group relative flex items-center gap-12 bg-[#1A1A1A] text-white px-10 py-6 rounded-full overflow-hidden transition-all hover:pr-16">
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">
              Inquire for Assessment
            </span>
            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-[#A69D89] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>

        {/* RIGHT: Visual */}
        <div className="lg:col-span-6 bg-[#080808] relative min-h-[600px] flex items-center justify-center p-6 md:p-12 lg:p-20">
          
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

          <div className="relative w-full max-w-lg aspect-[4/5] group">
            <div className="absolute inset-0 bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
              
              {/* BRIGHT IMAGE */}
              <img
                src="/Gemini_Generated_Image_dq8ydxdq8ydxdq8y.png"
                alt="Biological Scan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
              />

              {/* Scan Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A69D89]/30 to-transparent h-1/4 w-full -translate-y-full animate-[scan_5s_linear_infinite]" />
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

export default ObesityReversal;