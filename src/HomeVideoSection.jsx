import React from 'react';

const HomeVideoSection = () => (
  // Reduced padding from py-24 to py-12
  <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
    
    <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
      
      {/* Header Section - Reduced bottom margin */}
      <div className="text-center mb-10">
        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-2 block">
          Precision in Motion
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-4 tracking-tight">
          iMedi in Action
        </h2>
        {/* Simplified paragraph - removed extra margins */}
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          See how our technology and protocols are transforming health journeys through our mission and approach.
        </p>
      </div>

      {/* Video Container - Removed the "glow" background to save vertical space */}
      <div className="relative w-full bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-slate-200 flex items-center justify-center">
                        <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/8qhzRpTVTHI?rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&disablekb=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
            ></iframe>
          </div>
      </div>

    </div>
  </section>
);

export default HomeVideoSection;