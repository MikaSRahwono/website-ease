import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";


export default function Keuntungan() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box >
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
                fontSize={{ base: "2xl", md: "4xl", lg: "3xl" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Ftrust-2.png?alt=media&token=356443cf-f1ce-460a-bcfe-2463f33223ba" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "2xl" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fvalue%20(1).png?alt=media&token=1a84775f-e5b6-4c78-a815-0f2de2a05fb9" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "2xl" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fbrand-2.png?alt=media&token=fdf10c34-a8eb-4cb0-afe2-143cd46a1fd5" maxW="5vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "2xl" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Frevenue-2.png?alt=media&token=08594ff3-caca-4daf-99df-9002d7683891" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "2xl" }}
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
                    h='25vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Ftrust-2.png?alt=media&token=356443cf-f1ce-460a-bcfe-2463f33223ba" maxW="50vw" />

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
                    h='25vh'  
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fvalue%20(1).png?alt=media&token=1a84775f-e5b6-4c78-a815-0f2de2a05fb9" maxW="50vw" />

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
                    h='25vh'                
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fbrand-2.png?alt=media&token=fdf10c34-a8eb-4cb0-afe2-143cd46a1fd5" maxW="50vw" />

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
                    h='25vh'  
                    alignItems={'center'}
                    >
                    <Center h='30vh'>
                        <VStack>
                        <Image alt="easeyourneeds" boxSize='90px' src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Frevenue-2.png?alt=media&token=08594ff3-caca-4daf-99df-9002d7683891" maxW="50vw" />

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
