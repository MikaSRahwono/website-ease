import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function WhatIs() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box pt={{base: '5vh', md: '5vh', lg: '13vh'}} pb={{base: "5vh", md: '0' ,lg: '20vh'}}>
        <Center>
        <Container minW='80vw'>
          {isLargerThan400 ? 
            <HStack spacing='5vw'>
              <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <VStack ref={ref} w={{md: '50vw',lg: '30vw'}} align='start' spacing='3vh'>
                  <Heading fontSize={{base: "xl",md: '3xl'}}>
                  Apa itu live streaming? 
                  </Heading>
                  <Text>
                  Live Streaming adalah media streaming yang direkam dan disiarkan secara real-time melalui internet melalui perantara platform seperti Zoom, Youtube, Facebook, Instagram, atau platform lainnya. 

                  </Text>
              </VStack>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Box 
              ref={ref2}
              bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fapaitulive.png?alt=media&token=60efd9ad-0983-4b3e-9a46-d51f1e29ad0e)" 
              bgPos='center'
              bgSize='contain'
              bgRepeat='no-repeat'
              w='50vw'
              h='40vh'
              pl='auto'
              >
              </Box>
              </motion.div>
            </HStack>
          : <VStack>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <VStack ref={ref} w='80vw' align='center' spacing='3vh'>
                  <Center w='50vw' p='5vw'>
                    <Heading fontSize={{base: "3xl",md: '2.2vw'}}> 
                    Apa itu live streaming? 
                    </Heading>
                  </Center>
                  <Text textAlign='center'>
                  Live Streaming adalah media streaming yang direkam dan disiarkan secara real-time melalui internet melalui perantara platform seperti Zoom, Youtube, Facebook, Instagram, atau platform lainnya. 

                  </Text>
              </VStack>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Box 
              ref={ref2}
              bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fapaitulive.png?alt=media&token=60efd9ad-0983-4b3e-9a46-d51f1e29ad0e)" 
              bgPos='center'
              bgSize='contain'
              bgRepeat='no-repeat'
              w='80vw'
              h='40vh'              
              >
              </Box>
              </motion.div>
            </VStack>}
        </Container>
        </Center>
    </Box>
  );
}
