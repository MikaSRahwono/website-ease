import React, { useEffect, useState } from 'react';
import { Spacer, Box, Image, Flex, Heading, Center, Link, Text, Container, SimpleGrid, HStack, LinkBox, LinkOverlay, VStack } from "@chakra-ui/react";
import { useDB } from '@/lib/databaseContext';
import { useRouter } from 'next/router';
import { Link as NextLink}  from 'next/link';

function App() {

  return (
    <Box  bgColor="#f2f2f2" color='black'>
    <Container pt={{base: '5vh', md: '10vh'}}  minW='80vw'>
      <Center py='20vh'>
        <Box>
        <Heading size='4xl' textAlign='center'>
          Our Portfolio
        </Heading>
        <Center>
        <Text textAlign='center' w={{base: '90vw', md: '50vw'}} py={{base: '5vh', md: '10vh'}} fontSize='lg' lineHeight='4vh' letterSpacing='0.3rem'>
        This is a glimpse of our works. As we strive for excellence in every project, the works we’ve done are achieved through a deep and thorough process according to our client’s liking. We also convey our client’s brand’s messages meticulously with our own distinctive ways of execution.
        </Text>
        </Center>
        </Box>
      </Center>
      <Box w='100%' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2064.png?alt=media&token=558274f2-9304-4f15-ab13-62463c8f60d7" >
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
    </Container>
    </Box>
);
}

export default App;
