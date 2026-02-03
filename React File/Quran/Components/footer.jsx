import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1C20] text-[#F5F5F0] py-10 mt-auto border-t border-[#F5F5F0]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          
          {/* Social Links Section */}
          <div className="flex items-center gap-8">
            <a 
              href="https://www.facebook.com/ali.rehmani15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-square-facebook text-3xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/sakoon._alquran/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-square-instagram text-3xl"></i>
            </a>
          </div>

          {/* Copyright Section - Premium Typography */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-px w-12 bg-[#F5F5F0]/10 rounded-full mb-2"></div>
            <p className="text-[#F5F5F0]/40 text-sm font-premium tracking-widest uppercase hover:text-[#F5F5F0]/80 transition-colors duration-300 cursor-default">
              &copy; {new Date().getFullYear()} sakoon._alquran
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;