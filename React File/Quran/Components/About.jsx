import React from "react";

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
          Assalamualaikum, my name is Ali. I created this site as a personal
          initiative to spread the words of Allah to every heart — to help people
          read, listen, and understand the Qur’an with ease. Whether you are
          seeking guidance, learning for the first time, or deepening your
          connection with Allah ﷻ, this platform is built to serve you. With
          simple navigation, powerful search, and clear translations, it is made
          for everyone. May this project become a source of sadaqah jariyah and
          benefit you in this world and the Hereafter.
        </p>

        <a
          href="/Verse"
          className="inline-block mt-10 px-8 py-3 rounded-full bg-white/90 text-stone-900 font-medium
                     hover:bg-white hover:scale-105 transition-all duration-300"
        >
          Search a Verse
        </a>
      </div>
    </div>
  );
};

export default About;
