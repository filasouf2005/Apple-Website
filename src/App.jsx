import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewr from "./components/ProductViewr";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlight from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="p-10 ">
      <Navbar />
      <Hero />
      <ProductViewr />
      <Showcase />
      <Performance />
      <Features />
      <Highlight />
      <Footer />
    </main>
  );
};

export default App;
