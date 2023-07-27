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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}               
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FSeminar.png?alt=media&token=9ab19b3d-4bac-4c1b-8317-cdb058844fa1" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}              
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FWedding-2.png?alt=media&token=458d6a4a-4d99-4297-a39c-0cd006f6e3ad" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}            
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FLamaran-2.png?alt=media&token=c2f43f9e-8aeb-4bb1-99b8-c0e5a3553da5" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}                 
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FGraduation-hat.png?alt=media&token=baaa77f5-0071-43bc-b15e-1169c30b7428" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}                   
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FUpacara-2.png?alt=media&token=cbb7f417-ec58-491e-a8b1-ea052a6d147b" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}                 
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FKonser.png?alt=media&token=0b00b123-c22c-44c6-8b96-f547c2633286" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}                  
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FReligion-2.png?alt=media&token=0d7f5f89-7886-440e-a895-95b2bb1063b3" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    textAlign='center'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}                  
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FSekolah.png?alt=media&token=afee619e-a55e-417a-a173-ddef805d9662" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                textAlign='center'
                                    py='0.5vw'
                                    px='1vw'
                                    fontFamily="Aileron"
                                    fontSize={{ base: "xl", md: "xl", lg: "lg" }}
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
                            w={{md: '25vw',lg: "15vw"}}
                            h={{md: '25vw',lg: "15vw"}}                 
                            alignItems={'center'}
                            >
                            <Center h={{md: '25vw',lg: "15vw"}}  >
                                <VStack>
                                <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FOthers.png?alt=media&token=864ef43d-01c8-4abb-b479-0ab1df6ba5b2" maxW={{ md: '8vw',lg: "5vw"}} />

                                <Heading
                                    p='0.5vw'
                                    fontFamily="Aileron"
                                    textAlign='center'
                                    fontSize={{ base: "xl", md: "xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FSeminar.png?alt=media&token=9ab19b3d-4bac-4c1b-8317-cdb058844fa1" maxW="15vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FWedding-2.png?alt=media&token=458d6a4a-4d99-4297-a39c-0cd006f6e3ad" maxW="15vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FLamaran-2.png?alt=media&token=c2f43f9e-8aeb-4bb1-99b8-c0e5a3553da5" maxW="15vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FGraduation-hat.png?alt=media&token=baaa77f5-0071-43bc-b15e-1169c30b7428" maxW="15vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FUpacara-2.png?alt=media&token=cbb7f417-ec58-491e-a8b1-ea052a6d147b" maxW="15vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FKonser.png?alt=media&token=0b00b123-c22c-44c6-8b96-f547c2633286" maxW="15vw" />

                            <Heading
                                p='0.5vw'
                                fontFamily="Aileron"
                                fontSize={{ base: "xl", md: "2xl", lg: "lg" }}
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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FReligion-2.png?alt=media&token=0d7f5f89-7886-440e-a895-95b2bb1063b3" maxW="15vw" />

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
                            <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FSekolah.png?alt=media&token=afee619e-a55e-417a-a173-ddef805d9662" maxW="15vw" />

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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Facara%2FOthers.png?alt=media&token=864ef43d-01c8-4abb-b479-0ab1df6ba5b2" maxW="15vw" />

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
