import React from "react";
import { SimpleGrid, Box, Image, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import img1 from "../assets/example-gallery-1.jpg";
import img2 from "../assets/example-gallery-2.jpg";
import img3 from "../assets/example-gallery-3.jpg";

const images = [img1, img2, img3];

const MotionBox = motion(Box);

const GallerySection = () => (
  <AnimatedSection>
    <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="bold">
      Galería
    </Heading>
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      spacing={6}
      maxW="1200px"
      mx="auto"
    >
      {images.map((img, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          bg="#fff"
        >
          <Image
            src={img}
            alt={`Trabajo ${i + 1}`}
            w="100%"
            h={{ base: "180px", md: "320px" }}
            objectFit="cover"
          />
        </MotionBox>
      ))}
    </SimpleGrid>
  </AnimatedSection>
);

export default GallerySection;
