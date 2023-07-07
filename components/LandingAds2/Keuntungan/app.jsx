import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";


export default function Keuntungan() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box>
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
                        <Image alt="easeyourneeds" src="/img/ads2/audiens.png" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="/img/ads2/fleksibel.png" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="/img/ads2/professional.png" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="/img/ads2/sponsor.png" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="/img/ads2/professional.png" maxW="50vw" />

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
                        <Image alt="easeyourneeds" src="/img/ads2/sponsor.png" maxW="50vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                        > Meningkatkan peluang sponsor </Heading>    
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
                        <Image alt="easeyourneeds" src="/img/ads2/professional.png" maxW="50vw" />

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
                        <Image alt="easeyourneeds" src="/img/ads2/sponsor.png" maxW="50vw" />

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
