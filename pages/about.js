import React from 'react';
import { Box, Container } from "@chakra-ui/react"
import { App as Hero } from '@/components/AboutUs/Hero/app';
import { App as History } from '@/components/AboutUs/History/app';

export default function About() {
  return (
    <Box position="relative" color="black" background="#f2f2f2" minHeight="100vh">
      <Hero></Hero>
      <History></History>
    </Box>
  );
}
