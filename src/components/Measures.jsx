import React from "react";
import { motion } from "framer-motion";
import "./Measures.css";

const data = [
  { label: "Edad", value: "22 años" },
  { label: "Altura", value: "1,80 m" },
  { label: "Pecho", value: "90 cm" },
  { label: "Cintura", value: "70 cm" },
  { label: "Cadera", value: "80 cm" },
  { label: "Cabello", value: "Negro" },
  { label: "Ojos", value: "Negro" },
  { label: "Nacionalidad", value: "Colombiano" },
  { label: "Tipo de cuerpo", value: "Delgado / Ectomorfo / Atlético" },
];

const Measures = () => (
  <section className="measures-section">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="measures-content"
    >
      <h2>Medidas y Datos</h2>
      <ul>
        {data.map((item) => (
          <li key={item.label}>
            <span>{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default Measures;
