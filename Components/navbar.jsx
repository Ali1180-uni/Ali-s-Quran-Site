import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for clean, repetitive link styling
  const linkClasses = ({ isActive }) =>
    `text-lg font-premium font-medium tracking-wider transition-colors duration-300 ${
      isActive ? "text-[#F5F5F0]" : "text-[#F5F5F0]/70 hover:text-[#F5F5F0]"
    }`;

  return (
    <nav className="bg-[#1A1C20] sticky top-0 z-50 shadow-lg border-b border-[#F5F5F0]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="/quran-icon.png"
              alt="Quran"
              className="h-10 w-10 transition-transform group-hover:scale-110"
            />
            <span className="text-[#F5F5F0] font-premium text-xl font-bold tracking-widest uppercase">
              Ali's Quran-Site
            </span>
          </NavLink>

          {/* Desktop Navigation - Clean Text Only */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/About" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/verse" className={linkClasses}>
              Verse
            </NavLink>
            <NavLink to="/hadees" className={linkClasses}>
              Hadees-e-Nabwi
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F5F5F0] hover:text-[#F5F5F0]/70 transition-colors"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown - Simple & Effective */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-[#F5F5F0]/10">
            <NavLink
              to="/"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/verse"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              Verse
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
