const Hero = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-emerald-50 via-teal-50/40 to-transparent flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-5 justify-center px-8 md:pl-20 lg:pl-32 py-12">
        <h2 className="text-emerald-600 text-xl md:text-5xl font-semibold tracking-wide">
          Assalam-u-Alaikum
        </h2>
        <div className="leading-tight">
          <p className="text-gray-900 text-4xl md:text-6xl lg:text-7xl font-bold">
            Explore the
          </p>
          <p className="text-gray-900 text-4xl md:text-6xl lg:text-7xl font-bold">
            Divine Words
          </p>
          <p className="text-emerald-600 text-4xl md:text-6xl lg:text-7xl font-bold">
            of Guidance
          </p>
        </div>
        <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed mt-2">
          Discover the beauty of the Quran and Hadith — your comprehensive
          source for verses, translations, and audio recitations in Arabic, Urdu
          & English.
        </p>
        <div className="flex items-center gap-4 mt-6">
        </div>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center p-8">
        <img
          src="/hero.jpg"
          alt="Quran"
          className="max-w-full h-auto max-h-[500px] object-contain drop-shadow-2xl rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
