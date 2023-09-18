import { Stack, Box, Container, Text, HStack, Divider, Heading, Grid, GridItem, Icon, Center } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ContactUs() {

  const animationVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box>
      <Box
      bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fcontact%2Ffingers-note-report-journalist-filling-min%201.png?alt=media&token=75462d33-92c2-4b81-985c-b78d0a6375b0)"
      bgSize="cover"
      bgPosition="center center"
    >
      <Center>
        <Box
          h={{ base: '70vh', sm: '100vh', md: '55vh', lg: '55vh' }}
          bgSize="contain"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
          />

          <Stack
            spacing={4}
            align="center"
            justify="center"
            w={{ base: '100vw', sm: '80vw', md: '90vw', lg: '60vw' }}
            h={{ base: '40vh', sm: '50vh', md: '30vh', lg: '60vh' }}
            p="2rem"
            position="absolute"
            top={{base: "55%", md: "50%", lg:"50%"}}
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            textAlign="center"
          >

            <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 2, ease: "easeOut" }}
            >
            <Box p="1rem" borderRadius="8px"> {/* Background warna biru dan padding */}
              <Heading
                fontFamily="Aileron"
                color="black"
                fontSize={{ base: "4xl", md: "4xl", lg: "7xl" }}
              >
                Contact Us
              </Heading>
            </Box>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 2, ease: "easeOut" }}
            >
            <Text
              fontFamily="Aileron"
              color="black"
              fontSize={{ base: "xl", md: "2xl", lg: "xl" }}
              align="center"
            >
              Lets explore your idea with us
            </Text>
            </motion.div>
          </Stack>
        </Box>
      </Center>
    </Box>

      <Container maxW="80vw" minW="80vw" pt={{ base: '15vh', md: '10vh' }}>
        <HStack
          alignItems="initial"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          spacing={{ base: '2rem', md: '0' }}
        >
          <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 2, ease: "easeOut" }}
            >
          <Box pr={{ base: '0', md: '10vw' }} w={{ base: '100%', md: '50vw' }} h={{ base: '30vh', md: 'auto' }} >
            <Divider mb="2vh" w="40%" alignItems="center" size="1vh" borderColor="black" variant="solid" orientation="horizontal" />
            <Heading fontSize={{ base:"4xl", lg:"4xl", md:"2xl" }}>
            Get in touch with us for further Information!
            </Heading>
          </Box>
          </motion.div>
          

          <Box w={{ base: '100%', md: '50vw' }} fontSize="md" textAlign="justify">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10} ref={ref2}>
              <GridItem w="100%" h="20">
                <Text fontWeight="bold" fontSize="25">
                  Open Hour
                </Text>
                <Text fontSize="20">Senin - Minggu,</Text>
                <Text fontSize="20">07.00 - 23.00 WIB</Text>
              </GridItem>
              <GridItem w="100%" h="40">
                <Text fontWeight="bold" fontSize="25">
                  Social Media
                </Text>
                <HStack>
                  <Icon as={FaInstagram} boxSize={6}></Icon>
                  <Text fontSize="lg"> @easeyourneeds.group</Text>
                </HStack>
                <HStack>
                  <Icon as={FaWhatsapp} boxSize={6}></Icon>
                  <Text fontSize="lg"> +62821-2439-4680</Text>
                </HStack>
              </GridItem>
            </Grid>
            </motion.div>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
