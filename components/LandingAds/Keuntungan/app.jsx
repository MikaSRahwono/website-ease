import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";


export default function Keuntungan() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box 
      >
        <Center >
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
                fontWeight={"bold"}
                fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
                pb={{base: '1rem', md: '2rem'}}
              >
                Keuntungan apa aja sih kalo foto produk kamu meyakinkan?
              </Heading>
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
                        <Image alt="easeyourneeds" src="img/ads/keuntungan/Brand Trust.png" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "xl" }}
                        > Meningkatkan kepercayaan customer (brand trust)</Heading>    
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
                        <Image alt="easeyourneeds" src="img/ads/keuntungan/Product Value.png" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "xl" }}
                        > Meningkatkan nilai jual produk (product value) </Heading>    
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
                        <Image alt="easeyourneeds" src="img/ads/keuntungan/Brand Identity.png" maxW="5vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "xl" }}
                        > Menjadi identitas dari brand (brand identity)</Heading>    
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
                        <Image alt="easeyourneeds" src="img/ads/keuntungan/Increase Revenue.png" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "md", lg: "xl" }}
                        > Meningkatkan omset penjualan dalam jangka panjang (increase revenue) </Heading>    
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
                    h='30vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="img/ads/keuntungan/Brand Trust.png" maxW="50vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "l", md: "2xl", lg: "lg" }}
                        > Meningkatkan kepercayaan customer (brand trust)</Heading>    
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
                    h='30vh'  
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="img/ads/keuntungan/Product Value.png" maxW="50vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "l", md: "2xl", lg: "lg" }}
                        > Meningkatkan nilai jual produk (product value)</Heading>    
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
                    h='30vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="img/ads/keuntungan/Brand Identity.png" maxW="50vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "l", md: "2xl", lg: "lg" }}
                        > Menjadi identitas dari brand (brand identity)</Heading>    
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
                    h='30vh'  
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="img/ads/keuntungan/Increase Revenue.png" maxW="50vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "sm", md: "2xl", lg: "lg" }}
                        > Meningkatkan omset penjualan dalam jangka panjang (increase revenue) </Heading>    
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
