import { Box } from "@chakra-ui/react";
import React from 'react';
import Hero from '../components/LandingAds/Hero/app';
import PageTwo from '../components/LandingAds/PageTwo/app';

const Contact = () => {

  return (
    <Box color="black" background="#f2f2f2" minHeight="100vh">
      <Hero />
      <PageTwo />
    </Box>
  );
};

export default Contact;
