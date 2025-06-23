import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => (
  <section className="hero-section">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-content"
    >
      <img
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80"
        alt="Yován Castro"
        className="hero-img"
      />
      <div className="hero-text">
        <h1>Yován Castro</h1>
        <h2>Modelo Profesional</h2>
        <p>Madrid, España</p>
      </div>
    </motion.div>
  </section>
);

export default Hero;
