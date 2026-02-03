import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, arabicTitle, link }) => {
  return (
    <div className="mt-8">
      <NavLink
        to={link}
        className="
        group relative 
        flex flex-col justify-between
        w-full md:w-[420px] min-h-[260px] 
        px-10 py-12
        bg-[#FAFAF8] 
        rounded-xl 
        border border-[#2A2D32]/10
        shadow-[0_4px_20px_-5px_rgba(26,28,32,0.1)] 
        transition-all duration-300 ease-out
        hover:-translate-y-3 
        hover:shadow-[0_12px_40px_-8px_rgba(26,28,32,0.18)]
        hover:border-[#3A3D42]/30
        hover:bg-[#F0F0EC]
      "
      >
        <div className="absolute top-6 right-8 pointer-events-none overflow-hidden">
          <span className="font-serif text-8xl text-[#2A2D32]/5 group-hover:text-[#3A3D42]/10 transition-colors duration-500 leading-none select-none">
            {arabicTitle}
          </span>
        </div>

        {/* 2. Main Content */}
        <div className="relative z-10 mt-6">
          <h2 className="text-2xl font-serif font-bold text-[#1A1C20] mb-2 group-hover:text-[#2A2D32] transition-colors duration-300">
            {title}
          </h2>

          <div className="h-[2px] w-14 bg-[#2A2D32]/15 mb-5 group-hover:w-24 group-hover:bg-[#3A3D42]/40 transition-all duration-500"></div>

          <p className="text-[#3A3D42]/70 font-sans text-sm leading-relaxed mb-8">
            {description}
          </p>
        </div>

        {/* 3. Footer Link */}
        <div className="relative z-10 flex items-center text-[#2A2D32]/80 font-medium text-sm tracking-wide uppercase group-hover:text-[#1A1C20] transition-colors duration-300">
          Start Reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
