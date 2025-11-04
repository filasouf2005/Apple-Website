import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewr from "./components/ProductViewr";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewr />
      <Showcase />
    </main>
  );
};

export default App;
