import React from 'react';

const ExpressionOfInterest = () => {
  return (
    <section id="eoi-section" className="bg-[#FDFDFD] py-16 md:py-24 px-6 md:px-16 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Content */}
        <div className="space-y-6 md:space-y-8 mt-0 lg:mt-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#1a1a1a]">
            Begin your <br />
            <span className="italic font-light text-slate-400">biological journey.</span>
          </h2>
          
          <div className="space-y-6 max-w-md">
            <p className="text-[#888] leading-relaxed text-sm tracking-wide font-light">
              Membership at iMedi.health is exclusive and tailored. By submitting an 
              Expression of Interest, you are initiating a private assessment of your 
              biological potential.
            </p>
            
            <div className="pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-1.5 bg-[#A69D89] rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]">Institutional Access</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed uppercase tracking-widest font-medium">
                Our concierge will reach out within 24 hours to schedule your 
                preliminary diagnostic profiling.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Luxury Form Card */}
        <div className="bg-white p-6 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] border border-slate-50 rounded-sm hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-700">
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Julian Sterling" 
                  className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#A69D89] transition-colors text-sm font-light bg-transparent rounded-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="private@residence.com" 
                  className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#A69D89] transition-colors text-sm font-light bg-transparent rounded-none" 
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Primary Health Interest</label>
              <select className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#A69D89] transition-colors text-sm font-light bg-transparent appearance-none rounded-none cursor-pointer">
                <option>Obesity & Metabolic Reversal</option>
                <option>Disease Reversal & Correction</option>
                <option>Regenerative & Cellular Medicine</option>
                <option>Longevity & Anti-Aging</option>
                <option>Other / Executive Performance</option>
              </select>
              {/* Custom Arrow for Select */}
              <div className="absolute right-0 bottom-4 pointer-events-none text-slate-300 text-[10px]">▼</div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Desired Health Outcomes</label>
              <textarea 
                rows="2" 
                placeholder="Describe your desired outcomes..." 
                className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#A69D89] transition-colors text-sm font-light bg-transparent resize-none rounded-none"
              ></textarea>
            </div>

            <div className="pt-4 md:pt-6">
              <button className="group relative w-full overflow-hidden bg-[#1a1a1a] text-white py-4 md:py-5 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300">
                <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">
                  Submit Expression of Interest
                </span>
                <div className="absolute inset-0 bg-[#A69D89] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[9px] text-[#1A1A1A] uppercase tracking-widest font-medium">
              <span>Privacy Encrypted</span>
              <span className="hidden md:inline">•</span>
              <span>Secure Submission</span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ExpressionOfInterest;