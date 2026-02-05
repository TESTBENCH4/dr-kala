import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500
        ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm'
            : 'bg-white'
        }
      `}
    >
      {/* Navbar height */}
      <div className="h-16 lg:h-20 flex items-center px-4 sm:px-6">
        <div className="max-w-[1800px] w-full mx-auto flex items-center justify-center lg:justify-start">

          {/* Logo (redirects to home) */}
          <Link to="/" className="relative cursor-pointer group flex items-center">
            <img
              src="/Untitled-1 (3).png"
              alt="iMedi Logo"
              className="
                h-14 sm:h-16 lg:h-20
                w-auto object-contain
                scale-[1.15]
                transition-transform duration-500
                group-hover:scale-[1.2]
              "
            />

            {/* Underline hover (desktop only) */}
            <div className="hidden lg:block absolute -bottom-1 left-0 w-0 h-[1px] bg-black/30 transition-all duration-500 group-hover:w-full" />
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;