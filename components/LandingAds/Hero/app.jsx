import { Box, Container, Text, Heading, Center, Stack } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <Box
      bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fcoverrr.png?alt=media&token=6d66efdc-cd0f-4ce5-bfaa-0e651aa2f4ee)">

        <Center>
          <Box
            h="60vh"
            bgSize="cover"
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
              w={{ base: '60vw', lg: '60vw'}}
              h={{ base: '20vh'}}
              p="2rem"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="1"
              textAlign={'center'}
            >
              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "3xl" }}
              >
                JASA FOTO & VIDEO PRODUK
              </Heading>

              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              >
                HASILKAN OMSET BISNIS MU DARI FOTO PRODUK YANG PROFESSIONAL!
              </Heading>

              <Text
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "xl" }}
                align="center"
              >
                Foto produk yang estetik dan professional dapat meningkatkan brand trust, brand loyalty, dan product value
              </Text>
            </Stack>
          </Box>
        </Center>
    </Box>
  );
}
