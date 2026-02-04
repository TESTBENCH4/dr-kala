import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFDFD] text-[#1a1a1a] pt-24 pb-12 px-8 md:px-16 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <img src="/Untitled-1.png" alt="iMedi Logo" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-[#888] text-sm leading-[2] max-w-xs font-light italic">
              "Engineering health around the individual through organ-centric rejuvenation."
            </p>
            <div className="pt-4">
              <button className="text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#1a1a1a] pb-1 hover:text-[#A69D89] hover:border-[#A69D89] transition-all">
                Inquire for Membership
              </button>
            </div>
          </div>

          {/* Navigation - Health Hubs */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Biological Hubs</h4>
            <ul className="space-y-4 text-sm text-[#555] font-light">
              <li className="hover:text-black transition-colors cursor-pointer">Obesity Reversal Hub</li>
              <li className="hover:text-black transition-colors cursor-pointer">Disease Reversal Hub</li>
              <li className="hover:text-black transition-colors cursor-pointer">Regenerative Medicine Hub</li>
              <li className="hover:text-black transition-colors cursor-pointer">Longevity & Anti-Aging Hub</li>
            </ul>
          </div>

          {/* Navigation - Technologies */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Advanced Technology</h4>
            <ul className="space-y-4 text-sm text-[#555] font-light">
              <li className="hover:text-black transition-colors cursor-pointer">NAD+ & Exosomes</li>
              <li className="hover:text-black transition-colors cursor-pointer">Stem-Cell Bioactives</li>
              <li className="hover:text-black transition-colors cursor-pointer">Peptide Therapy</li>
              <li className="hover:text-black transition-colors cursor-pointer">Precision GLP-Based Therapies</li>
              <li className="hover:text-black transition-colors cursor-pointer">AI Diagnostics</li>
            </ul>
          </div>

          {/* Contact/Location */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Institutional Access</h4>
            <p className="text-sm text-[#555] font-light leading-relaxed">
              Private Care Wing<br />
              Personalized Assessment Intake
            </p>
            <p className="text-[11px] font-bold text-[#1a1a1a] underline cursor-pointer">
              Contact Concierge
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
            © 2026 iMedi.health — Integrated Health Ecosystem
          </div>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <span className="hover:text-black cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-black cursor-pointer">Terms of Practice</span>
            <span className="hover:text-black cursor-pointer">Member Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
