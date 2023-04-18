import { 
    Flex,
    Box,
    Text,
    Image,
    Grid,
    SimpleGrid,
    Stack,
    Container,
    VStack,
    Center
 
 } from "@chakra-ui/react";

 export const App = (params) => {

    return (
    <Box w="full" p={10} color='#000'>
      <Box alignItems={'center'} bg="white" p={5}>
        <Center>
        <Text textAlign={'center'} fontSize={{lg: "2vw", sm:'3vh'}} fontWeight="bold" mb={5}>
          Terima kasih telah mempercayai kami
        </Text>
        </Center>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={10}
          justifyItems="center"
        >
          <Box>
            <VStack>
              <Image boxSize={{ base: "40px", sm: "80px", md: "100px" }} src="img/testhanks.svg" />
              <Text fontWeight={"bold"} fontSize={{ base: "1.5vw", md: "2vw", sm: "4vw" }}>
              40.000+
              </Text>
              <Text align="center" color="#828d8b" fontSize={{ base: "1vw", lg: "1vw", sm: "2vh" }}>
               Loyal Customers
              </Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image boxSize={{ base: "40px", sm: "80px", md: "100px" }} src="img/testhanks.svg" />
              <Text fontWeight={"bold"} fontSize={{ base: "1.5vw", md: "2vw", sm: "4vw" }}>
                1000+
              </Text>
              <Text align="center" color="#828d8b" fontSize={{ base: "1vw", lg: "1vw", sm: "2vh" }}>
                Reputable Brands
              </Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image boxSize={{ base: "40px", sm: "80px", md: "100px" }} src="img/testhanks.svg" />
              <Text fontWeight={"bold"} fontSize={{ base: "1.5vw", md: "2vw", sm: "4vw" }}>
              10.000+
              </Text>
              <Text align="center" color="#828d8b" fontSize={{ base: "1vw", lg: "1vw", sm: "2vh" }}>
                Booked Meeting Schedule
              </Text>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Image boxSize={{ base: "40px", sm: "80px", md: "100px" }} src="img/testhanks.svg" />
              <Text fontWeight={"bold"} fontSize={{ base: "1.5vw", md: "2vw", sm: "4vw" }}>
                2 Juta
              </Text>
              <Text align="center" color="#828d8b" fontSize={{ base: "1vw", lg: "1vw", sm: "2vh" }}>
                Konten edukatif dengan berbagai topik di sosial media
              </Text>
            </VStack>
          </Box>
        </Grid>
        </Box>
        </Box>
    )

 }