import Card from "./card";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const Hadees = () => {
  const books = [
    {
      id: nanoid(),
      title: "Sahih Bukhari",
      description:
        "Collection of authentic sayings of Prophet Muhammad (PBUH) compiled by Imam Bukhari.",
      arabicTitle: "صحيح البخاري",
      link: "/hadees/sahih-bukhari",
    },
    {
      id: nanoid(),
      title: "Sahih Muslim",
      description:
        "Another major collection of authentic sayings of Prophet Muhammad (PBUH) compiled by Imam Muslim.",
      arabicTitle: "صحيح مسلم",
      link: "/hadees/sahih-muslim",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50/30">
      <div className="py-16 px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Hadith Collections
        </motion.h2>
        <br />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto px-6 py-20 flex flex-wrap justify-center gap-40 relative -mt-20 z-10"
        >
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <Card
                title={book.title}
                description={book.description}
                arabicTitle={book.arabicTitle}
                link={book.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hadees;
