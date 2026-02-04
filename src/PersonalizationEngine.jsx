const PersonalizationEngine = () => {
  const steps = [
    { 
      id: "01", 
      title: "Diagnostic Profiling", 
      desc: "Comprehensive evaluation including advanced biomarkers, genetic risk mapping, and hormonal panels.",
      details: ["Genetic Risk Assessment", "Body Composition Analysis", "Metabolic Baseline"],
      icon: "public/black-Photoroom.png"
    },
    { 
      id: "02", 
      title: "Biological Mapping", 
      desc: "Identifying dominant organ dysfunctions and quantifying cellular inflammation and stress load.",
      details: ["Organ Function Mapping", "Mitochondrial Energy Scan", "Regenerative Capacity"],
      icon: "public/Regenerative Medicine.png"
    },
    { 
      id: "03", 
      title: "Tailored Blueprint", 
      desc: "A bespoke biological journey involving organ-specific treatments and lifestyle engineering.",
      details: ["Precision Infusions", "Hormonal Optimization", "Nutrition Therapeutics"],
      icon: "public/Longevity & Anti-Aging.png"
    },
    { 
      id: "04", 
      title: "Continuous Optimization", 
      desc: "Real-time digital tracking and periodic recalibration of therapies for progressive longevity.",
      details: ["Digital Bio-Tracking", "Progressive Upgrades", "Therapy Recalibration"],
      icon: "public/fatloss.png"
    }
  ];

  return (
    <section className="py-24 bg-[#FDFDFD] px-6 md:px-5 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A69D89] mb-4">
            The iMedi Engine
          </h2>
          <p className="text-4xl md:text-5xl font-serif text-[#1a1a1a] max-w-2xl leading-tight">
            A four-stage protocol for <span className="italic">bespoke biological engineering.</span>
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="group cursor-default flex flex-col">
              
              {/* Image & Number Container */}
              <div className="relative mb-8 flex items-end h-32">
                {/* Background Number - Darkens on Hover */}
                <div className="absolute top-0 left-0 text-7xl font-serif italic text-slate-100 group-hover:text-[#1A1A1A] transition-colors duration-700 ease-in-out">
                  {step.id}
                </div>
                
                {/* Gemini Icon */}
                <div className="relative z-10 w-24 h-24 ml-6 overflow-hidden transition-transform duration-500 group-hover:-translate-y-3">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-full h-full object-contain mix-blend-multiply opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2 text-[#1a1a1a]">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light min-h-[60px]">
                {step.desc}
              </p>

              {/* Detail Tags */}
              <ul className="space-y-2 mt-auto">
                {step.details.map((item, idx) => (
                  <li key={idx} className="text-[9px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#A69D89] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngine;