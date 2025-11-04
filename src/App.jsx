import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewr from "./components/ProductViewr";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewr />
    </main>
  );
};

export default App;
