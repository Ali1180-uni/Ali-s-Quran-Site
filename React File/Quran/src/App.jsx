import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import "./App.css";
import Verse from "../Components/Verse";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Home from "../Components/Home";
import About from "../Components/About";


function App() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-parchment min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/verse" element={<Verse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
