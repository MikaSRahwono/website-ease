import { Box, Container, Text, Heading, Center, Stack } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <Box>

        <Center>
        <Box
            h="65vh"
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
              align="left"
              w={{ base: '60vw', lg: '60vw'}}
              h={{ base: '20vh'}}
              p="2rem"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="1"
              textAlign={'left'}
            >
              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "3xl" }}
              >
                Konsultasi kebutuhanmu, Foto Produk Terima Beres!
              </Heading>

              <Text
                pt="2rem"
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "xl" }}
                align="left"
              >
                Apakah kamu bingung konsep untuk foto produk harus kaya gimana? 
              </Text>
              <Text
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "xl" }}
                align="left"
              >
                Apakah kamu gak punya waktu untuk foto produk?
              </Text>
              <Text
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "xl" }}
                align="left"
              >
                Apakah kamu gak punya peralatan yang memadai untuk foto produk?
              </Text>
              <Text
                pt="2rem"
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "xl" }}
                align="left"
              >
                Jika iya, kami siap bantu untuk menghasilkan foto produk dengan hasil yang professional dan estetik!
              </Text>
            </Stack>
            </Box>
        </Center>
    </Box>
  );
}
