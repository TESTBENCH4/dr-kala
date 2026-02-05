import React, { useState } from 'react';
import { ArrowDown, ChevronDown, Activity, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const PrecisionFlow = () => {
  // Track which phase is expanded
  const [expandedPhase, setExpandedPhase] = useState(null);

  const steps = [
    { 
      name: "Diagnostic Profiling", 
      phase: "01",
      detail: "Advanced blood markers, hormonal panels, and genetic risk assessment.",
      biomarkers: ["Hormonal Panel", "Lipid Sub-fractions", "Genetic Sequencing", "Micronutrient Screen"],
      icon: "/Diagnostic Profiling.png" 
    },
    { 
      name: "Biological Mapping", 
      phase: "02",
      detail: "Identifying metabolic bottlenecks and quantifying inflammation load.",
      biomarkers: ["hs-CRP Levels", "Glycemic Variability", "Metabolic Rate", "Oxidative Stress"],
      icon: "/Regenerative Medicine.png" 
    },
    { 
      name: "Tailored Blueprint", 
      phase: "03",
      detail: "Bespoke infusions, nutrition protocols, and lifestyle engineering.",
      biomarkers: ["Absorption Rates", "Nutrient Synergy", "Recovery Index", "Sleep Architecture"],
      icon: "/Longevity & Anti-Aging.png" 
    },
    { 
      name: "Continuous Optimization", 
      phase: "04",
      detail: "Digital tracking and periodic biomarker recalibration.",
      biomarkers: ["Real-time HRV", "Glucose Monitoring", "Telomere Length", "VO2 Max"],
      icon: "/Continuous Optimization.png" 
    }
  ];

  const togglePhase = (phase) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  return (
    <section className="bg-[#0A0A0A] text-white py-24 md:py-40 selection:bg-[#10b981] selection:text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Sticky Branding */}
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
          </div>
          
          {/* RIGHT COLUMN: Procedural Steps */}
          <div className="lg:col-span-7 divide-y divide-white/5">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-col pt-16 pb-12 transition-all duration-700 px-4 md:px-10 border-t border-white/5 ${expandedPhase === step.phase ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}`}
              >
                <div className="flex flex-col md:flex-row items-start justify-between w-full relative z-10">
                  <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start w-full">
                    <div className="text-[9px] font-mono text-[#10b981] border border-[#10b981]/30 px-4 py-1.5 rounded-full bg-[#10b981]/5">
                      PHASE {step.phase}
                    </div>
                    
                    <div className="max-w-md space-y-6">
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight">
                        {step.name}
                      </h4>
                      <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
                        {step.detail}
                      </p>
                      
                      {/* Interactive Button */}
                      <button 
                        onClick={() => togglePhase(step.phase)}
                        className="pt-6 flex items-center gap-3 text-[#10b981] group/btn transition-all duration-300"
                      >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                          {expandedPhase === step.phase ? 'Hide Details' : 'View Biomarkers'}
                        </span>
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-500 ${expandedPhase === step.phase ? 'rotate-180' : 'animate-bounce'}`} 
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-0 relative flex-shrink-0 self-end md:self-center">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full border border-white/10 bg-[#0F0F0F] p-6 relative overflow-hidden shadow-2xl">
                      <img src={step.icon} alt={step.name} className="w-full h-full object-contain grayscale opacity-30 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE BIOMARKER GRID */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedPhase === step.phase ? 'max-h-[500px] mt-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-white/10">
                    {step.biomarkers.map((marker, idx) => (
                      <div key={idx} className="group/item p-4 bg-white/5 border border-white/5 hover:border-[#10b981]/50 transition-colors">
                        <Activity size={12} className="text-[#10b981] mb-3 opacity-50" />
                        <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Marker {idx + 1}</span>
                        <span className="block text-sm font-medium text-white/80">{marker}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionFlow;