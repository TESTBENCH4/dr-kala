const Differentiation = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#FDFDFD]">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif italic text-[#1a1a1a] mb-12">
          "We don't treat labels. We treat systems."
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <div className="p-8 border border-slate-100 rounded-full hover:text-black hover:border-black transition-all">Heart Health</div>
          <div className="p-8 border border-slate-100 rounded-full hover:text-black hover:border-black transition-all">Lung Health</div>
          <div className="p-8 border border-slate-100 rounded-full hover:text-black hover:border-black transition-all">Gut Health</div>
          <div className="p-8 border border-slate-100 rounded-full hover:text-black hover:border-black transition-all">Brain Health</div>
        </div>

        <p className="mt-16 text-[#888] max-w-2xl mx-auto text-sm leading-[2]">
          Whether seeking obesity reversal or performance enhancement, iMedi builds 
          a bespoke biological journey designed specifically for your body and your 
          future potential.
        </p>
        
        <button className="mt-12 border-b-2 border-black pb-2 text-[11px] font-black uppercase tracking-[0.3em]">
          Request Private Access
        </button>
      </div>
    </section>
  );
};

export default Differentiation;
