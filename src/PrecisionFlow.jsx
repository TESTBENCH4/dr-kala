import React from 'react';
import { ArrowDown } from 'lucide-react';

const PrecisionFlow = () => {
  const steps = [
    { 
      name: "Diagnostic Profiling", 
      phase: "01",
      detail: "Advanced blood markers, hormonal panels, and genetic risk assessment.",
      icon: "/Diagnostic Profiling.png" 
    },
    { 
      name: "Biological Mapping", 
      phase: "02",
      detail: "Identifying metabolic bottlenecks and quantifying inflammation load.",
      icon: "/Regenerative Medicine.png" 
    },
    { 
      name: "Tailored Blueprint", 
      phase: "03",
      detail: "Bespoke infusions, nutrition protocols, and lifestyle engineering.",
      icon: "/Longevity & Anti-Aging.png" 
    },
    { 
      name: "Continuous Optimization", 
      phase: "04",
      detail: "Digital tracking and periodic biomarker recalibration.",
      icon: "/Continuous Optimization.png" 
    }
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-24 md:py-40 selection:bg-[#10b981] selection:text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Sticky Branding & Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">The iMedi Protocol</span>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter">
                The <br /> Precision <br />
                <span className="italic font-light text-white/10">Care Flow</span>
              </h2>
            </div>
            
            <p className="text-white/40 font-light text-lg md:text-xl leading-relaxed max-w-sm italic border-l border-white/10 pl-8">
              "We don't apply templates. We engineer health around your specific biological pathway."
            </p>

            {/* Scrolling Visual Indicator */}
            <div className="hidden lg:flex flex-col gap-5 text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
              <span>Scroll to Explore</span>
              <div className="w-[1px] h-24 bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#10b981] to-transparent animate-scroll-line" />
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Procedural Steps */}
          <div className="lg:col-span-7 divide-y divide-white/5">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col md:flex-row items-start justify-between pt-16 pb-24 hover:bg-white/[0.01] transition-all duration-700 px-4 md:px-10 first:border-t-0 border-t border-white/5"
              >
                {/* Visual Watermark (01, 02, etc.) */}
                <span className="absolute top-12 right-10 text-[130px] font-serif italic text-white/[0.02] pointer-events-none group-hover:text-white/[0.06] transition-all duration-1000 select-none">
                  {step.phase}
                </span>

                <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start w-full relative z-10">
                  {/* Technical Phase Badge */}
                  <div className="text-[9px] font-mono text-[#10b981] border border-[#10b981]/30 px-4 py-1.5 rounded-full whitespace-nowrap bg-[#10b981]/5 group-hover:bg-[#10b981] group-hover:text-black transition-all duration-500">
                    PHASE {step.phase}
                  </div>
                  
                  <div className="max-w-md space-y-6">
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                      {step.name}
                    </h4>
                    <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
                      {step.detail}
                    </p>
                    
                    {/* View Details Link */}
                    <div className="pt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700 text-[#10b981]">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">View Biomarkers</span>
                      <ArrowDown size={14} className="animate-bounce" />
                    </div>
                  </div>
                </div>

                {/* Circular Icon Portal */}
                <div className="mt-10 md:mt-0 relative flex-shrink-0 self-end md:self-center">
                  <div className="w-28 h-28 lg:w-40 lg:h-40 flex items-center justify-center rounded-full border border-white/10 bg-[#0F0F0F] p-8 relative overflow-hidden group-hover:border-[#10b981]/40 transition-all duration-1000 shadow-2xl">
                    
                    {/* Laser Scan Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#10b981]/50 -translate-y-4 group-hover:animate-laser-scan opacity-0 group-hover:opacity-100" />
                    
                    <img 
                      src={step.icon} 
                      alt={step.name}
                      className="w-full h-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes laser-scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(160px); }
        }
        .animate-scroll-line {
          animation: scroll-line 3s linear infinite;
        }
        .group:hover .animate-laser-scan {
          animation: laser-scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default PrecisionFlow;