import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <img src="/profile.jpg" alt="Profile" className="hero-img" />
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Meghana Maraka</span> 👋
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer | Java | React | Spring Boot
        </p>
        <a href="#contact" className="hero-btn">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
