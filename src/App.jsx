import React from "react";
import { Container, Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import MeasuresSection from "./components/MeasuresSection";
import SocialSection from "./components/SocialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container maxW="100vw" px={0} display="flex" flexDirection="column" alignItems="center" minH="100vh">
        <Box w="full" maxW="900px" px={{ base: 2, md: 6 }}>
          <HeroSection />
          <GallerySection />
          <MeasuresSection />
          <SocialSection />
          <ContactSection />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
