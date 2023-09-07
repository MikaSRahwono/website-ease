import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Keuntungan() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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
              <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Heading ref={ref}
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
              >
                Mengapa Live Streaming?
              </Heading>
              <Text paddingBottom='2rem'>
              Saat ini kegiatan live streaming sudah banyak digunakan karena memiliki beberapa keuntungan untuk acara itu sendiri, diantaranya:
              </Text>
              </motion.div>
              {isLargerThan400 ? 
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <HStack ref={ref2} spacing="24px">
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Faudiens%20(1).png?alt=media&token=66c5d891-d2d3-4534-b1f5-3f7dd695d606" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Fflexible-2.png?alt=media&token=530d1c64-c8b7-456d-90fa-5cdc43dca43e" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Fprofesional.png?alt=media&token=9716600f-a514-45d6-aa27-aa4c325e2ca0" maxW="5vw" />

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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Fsponsor-2.png?alt=media&token=af2b7730-cba7-4f09-a158-bc2305abfc0f" maxW="5vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "2xl", md: "xl", lg: "lg" }}
                        > Meningkatkan peluang sponsor </Heading>    
                        </VStack>   
                    </Center>
                </Card>
              </HStack>
              </motion.div>
              : 
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <HStack ref={ref2}>
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Faudiens%20(1).png?alt=media&token=66c5d891-d2d3-4534-b1f5-3f7dd695d606" maxW="20vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "sm", md: "2xl", lg: "lg" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Fflexible-2.png?alt=media&token=530d1c64-c8b7-456d-90fa-5cdc43dca43e" maxW="18vw" />

                        <Heading
                            p="0.5vw"
                            fontFamily="Aileron"
                            fontSize={{ base: "sm", md: "2xl", lg: "lg" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Fprofesional.png?alt=media&token=9716600f-a514-45d6-aa27-aa4c325e2ca0" maxW="20vw" />

                        <Heading
                            p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "sm", md: "2xl", lg: "lg" }}
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
                        <Image alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvw%2Fsponsor-2.png?alt=media&token=af2b7730-cba7-4f09-a158-bc2305abfc0f" maxW="20vw" />

                        <Heading
                          p='1vw'
                            fontFamily="Aileron"
                            fontSize={{ base: "sm", md: "2xl", lg: "lg" }}
                        > Meningkatkan peluang sponsor </Heading>    
                        </VStack>   
                    </Center>
                </Card>
              </VStack> 
              </HStack>
              </motion.div>
              }
            </VStack>
            </Box>
        </Center>
    </Box>
  );
}
