import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";
import { Divider } from "antd";


export default function WhatIs() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box pt={{base: '5vh', md: '5vh', lg: '13vh'}} pb={{base: "5vh", md: '0' ,lg: '20vh'}}>
        <Center>
        <Container minW='80vw'>
          {isLargerThan400 ? 
            <HStack spacing='5vw'>
              <VStack w={{md: '50vw',lg: '30vw'}} align='start' spacing='3vh'>
                  <Heading fontSize={{base: "xl",md: '3xl'}}>
                  Apa itu live streaming? 
                  </Heading>
                  <Text>
                  Live Streaming adalah media streaming yang direkam dan disiarkan secara real-time melalui internet melalui perantara platform seperti Zoom, Youtube, Facebook, Instagram, atau platform lainnya. 

                  </Text>
              </VStack>
              <Box 
              bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fapaitulive.png?alt=media&token=60efd9ad-0983-4b3e-9a46-d51f1e29ad0e)" 
              bgPos='center'
              bgSize='contain'
              bgRepeat='no-repeat'
              w='50vw'
              h='40vh'
              pl='auto'
              
              >
              </Box>
            </HStack>
          : <VStack>
              <VStack w='80vw' align='center' spacing='3vh'>
                  <Heading fontSize={{base: "3xl",md: '2.2vw'}}> 
                  Apa itu live streaming? 
                  </Heading>
                  <Text textAlign='center'>
                  Live Streaming adalah media streaming yang direkam dan disiarkan secara real-time melalui internet melalui perantara platform seperti Zoom, Youtube, Facebook, Instagram, atau platform lainnya. 

                  </Text>
              </VStack>
              <Box 
              bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fapaitulive.png?alt=media&token=60efd9ad-0983-4b3e-9a46-d51f1e29ad0e)" 
              bgPos='center'
              bgSize='contain'
              bgRepeat='no-repeat'
              w='80vw'
              h='40vh'              
              >
              </Box>
            </VStack>}
        </Container>
        </Center>
    </Box>
  );
}
