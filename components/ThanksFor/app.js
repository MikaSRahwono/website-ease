import {
  Heading,
  Box,
  Text,
  Image,
  Grid,
  Container,
  VStack,
  Center,
  SlideFade
} from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer'

export const App = (params) => {

  const [ref, inViewport1] = useInView({rootMargin: '-20%'});
  const [ref2, inViewport2] = useInView({rootMargin: '-20%'});

  return (
    <Box w="full" p={10} pb='5vh' color="#000">
      <Box alignItems={"center"} bg="white" p={5}>
        <Center>
        <SlideFade in={inViewport1}>
          <Heading
            pb={{base:"10", sm:"10"}}
            textAlign={"center"}
            fontSize={{ base: "3vh" ,lg: "2vw", sm: "3vh" }}
            fontWeight="extrabold"
            mb={5}
            ref={ref}
          >
            THANK YOU FOR TRUSTING US
          </Heading>
          </SlideFade>
        </Center>
        <SlideFade in={inViewport2}>
        <Container maxW={{ base: "100vw", lg: "60vw", sm: "100vw" }} ref={ref2}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            templateAreas={{
              base: `
                      "first second"
                      "third third"
                    `,
              md: `
                      "first second third"
                    `,
            }}
            gap={10}
            justifyItems="center"
          >
            <Box gridArea="first">
              <VStack>
                <Image
                  boxSize={{ base: "100px", sm: "80px", md: "100px" }}
                  alt="customer easeyourneeds"
                  src="img/thanksfor/customer.png"
                />
                <Text fontWeight={"bold"} fontSize={{ base: "4vw", md: "2vw", sm: "4vw" }}>
                  40.000+
                </Text>
                <Text align="center" color="#828d8b" fontSize={{ base: "1.5vh", lg: "1vw", sm: "2vh" }}>
                  Loyal Customers
                </Text>
              </VStack>
            </Box>
            <Box gridArea="second">
              <VStack>
                <Image
                  boxSize={{ base: "100px", sm: "80px", md: "100px" }}
                  alt="reputable easeyourneeds"
                  src="img/thanksfor/reputable.png"
                />
                <Text fontWeight={"bold"} fontSize={{ base: "4vw", md: "2vw", sm: "4vw" }}>
                  1.000+
                </Text>
                <Text align="center" color="#828d8b" fontSize={{ base: "1.5vh", lg: "1vw", sm: "2vh" }}>
                  Reputable Brands
                </Text>
              </VStack>
            </Box>
            <Box gridArea="third">
              <VStack>
                <Image
                  boxSize={{ base: "100px", sm: "80px", md: "100px" }}
                  alt="schedule easeyourneeds"
                  src="img/thanksfor/schedule.png"
                />
                <Text fontWeight={"bold"} fontSize={{ base: "4vw", md: "2vw", sm: "4vw" }}>
                  100.000+
                </Text>
                <Text align="center" color="#828d8b" fontSize={{ base: "1.5vh", lg: "1vw", sm: "2vh" }}>
                  Booked Meeting Schedule
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Container>
        </SlideFade>
      </Box>
    </Box>
  );

};
