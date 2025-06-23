import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import AnimatedSection from "./AnimatedSection";
import "./ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AnimatedSection>
      <VStack spacing={8} py={{ base: 8, md: 12 }}>
        <Heading as="h2" size="lg" fontWeight="bold">
          Contacto
        </Heading>
        <Box
          as="form"
          onSubmit={handleSubmit}
          w="100%"
          maxW="400px"
          px={{ base: 2, md: 0 }}
        >
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Tu email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tu mensaje"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blackAlpha"
              w="full"
              isLoading={sent}
            >
              {sent ? "Enviando..." : "Enviar"}
            </Button>
          </VStack>
        </Box>
        {sent && (
          <Text color="green.500" fontWeight="bold">
            ¡Gracias por tu mensaje! También puedes escribir a{" "}
            <a href="mailto:yovanjcd@icloud.com">yovanjcd@icloud.com</a>
          </Text>
        )}
      </VStack>
    </AnimatedSection>
  );
};

export default ContactSection;
