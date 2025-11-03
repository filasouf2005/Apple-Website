import { useRef } from "react";

const Hero = () => {
     const videoRef = useRef();

  return (
    <section id="hero">
      <div>
        <h1>MacBook</h1>
        <img src="/title.png" alt="Mackbook Title" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>

      <p>From $1599 or $133/mo for months</p>
    </section>
  );
};

export default Hero;
