import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";


export default function ApaSaja() {
    const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box pt={{base: "10vh", md: '10vh', lg: '30vh'}} pb={{base: '10vh',md: '10vh', lg: '20vh'}} >
        <Center>
            <VStack spacing='5vh'>
                <Heading fontFamily="Aileron" fontSize='3xl' textAlign='center' p={{md: '0', base: '5vw'}}>
                Acara apa aja sih yang bisa di live streaming?
                </Heading>
                {isLargerThan400 ?
                <VStack>
                    <HStack>
                        <Card
                            color='black'
                            bgColor='white'
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            w="20vw"
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/seminar.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                                > Seminar</Heading>    
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
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/pernikahan.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                                > Pernikahan</Heading>    
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
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/lamaran.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                                > Lamaran</Heading>    
                                </VStack>   
                            </Center>
                        </Card>
                    </HStack>
                    <HStack>
                        <Card
                            color='black'
                            bgColor='white'
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            w="20vw"
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/wisuda.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                                > Wisuda</Heading>    
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
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/upacara.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                                > Upacara</Heading>    
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
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/konser.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                                > Konser</Heading>    
                                </VStack>   
                            </Center>
                        </Card>
                    </HStack>
                    <HStack>
                        <Card
                            color='black'
                            bgColor='white'
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            w="20vw"
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/agama.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    textAlign='center'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                                > Acara Keagamaan</Heading>    
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
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/sekolah.png" maxW="5vw" />

                                <Heading
                                textAlign='center'
                                    py='0.5vw'
                                    px='1vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                                > Acara Sekolah atau Universitas</Heading>    
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
                            h='20vh'                
                            alignItems={'center'}
                            >
                            <Center h='20vh'>
                                <VStack>
                                <Image alt="easeyourneeds" src="/img/ads2/icons/lainnya.png" maxW="5vw" />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    textAlign='center'
                                    fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                                > Acara Lainnya</Heading>    
                                </VStack>   
                            </Center>
                        </Card>
                    </HStack>
                </VStack>
                : 
                <VStack>
                <HStack>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/seminar.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                            > Seminar</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/pernikahan.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                            > Pernikahan</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                </HStack>
                <HStack>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/lamaran.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                            > Lamaran</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/wisuda.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                            > Wisuda</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                </HStack>
                <HStack>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/upacara.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                            > Upacara</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/konser.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "2xl", md: "2xl", lg: "lg" }}
                            > Konser</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                </HStack>
                <HStack>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/agama.png" maxW="30vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                                textAlign='center'
                            > Acara Keagamaan</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                    <Card
                        color='black'
                        bgColor='white'
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        w="40vw"
                        h='20vh'                
                        alignItems={'center'}
                        >
                        <Center h='20vh'>
                            <VStack>
                            <Image alt="easeyourneeds" src="/img/ads2/icons/sekolah.png" maxW="30vw" />

                            <Heading
                                textAlign='center'
                                py='0.5vw'
                                px='1.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "lg", md: "2xl", lg: "lg" }}
                            > Acara Sekolah atau Universitas</Heading>    
                            </VStack>   
                        </Center>
                    </Card>
                </HStack>
                <Card
                    color='black'
                    bgColor='white'
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="40vw"
                    h='20vh'                
                    alignItems={'center'}
                    >
                    <Center h='20vh'>
                        <VStack>
                        <Image alt="easeyourneeds" src="/img/ads2/icons/lainnya.png" maxW="30vw" />

                        <Heading
                            p='0.5vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
                        > Acara Lainnya</Heading>    
                        </VStack>   
                    </Center>
                </Card>
            </VStack>
                }
            </VStack>
        </Center>
    </Box>
  );
}
