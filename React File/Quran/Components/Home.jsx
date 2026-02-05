import Card from "./card";
import Hero from "./Hero";
import { nanoid } from "nanoid";

const Home = () => {
  const cards = [
    {
      id: nanoid(),
      title: "Quran Verse Finder",
      arabicTitle: "القرآن", // Use this prop
      description:
        "Explore divine verses with Arabic audio recitation & translations in Urdu and English.",
      link: "/verse",
    },
    {
      id: nanoid(),
      title: "Hadith Collection",
      arabicTitle: "الحديث", // Use this prop
      description:
        "Access authentic Hadiths with Arabic text & translations in Urdu and English.",
      link: "/hadith", // Assuming you have this route, or keep /verse
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50/30">
      <Hero />
      {/* Cards Section */}
      <div className="py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Features
        </h2>
        <br />
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-wrap justify-center gap-40 relative -mt-20 z-10">
          {cards.map((card) => (
            // Ensure we are passing strings, not objects, to children props
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              arabicTitle={card.arabicTitle}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
