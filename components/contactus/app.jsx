import { Box, Container, Text, HStack, Divider, Heading, Grid, GridItem, Icon, SlideFade } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

export default function ContactUs() {

  const [ref, inViewport1] = useInView({rootMargin: '-20%'});
  const [ref2, inViewport2] = useInView({rootMargin: '-10%'});

  return (
    <Box>
      <Box>
        <Box
          h="60vh"
          bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fcontact%2Ffingers-note-report-journalist-filling-min.jpg?alt=media&token=a5b97d02-99d1-4d5b-aeb8-58548b5843a7)"
          bgSize="cover"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgGradient="linear(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)"
          />

          <Heading
            fontFamily="Aileron"
            textAlign={'center'}
            fontSize={{ base: "5xl", md: "5xl", lg: "7xl" }}
            w={{ base: 'auto', lg: 'auto'}}
            h={{ base: '20vh'}}
            p="2rem"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            color='white'

          >
            Contact Us
          </Heading>
        </Box>
      </Box>

      <Container maxW="80vw" minW="80vw" pt={{ base: '15vh', md: '10vh' }}>
        <HStack
          alignItems="initial"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          spacing={{ base: '2rem', md: '0' }}
        >
          <SlideFade in={inViewport1}>
          <Box pr={{ base: '0', md: '10vw' }} w={{ base: '100%', md: '50vw' }} h={{ base: '30vh', md: 'auto' }} ref={ref}>
            <Divider mb="2vh" w="40%" alignItems="center" size="1vh" borderColor="black" variant="solid" orientation="horizontal" />
            <Heading fontSize={{ base:"4xl", lg:"4xl", md:"2xl" }}>Don&apos;t hesitate to contact us If you need more help</Heading>
          </Box>
          </SlideFade>

          <Box w={{ base: '100%', md: '50vw' }} fontSize="md" textAlign="justify">
          <SlideFade in={inViewport2}> 
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
            </SlideFade>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
