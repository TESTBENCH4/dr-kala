import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 h-24 flex items-center ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm' 
        : 'bg-white/95'
    }`}>
      {/* Changed justify-center to justify-start to align content to the left */}
      <div className="max-w-[1800px] w-full flex justify-start items-center">
        
        {/* LEFT LOGO: Now aligned to the start of the container */}
        <div className="cursor-pointer group relative flex flex-col items-start">
          <img 
            src="/Untitled-1.png" 
            alt="iMedi Logo" 
            className="h-24 w-auto object-contain scale-[1.4] transition-transform duration-500 group-hover:scale-[1.45] origin-left" 
          />
          
          {/* Tagline: Adjusted tracking and alignment for a left-aligned look */}
          <span className="text-[8px] font-black tracking-[0.5em] uppercase text-black mt-[-10px] opacity-90">
          </span>
          
          {/* Subtle accent line */}
          <div className="absolute -bottom-2 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full opacity-20" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;