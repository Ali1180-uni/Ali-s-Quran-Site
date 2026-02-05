import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BOOK_SLUG_MAP = {
  "sahih-bukhari": "sahih-bukhari",
  "sahih-muslim": "sahih-muslim",
};

const BOOK_DISPLAY_NAMES = {
  "sahih-bukhari": "Sahih Bukhari",
  "sahih-muslim": "Sahih Muslim",
};

const HadeesView = () => {
  const { bookSlug } = useParams();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get valid API book name from URL slug
  const bookName = BOOK_SLUG_MAP[bookSlug] || bookSlug;
  const displayName = BOOK_DISPLAY_NAMES[bookSlug] || bookSlug;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(
          `https://hadithapi.com/api/${bookName}/chapters?apiKey=$2y$10$mKap64F65i7SeYP3DFHxqatykEDye9LwoeD0atli4ArUOEc8qu`
        );
        
        if (response.data && response.data.chapters) {
          setChapters(response.data.chapters);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load chapters. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (bookName) {
      getData();
    }
  }, [bookName]);

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50/30 py-16 px-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4"
      >
        {displayName}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-500 mb-12"
      >
        Select a chapter to read hadiths
      </motion.p>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin h-12 w-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full"></div>
        </div>
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 py-10"
        >
          {error}
        </motion.p>
      )}

      {!loading && !error && chapters.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 10) }}
              className="group flex items-center justify-between p-6 border-b border-gray-200 cursor-pointer hover:bg-emerald-50/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                    {chapter.chapterEnglish || chapter.chapter}
                  </h3>
                  {chapter.chapterArabic && (
                    <p className="text-gray-500 text-sm arabic-text">
                      {chapter.chapterArabic}
                    </p>
                  )}
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HadeesView;
