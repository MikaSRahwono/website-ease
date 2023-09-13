import React, { useEffect, useState } from 'react';
import { Spacer, Box, Image, Flex, Heading, Center, Link, Text, Container, SimpleGrid, HStack, LinkBox, LinkOverlay, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as NextLink}  from 'next/link';

function App() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box  bgColor="#f2f2f2" color='black' pb='10vh'>
    <Container pt={{base: '5vh', md: '10vh'}}  minW='80vw'>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <Center ref={ref} py='20vh'>
        <Box>
        <Heading size='4xl' textAlign='center'>
          Our Portfolio
        </Heading>
        <Center>
        <Text textAlign='center' w={{base: '90vw', md: '50vw'}} py={{base: '5vh', md: '10vh'}} fontSize='lg' lineHeight='4vh' >
        “ We don't just create for the sake of it; we believe in making a positive impact on society. Discover our project and initiatives that contribute to the greater good, Through vivid imagery and interactive elements, showcasing the process of ideation - from raw concepts to refined gems. Witness the evolution of ideas, the spark of inspiration, and the thrill of breaking new ground. “
        </Text>
        </Center>
        </Box>
      </Center>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

      <Box ref={ref2} w='100%' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2064.png?alt=media&token=558274f2-9304-4f15-ab13-62463c8f60d7" >
        <Box h='50vh'>
          <Center h='50vh' color='white' backdropFilter='auto' backdropBlur='3px'>
          <VStack>
            <Heading textShadow= '0 3px 5px black' fontSize='5xl'>
              Live Streaming
            </Heading>
            <Link as={NextLink} href='/projects/live' textShadow= '0 3px 5px black'>
              View Project
            </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
      <Box w='100%' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2065.png?alt=media&token=48828694-df95-4328-acea-3abfa66be1d5" >
        <Box h='50vh'>
          <Center h='50vh' color='white' backdropFilter='auto' backdropBlur='3px'>
          <VStack>
            <Heading textShadow= '0 3px 5px black' fontSize='5xl'>
              Studio
            </Heading>
            <Link as={NextLink} href='/projects/studio' textShadow= '0 3px 5px black'>
              View Project
            </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
      <Box w='100%' blur='10vw' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2066.png?alt=media&token=f67674d9-a677-404b-ae71-db47766dd807" >
        <Box h='50vh'>
          <Center h='50vh' color='white' backdropFilter='auto' backdropBlur='3px'>
            <VStack>
            <Heading textShadow= '0 3px 5px black' fontSize='5xl'>
              Zoom
            </Heading>
            <Link as={NextLink} href='/projects/zoom' textShadow= '0 3px 5px black'>
              View Project
            </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
      </motion.div>
    </Container>
    </Box>
);
}

export default App;
