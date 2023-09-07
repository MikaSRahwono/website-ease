import React from "react";
import { motion } from "framer-motion";
import { Container, Stack, Image, Box, Text } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';

export const App = (params) => {
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      exit={{ opacity: 0, y: -100 }}
      
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Container padding={{ base: '10px', md: '90px' }} maxW={{ base: '90vw', sm: "80vw", lg: "100vw", md: "100vw" }} color='black'>
        <Stack
          pt={{ base:"6vh", md:"0" }}
          direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
          spacing={{ base: '10px', md: '5vh' }}
          alignItems={{ base: 'center', md: 'center' }}
        >
           <Box
                fontSize={{ base: '15px', md: '23px', sm: '20px' }}
                fontFamily="Aileron"
                textAlign={{ base: 'justify', md: 'justify' }}
                ref={ref}
              >
                <Text as="span" fontWeight="bold">
                  EASE YOUR NEEDS
                </Text>{' '}
                is a creative agency based in Jakarta, Indonesia. Started in September 2020
                when pandemic hits, our first service is providing zoom rental for everyone.
                During that time, we already have more than 40.000 loyal customers from
                several big companies. As the time goes, now we are expanding other digital
                services such as Live Streaming Services for your offline events and providing
                creative product photography & videography for brands. We are a group of
                creative and agile people and ready to maximize your events and brands’
                potentials to the fullest.
              </Box>
          <Image
            alt='easeyourneeds.co'
            boxSize={{ base: '100%', md: '50%', lg: '30%' }}
            src='img/summary.png'
            mb={{ base: '10px', md: '0' }}
            order={{ base: 0, md: 2 }}
          />
        </Stack>
      </Container>
    </motion.div>
  );
}
