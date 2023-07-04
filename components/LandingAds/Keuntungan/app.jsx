import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack } from "@chakra-ui/react";

export default function Keuntungan() {
  return (
    <Box>
      <Center>
        <Box h={{ base: '100vh', sm: '100vh', md: '55vh', lg: '55vh' }} position="relative">
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
            w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
            h={{ base: '50vh', sm: '50vh', md: '55vh', lg: '55vh' }}
            p="2rem"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            textAlign="center"
          >
            <Heading
              fontFamily="Aileron"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              paddingBottom="2rem"
            >
              Keuntungan apa aja sih kalo foto produk kamu meyakinkan?
            </Heading>

            <Stack
              direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
              spacing="24px"
            >
              <Card
                maxW="sm"
                color="black"
                bgColor="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p="2rem"
                alignItems="center"
                >
                <Center>
                  <VStack>
                    <Image alt="easeyourneeds" src="/img/ads/image 18.png" maxW="5vw" />

                    <Heading
                      fontFamily="Aileron"
                      fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
                    >
                      Meningkatkan kepercayaan customer (brand trust)
                    </Heading>
                  </VStack>
                </Center>
              </Card>

              <Card
                maxW="sm"
                color="black"
                bgColor="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p="2rem"
                alignItems="center"
                >
                <Center>
                  <VStack>
                    <Image alt="easeyourneeds" src="/img/ads/image 18.png" maxW="5vw" />

                    <Heading
                      fontFamily="Aileron"
                      fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
                    >
                      Meningkatkan kepercayaan customer (brand trust)
                    </Heading>
                  </VStack>
                </Center>
              </Card>

              <Card
                maxW="sm"
                color="black"
                bgColor="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p="2rem"
                alignItems="center"
                >
                <Center>
                  <VStack>
                    <Image alt="easeyourneeds" src="/img/ads/image 18.png" maxW="5vw" />

                    <Heading
                      fontFamily="Aileron"
                      fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
                    >
                      Meningkatkan kepercayaan customer (brand trust)
                    </Heading>
                  </VStack>
                </Center>
              </Card>

              <Card
                maxW="sm"
                color="black"
                bgColor="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p="2rem"
                alignItems="center"
                >
                <Center>
                  <VStack>
                    <Image alt="easeyourneeds" src="/img/ads/image 18.png" maxW="5vw" />

                    <Heading
                      fontFamily="Aileron"
                      fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
                    >
                      Meningkatkan kepercayaan customer (brand trust)
                    </Heading>
                  </VStack>
                </Center>
              </Card>
            </Stack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
