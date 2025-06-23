import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => (
  <section className="contact-section">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="contact-content"
    >
      <h2>Contacto Directo</h2>
      <p>¿Interesado en trabajar conmigo? ¡Envíame un mensaje!</p>
      <a className="contact-btn" href="mailto:yovanjcd@icloud.com">Contactar por Email</a>
      <a className="contact-btn" href="https://wa.me/34602469821" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
    </motion.div>
  </section>
);

export default Contact;
