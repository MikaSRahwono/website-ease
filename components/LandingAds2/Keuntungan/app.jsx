import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack } from "@chakra-ui/react";


export default function Keuntungan() {
  return (
    <Box>

        <Center>

        <Box
            h="55vh"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bgGradient="linear(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)"
            />

            <VStack
              spacing={4}
              align="center"
              w={{ base: '60vw', lg: '60vw'}}
              h={{ base: '20vh'}}
              p="2rem"
              position="absolute"
              top="20%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="1"
              textAlign={'center'}
            >
              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "3xl" }}
              >
                Mengapa Live Streaming?
              </Heading>
              <Text paddingBottom='2rem'>
              Saat ini kegiatan live streaming sudah banyak digunakan karena memiliki beberapa keuntungan untuk acara itu sendiri, diantaranya:
              </Text>

              <HStack spacing="24px">
                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="20vw"
                    h='30vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="/img/ads2/audiens.png" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
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
                    h='30vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="/img/ads2/fleksibel.png" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
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
                    h='30vh'                 
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="/img/ads2/professional.png" maxW="5vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
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
                    h='30vh'
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="/img/ads2/sponsor.png" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                        > Meningkatkan peluang sponsor </Heading>    
                        </VStack>   
                    </Center>
                </Card>

            </HStack>

            </VStack>
            </Box>
        </Center>
    </Box>
  );
}
