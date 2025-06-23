import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" py={8} bg="#fff" color="#111" borderTop="1px" borderColor="gray.200">
    <VStack spacing={2}>
      <Text fontSize="sm">
        © {new Date().getFullYear()} Yován Castro · Modelo Profesional
      </Text>
      <Link href="mailto:yovanjcd@icloud.com" color="#111" _hover={{ color: "gray.600" }}>
        yovanjcd@icloud.com
      </Link>
    </VStack>
  </Box>
);

export default Footer;
