const InstitutionalPromise = () => {
  return (
    <section className="py-32 bg-[#F9F8F6] px-6 md:px-16 text-center">
      <div className="max-w-[800px] mx-auto space-y-10">
        <div className="flex justify-center mb-6">
          <div className="w-[1px] h-16 bg-[#1a1a1a]/20" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] leading-tight">
          We do not treat labels. <br />
          <span className="italic">We engineer health.</span>
        </h2>
        <p className="text-slate-500 font-light text-lg leading-relaxed">
          At iMedi.health, we transcend conventional medicine. We don’t apply templates 
          or treat symptoms; we build bespoke biological journeys designed specifically 
          for your future potential.
        </p>
        <div className="pt-8">
          <button className="bg-[#1a1a1a] text-white px-16 py-6 rounded-sm text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#333] transition-all shadow-2xl">
            Inquire for Private Membership
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalPromise;
