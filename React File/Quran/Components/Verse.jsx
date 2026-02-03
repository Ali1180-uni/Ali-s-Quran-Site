import {useEffect, useState} from 'react'
import axios from "axios";

const Verse = () => {
  const [verseData, setVerseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.alquran.cloud/v1/ayah/262/en.asad");
      console.log(res.data);
      setVerseData(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error("There was an error!", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-800 mb-4">Verse & Translation</h1>
        {loading ? (
          <p className="text-stone-600">Loading...</p>
        ) : verseData ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-stone-800 text-lg">{verseData.text}</p>
            <p className="text-stone-500 mt-2">Surah: {verseData.surah?.englishName} | Ayah: {verseData.numberInSurah}</p>
          </div>
        ) : (
          <p className="text-stone-600">Failed to load verse</p>
        )}
      </div>
    </div>
  );
}

export default Verse
