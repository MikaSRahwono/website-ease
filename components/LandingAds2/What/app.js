import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack } from "@chakra-ui/react";
import { Divider } from "antd";


export default function WhatIs() {
  return (
    <Box pt='10vh' pb='20vh'>
        <Center>
        <Container minW='70vw'>
                <HStack>
                    <VStack w='30vw' align='start' spacing='3vh'>
                        <Heading fontSize='2.2vw'>
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
        </Container>
        </Center>
    </Box>
  );
}
