import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import Navbar from './Navbar';

const RegenerativeHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle header shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to EOI section
  const handleScrollToEOI = () => {
    const eoiSection = document.getElementById('eoi-section');
    if (eoiSection) {
      eoiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-black selection:text-white flex flex-col overflow-x-hidden">
      
      <Navbar />

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[110] transition-transform duration-700 ease-in-out lg:hidden p-8 flex flex-col justify-between ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex justify-between items-center">
          <span className="font-black text-xl uppercase tracking-tighter">iMedi.Health</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2"><X size={32} /></button>
        </div>
        <div className="flex flex-col gap-6 text-5xl font-serif italic tracking-tighter">
          {['Services', 'Technology', 'Science', 'Journal'].map((item, i) => (
            <a key={item} href="#" className="hover:pl-4 transition-all duration-300 text-slate-300 hover:text-black">
              <span className="text-xs font-mono block not-italic mb-2 opacity-50">0{i+1}</span>
              {item}
            </a>
          ))}
        </div>
        <button className="w-full bg-black text-white py-6 rounded-full uppercase text-xs font-black tracking-[0.3em] active:scale-95 transition-transform">
          Access Member Portal
        </button>
      </div>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col lg:flex-row items-center pt-32 lg:pt-20 px-6 sm:px-10 md:px-16 pb-12 max-w-[1440px] mx-auto w-full gap-16 lg:gap-0">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10 md:space-y-14 z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#A69D89]">
               <ShieldCheck size={18} />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Clinical Excellence</span>
            </div>
            <h1 className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[clamp(65px,7.5vw,120px)] font-serif leading-[0.85] tracking-tighter text-[#1A1A1A]">
              Regenerative <br />
              <span className="italic font-light text-[#1A1A1A] pr-4">Health Hub</span>
            </h1>
          </div>
          
          <div className="max-w-md space-y-8">
            <p className="text-xl md:text-2xl text-slate-400 font-light italic leading-relaxed border-l-2 border-[#A69D89]/20 pl-8">
              "Longevity is the preservation of biological youth through system correction."
            </p>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed tracking-wide font-medium max-w-sm">
              We treat the biological systems behind aging. iMedi focuses on keeping 
              organs youthful through proprietary targeted protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button
              className="group relative overflow-hidden bg-[#1A1A1A] text-white px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:shadow-2xl hover:shadow-black/20"
              onClick={handleScrollToEOI}
            >
              <span className="relative z-10 flex items-center gap-6">
                Book Consultation <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#A69D89] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="flex items-center gap-4 px-8 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors">
              Explore Science <div className="w-8 h-[1px] bg-slate-200" />
            </button>
          </div>
        </div>

        {/* Right: Diagnostic Visual */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative aspect-[4/5] lg:aspect-square bg-slate-50 rounded-[2rem] lg:rounded-[4rem] overflow-hidden border border-slate-100 flex items-center justify-center transition-all duration-1000 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
            
            {/* Dynamic Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), ', backgroundSize: '40px 40px' }} />

            {/* The "Scanner" Beam */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A69D89]/5 to-transparent h-1/2 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none" />

            <img 
              src="https://www.cliniquelaprairie.com/wp-content/uploads/2025/03/KV-scaled-e1743430909318.jpg?auto=format&ch=DPR%2CWidth&crop=faces%2Cedges&dpr=2&fit=crop&h=970&ixjsv=2.2.4&q=65&w=850" 
              alt="Anatomy Mapping" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-100 group-hover:scale-105 transition-transform duration-1000 ease-out z-0"
            />

            {/* Diagnostic Labels */}
            <div className="absolute top-10 left-10 space-y-4 z-10">
               <div className="text-[9px] font-mono uppercase text-slate-300 space-y-1 tracking-[0.3em] backdrop-blur-sm bg-white/30 p-3 rounded-lg border border-white/50">
                 <p className="text-[#A69D89] font-bold">● System: Pulmonary</p>
                 <p>ID: Bio-Logix_092</p>
                 <p>Status: Analysis Active</p>
               </div>
               <div className="flex gap-1">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-[#A69D89] rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />
                 ))}
               </div>
            </div>

            <div className="absolute bottom-10 right-10 flex items-center gap-3 text-[9px] font-mono text-slate-300 tracking-widest z-10">
              <Activity size={12} className="text-[#A69D89]" />
              BIOMETRIC_SYNC: 98.4%
            </div>
          </div>
          
          {/* Subtext beneath image */}
          <div className="mt-8 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
            <span className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full" />
              Fig 01. Biological Mapping
            </span>
            <div className="hidden sm:block flex-grow mx-10 h-[1px] bg-slate-100" />
            <span>Ver. 2.0.4 // 2026</span>
          </div>
        </div>

      </main>

      {/* Footer Signature */}
      <footer className="px-6 md:px-16 pb-10 mt-auto hidden lg:flex justify-between items-end">
        <div className="space-y-4">
          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]">Integrated Longevity Systems</div>
          <div className="flex gap-6 text-[8px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
        <div className="text-[9px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]">© 2026 iMedi.Health</div>
      </footer>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default RegenerativeHero;