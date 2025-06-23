import React from "react";
import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import AnimatedSection from "./AnimatedSection";
import heroImg from "../assets/example-hero.jpg";

const HeroSection = () => (
  <AnimatedSection>
    <VStack spacing={6} align="center" py={{ base: 10, md: 16 }}>
      <Image
        src={heroImg}
        alt="Yován Castro"
        borderRadius="full"
        boxSize={{ base: "120px", md: "180px" }}
        border="4px solid #111"
        boxShadow="lg"
        objectFit="cover"
      />
      <Box textAlign={{ base: "center", md: "center" }}>
        <Heading as="h1" size={{ base: "lg", md: "2xl" }} fontWeight="bold">
          Yován Castro
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
          Modelo Profesional
        </Text>
        <Text color="gray.500">Madrid, España</Text>
      </Box>
    </VStack>
  </AnimatedSection>
);

export default HeroSection;
