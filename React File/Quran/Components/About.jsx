import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/Quran.jpg')" }}
    >
      {/* Smooth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-stone-100">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-wide">
          Aim
        </h1>

        <p className="leading-relaxed text-base md:text-lg text-stone-200">
          Assalamualaikum, My name is Ali. I created this site as a personal
          initiative to spread the words of Allah to every heart — to help
          people read, listen, and understand the Qur’an with ease. Whether you
          are seeking guidance, learning for the first time, or deepening your
          connection with Allah ﷻ, this platform is built to serve you. With
          simple navigation, powerful search, and clear translations, it is made
          for everyone. May this project become a source of sadaqah jariyah and
          benefit you in this world and the Hereafter.
        </p>
        {/* Action Buttons Section */}
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 mt-16 mb-24 relative z-10">
          {/* Button 1: Search Verse */}
          <NavLink
            to="/Verse"
            className="
      group
      inline-flex items-center justify-center
      min-w-[280px] px-10 py-6
      bg-[#1A1C20] border-2 border-[#1A1C20]
      text-[#F5F5F0] font-serif font-bold text-xl
      rounded-2xl
      shadow-2xl shadow-[#1A1C20]/15
      transition-all duration-300 ease-out
      hover:bg-[#F5F5F0] hover:text-[#1A1C20] hover:border-[#1A1C20] hover:-translate-y-1
    "
          >
            <span className="mr-3">Search a Verse</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </NavLink>

          {/* Button 2: Search Hadees */}
          <NavLink
            to="/hadees"
            className="
      group
      inline-flex items-center justify-center
      min-w-[280px] px-10 py-6
      bg-[#1A1C20] border-2 border-[#1A1C20]
      text-[#F5F5F0] font-serif font-bold text-xl
      rounded-2xl
      shadow-2xl shadow-[#1A1C20]/15
      transition-all duration-300 ease-out
      hover:bg-[#F5F5F0] hover:text-[#1A1C20] hover:border-[#1A1C20] hover:-translate-y-1
    "
          >
            <span className="mr-3">Search a Hadees</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
