import React, { useState } from 'react';

const ExpressionOfInterest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Obesity & Metabolic Reversal',
    outcomes: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzhGIIaAG_8pruMrMSI40aRQ9mKTovGiOFuSX1GH8PR0PuH-iD8vequ3Vk846BKk_VP/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('success');
      setFormData({ name: '', email: '', interest: 'Obesity & Metabolic Reversal', outcomes: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
    }
  };

  // Added "!text-black" and "appearance-none" for better control
  const inputClasses = "w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#A69D89] transition-colors text-sm font-light bg-transparent rounded-none !text-black placeholder:text-slate-300";

  return (
    <section id="eoi-section" className="bg-[#FDFDFD] py-16 md:py-24 px-6 md:px-16 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
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
          </div>
        </div>

        <div className="bg-white p-6 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] border border-slate-50 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Julian Sterling" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="private@residence.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Primary Health Interest</label>
              <select 
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
                className={`${inputClasses} cursor-pointer appearance-none !text-black`}
              >
                {/* Ensure options have black text for readability */}
                <option className="text-black">Obesity & Metabolic Reversal</option>
                <option className="text-black">Disease Reversal & Correction</option>
                <option className="text-black">Regenerative & Cellular Medicine</option>
                <option className="text-black">Longevity & Anti-Aging</option>
                <option className="text-black">Other / Executive Performance</option>
              </select>
              <div className="absolute right-0 bottom-4 pointer-events-none text-slate-300 text-[10px]">▼</div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Desired Health Outcomes</label>
              <textarea 
                rows="2" 
                placeholder="Describe your desired outcomes..." 
                value={formData.outcomes}
                onChange={(e) => setFormData({...formData, outcomes: e.target.value})}
                className={`${inputClasses} resize-none !text-black`}
              ></textarea>
            </div>

            <div className="pt-4 md:pt-6">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="group relative w-full overflow-hidden bg-[#1a1a1a] text-white py-4 md:py-5 rounded-full transition-all duration-500"
              >
                <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">
                  {status === 'loading' ? 'Processing...' : status === 'success' ? 'Interest Received' : 'Submit Expression of Interest'}
                </span>
                <div className="absolute inset-0 bg-[#A69D89] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ExpressionOfInterest;