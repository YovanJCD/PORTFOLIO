import React from "react";
import Hero from "./components/Hero";
import Measures from "./components/Measures";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Measures />
      <Gallery />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
