import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Socials.css";

const Socials = () => (
  <section className="socials-section">
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="socials-content"
    >
      <h2>Redes y Contacto</h2>
      <div className="socials-links">
        <a href="https://instagram.com/imnotyovan" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> @imnotyovan
        </a>
        <a href="mailto:yovanjcd@icloud.com">
          <FaEnvelope /> yovanjcd@icloud.com
        </a>
        <a href="https://wa.me/34602469821" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </motion.div>
  </section>
);

export default Socials;
