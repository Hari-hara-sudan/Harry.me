import React from 'react';
import p2 from '../Assets/p2.png'

function Hero() {
  return (
    <section id="hero" className="hero" data-aos="fade-down" >
      <div className="hero-content">
      <div className="hero-image" >
          <img src={p2} alt="Hariharasudhan" data-aos="fade-right" data-aos-delay="600" />
        </div>
        <div className="hero-text">
          <h1 data-aos="fade-left" data-aos-delay="500" >Hi, I'm Hariharasudhan</h1>
          <p  data-aos="fade-right" data-aos-delay="600">B.Tech Student, Passionate Web Developer</p>
          <a href="#projects" className="btn"  data-aos="fade-up "  data-aos-delay="100">View My Projects</a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
