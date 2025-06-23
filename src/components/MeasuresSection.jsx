import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import AnimatedSection from "./AnimatedSection";

const data = [
  { label: "Edad", value: "22 años" },
  { label: "Altura", value: "1,80 m" },
  { label: "Pecho", value: "90 cm" },
  { label: "Cintura", value: "70 cm" },
  { label: "Cadera", value: "80 cm" },
  { label: "Cabello", value: "Negro" },
  { label: "Ojos", value: "Negro" },
  { label: "Nacionalidad", value: "Colombiano" },
  { label: "Ubicación", value: "Madrid, España" },
  { label: "Tipo de cuerpo", value: "Delgado / Ectomorfo / Atlético" },
];

const MeasuresSection = () => (
  <AnimatedSection>
    <VStack spacing={8} py={{ base: 8, md: 12 }}>
      <Heading as="h2" size="lg" fontWeight="bold">
        Medidas y Datos Personales
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={6}
        maxW="700px"
        w="full"
      >
        {data.map((item) => (
          <Box
            key={item.label}
            p={4}
            borderRadius="lg"
            boxShadow="md"
            bg="#fff"
            textAlign="center"
          >
            <Text fontWeight="bold" color="gray.700">
              {item.label}
            </Text>
            <Text color="gray.600">{item.value}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  </AnimatedSection>
);

export default MeasuresSection;
