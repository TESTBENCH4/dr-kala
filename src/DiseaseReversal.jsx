import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { ArrowLeft, Target, Activity, Zap, Microscope, ChevronRight, BarChart3, ShieldCheck, Cpu } from 'lucide-react';

const DiseaseReversal = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFB] text-[#1A1A1A] selection:bg-[#A69D89] selection:text-white flex flex-col overflow-x-hidden antialiased">
      {/* Top Protocol Navigation */}
        <Navbar />

      <main className="flex-grow grid lg:grid-cols-12 max-w-[1800px] mx-auto w-full">
        {/* LEFT: Clinical Content */}
        <div className="lg:col-span-6 px-6 sm:px-12 md:px-24 py-20 lg:py-32 flex flex-col justify-center bg-white">
          <div className="max-w-xl space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#A69D89]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#A69D89]">Next-Gen Therapeutics</span>
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter transition-all">
                Disease <br />
                <span className="italic font-light text-slate-100 drop-shadow-sm block mt-4">Reversal.</span>
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed border-l-[3px] border-[#A69D89]/30 pl-8 max-w-lg">
                We don't just manage pathology. We deploy <span className="text-black font-semibold">epigenetic and metabolic overrides</span> to return your biology to its baseline state.
              </p>
            </div>

            {/* Pillar Grid with Hover Interaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Glycemic Mastery", icon: <Zap size={18} />, desc: "Insulin sensitivity restoration via high-precision nutritional timing." },
                { title: "Vascular Health", icon: <Activity size={18} />, desc: "Reversing endothelial dysfunction through nitric oxide optimization." },
                { title: "Hormonal Balance", icon: <Microscope size={18} />, desc: "Restoring the endocrine axis via targeted metabolic signaling." },
                { title: "Remission Math", icon: <BarChart3 size={18} />, desc: "Quantitative tracking of biomarker decay and health span extension." }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-sm border border-slate-100 bg-[#F9F9F7] hover:bg-white hover:border-[#A69D89]/40 hover:shadow-[0_20px_40px_-15px_rgba(166,157,137,0.15)] transition-all duration-500 cursor-crosshair">
                  <div className="text-[#A69D89] mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-20 bg-[#1A1A1A] text-white pl-12 pr-4 py-6 rounded-full overflow-hidden transition-all active:scale-95 hover:bg-black">
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.5em]">Initialize Assessment</span>
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#A69D89] flex items-center justify-center">
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: High-Tech Diagnostic Panel */}
        <div className="lg:col-span-6 bg-[#0F0F0F] relative min-h-[800px] flex items-center justify-center overflow-hidden">
          {/* Animated SVG Grid */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A69D89' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          
          <div className="relative w-full max-w-lg aspect-[4/5] mx-8 group">
            {/* Main Diagnostic Frame */}
            <div className="absolute inset-0 bg-[#1A1A1A] rounded-[4rem] border border-white/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
              {/* Internal Diagnostic HUD */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-[#A69D89] tracking-tighter uppercase">Subject ID: RE_8829_X</p>
                    <p className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">Biometric Sync: 98.4%</p>
                  </div>
                  <Cpu size={20} className="text-white/20 animate-spin-slow" />
                </div>

                {/* Central Graphic (Simulated Image) */}
                <div className="flex-grow flex items-center justify-center">
                   <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
                      <div className="absolute inset-0 border-t-2 border-[#A69D89] rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                      <div className="absolute inset-4 border border-white/5 rounded-full border-dashed animate-spin-reverse" style={{ animationDuration: '6s' }} />
                      <img src="/Disease Reversal-Photoroom.png" alt="Clinical" className="w-48 h-48 object-contain grayscale brightness-125 mix-blend-screen opacity-60" />
                   </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[9px] font-mono text-white/40 block mb-1">REMISSION_PROBABILITY</span>
                      <span className="text-5xl font-mono text-white tracking-tighter italic">91.2<span className="text-[#A69D89] text-xl">%</span></span>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] font-mono text-emerald-500">+12.4% Δ</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-white/20 tracking-[0.3em]">
                    <span>SYS_CHECK: OK</span>
                    <span>METABOLIC_LOAD: NORMAL</span>
                    <span>FLUID_STATE: OPTIMAL</span>
                  </div>
                </div>
              </div>

              {/* Laser Scan Line */}
              <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#A69D89]/20 to-transparent z-30 animate-scan" />
            </div>

            {/* Floating Lab Tag */}
            <div className="absolute -top-4 -right-4 bg-[#A69D89] text-white py-4 px-6 rounded-2xl shadow-2xl z-40 transform rotate-6 border-4 border-[#0F0F0F]">
               <p className="text-[9px] font-black uppercase tracking-widest">Protocol Verified</p>
               <p className="text-xs font-mono font-bold">ALPHA-7</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-slow 8s linear reverse infinite;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default DiseaseReversal;