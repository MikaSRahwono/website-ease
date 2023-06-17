import React from 'react';
import { Box, Container } from "@chakra-ui/react"
import { App as Hero } from '@/components/AboutUs/Hero/app';
import { App as History } from '@/components/AboutUs/History/app';
import { App as OurValues } from '@/components/AboutUs/OurValues/app';
import { App as Teams } from '@/components/AboutUs/Teams/app';

export default function About() {
  return (
    <Box color="black" background="#f2f2f2" minHeight="100vh">
      <Hero></Hero>
      <History></History>
      <OurValues></OurValues>
      <Teams></Teams>
    </Box>
  );
}
