import React from "react";
import { HStack, Link, Icon, Heading, VStack, Box } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const SocialSection = () => (
  <AnimatedSection>
    <VStack
      spacing={6}
      py={{ base: 8, md: 12 }}
      bgGradient="linear(to-b, #f9fafb, #e3e6f3)"
      borderRadius="xl"
    >
      <Heading as="h2" size="lg" fontWeight="bold">
        Redes Sociales
      </Heading>
      <HStack spacing={{ base: 4, md: 8 }} justify="center" flexWrap="wrap">
        <Link
          href="https://instagram.com/imnotyovan"
          isExternal
          display="flex"
          alignItems="center"
          fontWeight="bold"
          color="#111"
          _hover={{ color: "#e1306c" }}
          fontSize={{ base: "md", md: "lg" }}
        >
          <Icon as={FaInstagram} boxSize={6} mr={2} />@imnotyovan
        </Link>
        <Link
          href="https://wa.me/34602469821"
          isExternal
          display="flex"
          alignItems="center"
          fontWeight="bold"
          color="#111"
          _hover={{ color: "#25d366" }}
          fontSize={{ base: "md", md: "lg" }}
        >
          <Icon as={FaWhatsapp} boxSize={6} mr={2} />WhatsApp
        </Link>
      </HStack>
      <Box w="full" maxW="400px" mt={8}>
        <iframe
          src="https://www.instagram.com/imnotyovan/embed"
          width="100%"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          title="Instagram Feed"
          style={{
            borderRadius: "12px",
            border: "1px solid #e3e6f3",
          }}
        ></iframe>
      </Box>
    </VStack>
  </AnimatedSection>
);

export default SocialSection;
