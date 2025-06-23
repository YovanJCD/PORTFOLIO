import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=600&q=80",
];

const Gallery = () => (
  <section className="gallery-section">
    <h2>Trabajos</h2>
    <div className="gallery-grid">
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`Trabajo ${i + 1}`}
          className="gallery-img"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
        />
      ))}
    </div>
  </section>
);

export default Gallery;
