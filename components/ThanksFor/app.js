import React from "react";
import { motion } from "framer-motion";
import { Heading, Box, Text, Image, Grid, Container, VStack, Center } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer'

export const App = (params) => {
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box w="full" p={10} pb='11vh' color="#000">
      <Box alignItems={"center"} bg="white" p={5}>
        <Center>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Heading
              pb={{ base: "10", sm: "10" }}
              textAlign={"center"}
              fontSize={{ base: "3vh", lg: "2vw", sm: "3vh" }}
              fontWeight="extrabold"
              mb={5}
              ref={ref}
            >
              THANK YOU FOR TRUSTING US
            </Heading>
          </motion.div>
        </Center>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Container maxW={{ base: "100vw", lg: "60vw", sm: "100vw" }} ref={ref}>
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
                  boxSize={{ base: "100px", sm: "80px", md: "130px" }}
                  alt="customer easeyourneeds"
                  src="img/thanksfor/customer.png"
                />
                <Text fontWeight={"bold"} fontSize={{ base: "4vw", md: "2vw", sm: "4vw" }}>
                  40.000+
                </Text>
                <Text align="center" color="#828d8b" fontSize={{ base: "1.5vh", lg: "1.4vw", sm: "2vh" }}>
                  Loyal Customers
                </Text>
              </VStack>
            </Box>
            <Box gridArea="second">
              <VStack>
                <Image
                  boxSize={{ base: "100px", sm: "80px", md: "130px" }}
                  alt="reputable easeyourneeds"
                  src="img/thanksfor/reputable.png"
                />
                <Text fontWeight={"bold"} fontSize={{ base: "4vw", md: "2vw", sm: "4vw" }}>
                  1.000+
                </Text>
                <Text align="center" color="#828d8b" fontSize={{ base: "1.5vh", lg: "1.4vw", sm: "2vh" }}>
                  Reputable Brands
                </Text>
              </VStack>
            </Box>
            <Box gridArea="third">
              <VStack>
                <Image
                  boxSize={{ base: "100px", sm: "80px", md: "130px" }}
                  alt="schedule easeyourneeds"
                  src="img/thanksfor/schedule.png"
                />
                <Text fontWeight={"bold"} fontSize={{ base: "4vw", md: "2vw", sm: "4vw" }}>
                  100.000+
                </Text>
                <Text align="center" color="#828d8b" fontSize={{ base: "1.5vh", lg: "1.4vw", sm: "2vh" }}>
                  Booked Meeting Schedule
                </Text>
              </VStack>
            </Box>
              </Grid>
          </Container>
        </motion.div>
      </Box>
    </Box>
  );
};
