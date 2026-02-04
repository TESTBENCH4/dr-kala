import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {
  Target,
  Activity,
  Zap,
  Microscope,
  ChevronRight,
  BarChart3,
  Cpu
} from 'lucide-react';

const DiseaseReversal = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFB] text-[#1A1A1A] selection:bg-[#A69D89] selection:text-white flex flex-col overflow-x-hidden antialiased">
      <Navbar />

      <main className="flex-grow grid lg:grid-cols-12 max-w-[1800px] mx-auto w-full">
        {/* LEFT */}
        <div className="lg:col-span-6 px-6 sm:px-12 md:px-24 py-20 lg:py-32 flex flex-col justify-center bg-white">
          <div className="max-w-xl space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#A69D89]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#A69D89]">
                  Next-Gen Therapeutics
                </span>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter">
                Disease <br />
                <span className="italic font-light text-slate-100 block mt-4">
                  Reversal.
                </span>
              </h1>

              <p className="text-xl text-slate-500 font-light leading-relaxed border-l-[3px] border-[#A69D89]/30 pl-8 max-w-lg">
                We don't just manage pathology. We deploy{' '}
                <span className="text-black font-semibold">
                  epigenetic and metabolic overrides
                </span>{' '}
                to return your biology to baseline.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Glycemic Mastery',
                  icon: <Zap size={18} />,
                  desc: 'Insulin sensitivity restoration via precision nutritional timing.'
                },
                {
                  title: 'Vascular Health',
                  icon: <Activity size={18} />,
                  desc: 'Endothelial repair through nitric oxide optimization.'
                },
                {
                  title: 'Hormonal Balance',
                  icon: <Microscope size={18} />,
                  desc: 'Endocrine axis restoration via metabolic signaling.'
                },
                {
                  title: 'Remission Math',
                  icon: <BarChart3 size={18} />,
                  desc: 'Quantitative tracking of biomarker decay.'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-8 border border-slate-100 bg-[#F9F9F7] hover:bg-white hover:border-[#A69D89]/40 transition-all duration-500"
                >
                  <div className="text-[#A69D89] mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 group-hover:text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="group relative inline-flex items-center gap-20 bg-[#1A1A1A] text-white pl-12 pr-4 py-6 rounded-full overflow-hidden hover:bg-black transition">
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.5em]">
                Initialize Assessment
              </span>
              <div className="relative z-10 w-12 h-12 rounded-full bg-[#A69D89] flex items-center justify-center">
                <ChevronRight size={20} />
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-6 bg-[#0F0F0F] relative min-h-[800px] flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-lg aspect-[4/5] mx-8">
            <div className="absolute inset-0 bg-[#1A1A1A] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)]">

              {/* FULL IMAGE */}
              <img
                src="/Gemini_Generated_Image_30z5oi30z5oi30z5.png"
                alt="Clinical Scan"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* HUD */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-[#A69D89] uppercase">
                      Subject ID: RE_8829_X
                    </p>
                    <p className="text-[8px] font-mono text-white/30 uppercase">
                      Biometric Sync: 98.4%
                    </p>
                  </div>
                  <Cpu className="text-white/30 animate-spin-slow" size={20} />
                </div>

                {/* Rings */}
                <div className="flex-grow flex items-center justify-center">
                  <div className="relative w-72 h-72 rounded-full border border-white/10">
                    <div className="absolute inset-0 border-t-2 border-[#A69D89] rounded-full animate-spin" />
                    <div className="absolute inset-4 border border-white/10 border-dashed rounded-full animate-spin-reverse" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="border-t border-white/10 pt-6">
                  <span className="text-[9px] font-mono text-white/40">
                    REMISSION_PROBABILITY
                  </span>
                  <p className="text-5xl font-mono text-white italic">
                    91.2<span className="text-[#A69D89] text-xl">%</span>
                  </p>
                </div>
              </div>

              {/* Scan Line */}
              <div className="absolute top-0 left-0 w-full h-[12%] bg-gradient-to-b from-[#A69D89]/20 to-transparent animate-scan z-30" />
            </div>

            {/* Tag */}
            <div className="absolute -top-4 -right-4 bg-[#A69D89] text-white px-6 py-4 rounded-2xl rotate-6 border-4 border-[#0F0F0F] z-40">
              <p className="text-[9px] font-black uppercase tracking-widest">
                Protocol Verified
              </p>
              <p className="text-xs font-mono font-bold">ALPHA-7</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(600%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin 8s linear reverse infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default DiseaseReversal;