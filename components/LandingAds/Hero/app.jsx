import { Box, Container, Text, Heading, Center, Stack } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <Box>

        <Center>
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
