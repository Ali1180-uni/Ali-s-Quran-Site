import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// --- THEME CONSTANTS ---
const COLORS = {
  midnight: "#1A1C20",
  parchment: "#F5F5F0",
  gold: "#D4AF37" // Only for very subtle borders/highlights if needed
};

const Verse = () => {
  // --- STATE MANAGEMENT ---
  const [verseData, setVerseData] = useState(null); // Stores Arabic & Audio
  const [translation, setTranslation] = useState(null); // Stores Translated Text
  const [loading, setLoading] = useState(false);
  const [transLoading, setTransLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Audio Ref to control playback programmatically if needed
  const audioRef = useRef(null);

  // Form Handling
  const { register, handleSubmit, formState: { errors } } = useForm();

  // --- API LOGIC ---

  // 1. Fetch Arabic Verse + Audio
  const searchVerse = async (data) => {
    const inputVal = data.Verse.trim();
    
    // Validation: Must be "Surah:Ayah"
    if (!inputVal.includes(":")) {
      setError("Please use format: Surah:Ayah (e.g. 2:255)");
      return;
    }

    setLoading(true);
    setError("");
    setVerseData(null);
    setTranslation(null); // Reset translation on new search

    const [surah, ayah] = inputVal.split(":");

    try {
      // Fetch Arabic (Al-Afasy Audio included)
      const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`);
      setVerseData(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Verse not found. Please check the Surah and Ayah numbers.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Fetch Translation (Triggered by Dropdown)
  const handleTranslationChange = async (e) => {
    const lang = e.target.value;
    
    if (!verseData) {
      alert("Please search for a verse first.");
      e.target.value = "default"; // Reset dropdown
      return;
    }

    if (lang === "default") {
      setTranslation(null);
      return;
    }

    setTransLoading(true);
    
    try {
      let edition = lang === "ur" ? "ur.jalandhry" : "en.asad";
      
      const res = await axios.get(
        `https://api.alquran.cloud/v1/ayah/${verseData.surah.number}:${verseData.numberInSurah}/${edition}`
      );
      
      setTranslation({
        text: res.data.data.text,
        lang: lang === "ur" ? "Urdu" : "English",
        editionName: res.data.data.edition.name
      });
    } catch (err) {
      console.error(err);
      alert("Failed to fetch translation.");
    } finally {
      setTransLoading(false);
    }
  };

  // --- UI RENDER ---
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Background Image - Dark & Peaceful */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/back.jpg')", backgroundPositionY: '30%' }}
      >
        {/* Subtle dark overlay for depth */}
        <div className="absolute inset-0 bg-[#1A1C20]/30"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
      
      {/* 1. Header & Search Section */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5F0] mb-8 drop-shadow-lg">
          Verse Finder
        </h1>

        <form onSubmit={handleSubmit(searchVerse)} className="relative max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 shadow-2xl shadow-black/30 p-2 bg-[#1A1C20]/60 backdrop-blur-md rounded-2xl border border-[#F5F5F0]/10">
            <input
              {...register("Verse", { required: "Required" })}
              placeholder="Ex: 2:255 (Surah:Ayah)"
              className="flex-1 px-6 py-4 bg-transparent text-[#F5F5F0] text-lg font-medium placeholder-[#F5F5F0]/50 outline-none rounded-xl"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-[#F5F5F0] text-[#1A1C20] font-bold rounded-xl hover:bg-[#F5F5F0]/90 transition-colors disabled:opacity-70"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          {errors.Verse && <p className="text-red-400 mt-2 text-sm drop-shadow">{errors.Verse.message}</p>}
          {error && <p className="text-red-400 mt-2 text-sm font-medium drop-shadow">{error}</p>}
        </form>
      </div>

      {/* 2. Result Card */}
      {verseData && (
        <div className="max-w-4xl mx-auto bg-[#1A1C20]/70 backdrop-blur-lg rounded-3xl shadow-[0_10px_60px_-10px_rgba(0,0,0,0.5)] overflow-hidden border border-[#F5F5F0]/10 animate-fade-in-up">
          
          {/* Card Header */}
          <div className="bg-[#F5F5F0]/10 p-6 md:p-8 flex flex-wrap justify-between items-center text-[#F5F5F0] border-b border-[#F5F5F0]/10">
            <div>
              <h2 className="text-2xl font-serif font-bold">{verseData.surah.englishName}</h2>
              <p className="opacity-70 text-sm tracking-widest uppercase">{verseData.surah.englishNameTranslation}</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
               <span className="bg-[#F5F5F0]/10 px-4 py-2 rounded-lg text-sm font-mono">
                 Verse {verseData.numberInSurah}
               </span>
            </div>
          </div>

          {/* Arabic Text & Audio */}
          <div className="p-8 md:p-12 text-center">
            <p className="quran-text text-4xl md:text-6xl text-[#F5F5F0] leading-[2.5] md:leading-[2.5] mb-10 drop-shadow-lg" style={{ direction: 'rtl' }}>
              {verseData.text}
            </p>

            {/* Custom Audio Player Wrapper */}
            <div className="flex justify-center mb-8">
               <audio 
                 ref={audioRef} 
                 controls 
                 src={verseData.audio}
                 className="w-full max-w-md h-12 rounded-full shadow-md"
               />
            </div>

            <hr className="border-[#F5F5F0]/10 mb-8" />

            {/* Translation Controls */}
            <div className="max-w-2xl mx-auto text-left">
              <label className="block text-sm font-bold text-[#F5F5F0]/60 uppercase tracking-wider mb-3">
                Select Translation
              </label>
              
              <div className="relative">
                <select 
                  onChange={handleTranslationChange}
                  className="w-full p-4 bg-[#F5F5F0]/10 border border-[#F5F5F0]/10 rounded-xl text-[#F5F5F0] font-medium appearance-none cursor-pointer focus:outline-none focus:border-[#F5F5F0]/30 backdrop-blur-sm"
                >
                  <option value="default" className="bg-[#1A1C20] text-[#F5F5F0]">-- Choose Language --</option>
                  <option value="en" className="bg-[#1A1C20] text-[#F5F5F0]">English (Muhammad Asad)</option>
                  <option value="ur" className="bg-[#1A1C20] text-[#F5F5F0]">Urdu (Jalandhry)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#F5F5F0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Translation Output */}
              {transLoading && (
                <div className="mt-6 text-center text-[#F5F5F0]/50 animate-pulse">Loading translation...</div>
              )}

              {translation && !transLoading && (
                <div className="mt-8 bg-[#F5F5F0]/10 p-6 rounded-xl border-l-4 border-[#F5F5F0]/30 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-[#F5F5F0]/50 uppercase mb-2">
                    {translation.lang} Translation
                  </h3>
                  <p className={`text-xl md:text-2xl text-[#F5F5F0] leading-relaxed ${translation.lang === 'Urdu' ? 'urdu-text' : 'font-sans'}`}>
                    {translation.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Verse;