import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";


export default function Keuntungan() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box
    >
        <Center>
        <Box
          >
            <VStack
              spacing={4}
              align="center"
              w={{ base: '95vw', lg: '60vw'}}
              p={{base: '1.5rem',md: "2rem"}}
              textAlign={'center'}
            >
              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
              >
                Mengapa Live Streaming?
              </Heading>
              <Text paddingBottom='2rem'>
              Saat ini kegiatan live streaming sudah banyak digunakan karena memiliki beberapa keuntungan untuk acara itu sendiri, diantaranya:
              </Text>
              {isLargerThan400 ? 
              <HStack spacing="24px">
                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="20vw"
                    h={{md: "20vh",lg: '30vh'}}                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FAudiens.png?alt=media&token=68c83b75-35cb-410d-a1db-96edf17985d7" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                        > Menjangkau audiens yang lebih luas</Heading>    
                        </VStack>   
                    </Center>
                </Card>

                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="20vw"
                    h={{md: "20vh",lg: '30vh'}}                
                    alignItems={'center'}
                    >
                    <Center h={{md: "20vh",lg: '30vh'}}>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FFleksibel.png?alt=media&token=f09d4444-58a8-4275-905a-51e7d0f36427" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                        > Fleksibel, dapat dihadiri secara offline maupun online </Heading>    
                        </VStack>   
                    </Center>
                </Card>

                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="20vw"
                    h={{md: "20vh",lg: '30vh'}}                 
                    alignItems={'center'}
                    >
                    <Center h={{md: "20vh",lg: '30vh'}}>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FProfesional.png?alt=media&token=9316a765-052b-4ee8-8845-b23c79474931" maxW="5vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                        > Acara terlihat lebih professional</Heading>    
                        </VStack>   
                    </Center>
                </Card>

                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="20vw"
                    h={{md: "20vh",lg: '30vh'}}
                    alignItems={'center'}
                    >
                    <Center h={{md: "20vh",lg: '30vh'}}>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FSponsor.png?alt=media&token=24e2af6d-27cd-449e-b81f-732f4de02334" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                        > Meningkatkan peluang sponsor </Heading>    
                        </VStack>   
                    </Center>
                </Card>
              </HStack>
              : 
              <HStack>
                <VStack spacing="24px">
                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="lg"
                    w="40vw"
                    h='25vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FAudiens.png?alt=media&token=68c83b75-35cb-410d-a1db-96edf17985d7" maxW="50vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                        > Menjangkau audiens yang lebih luas</Heading>    
                        </VStack>   
                    </Center>
                </Card>

                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="lg"
                    w="40vw"
                    h='25vh'  
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FFleksibel.png?alt=media&token=f09d4444-58a8-4275-905a-51e7d0f36427" maxW="50vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                        > Fleksibel, dapat dihadiri secara offline maupun online </Heading>    
                        </VStack>   
                    </Center>
                </Card>
              </VStack> 
              <VStack spacing="24px">
                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="lg"
                    w="40vw"
                    h='25vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FProfesional.png?alt=media&token=9316a765-052b-4ee8-8845-b23c79474931" maxW="50vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                        > Acara terlihat lebih professional</Heading>    
                        </VStack>   
                    </Center>
                </Card>

                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="lg"
                    w="40vw"
                    h='25vh'  
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2FSponsor.png?alt=media&token=24e2af6d-27cd-449e-b81f-732f4de02334" maxW="50vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                        > Meningkatkan peluang sponsor </Heading>    
                        </VStack>   
                    </Center>
                </Card>
              </VStack> 
              </HStack>
              }
            </VStack>
            </Box>
        </Center>
    </Box>
  );
}
