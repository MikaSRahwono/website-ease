import { Box, Container, Text, Heading, Center, Stack } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function PageTwo() {
  return (
    <Box>
      <Center>
        <Box h={{ base: '50vh', sm: '70vh', md: '55vh', lg: '85vh' }} position="relative">
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
            align={{ base: "left", sm: "left", md: "left" }}
            w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
            h={{ base: '50vh', sm: '45vh', md: '45vh', lg: '45vh' }}
            p="2rem"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            textAlign={{ base: 'left', sm: 'left', md: 'left' }}
          >
            <Heading
              fontFamily="Aileron"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            >
              Konsultasi kebutuhanmu, Foto Produk Terima Beres!
            </Heading>

            <Text
              pt="2rem"
              fontFamily="Aileron"
              fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "xl" }}
              align={{ base: 'left', sm: 'left', md: 'left' }}
            >
              Apakah kamu bingung konsep untuk foto produk harus kaya gimana?
            </Text>
            <Text
              fontFamily="Aileron"
              fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "xl" }}
              align={{ base: 'left', sm: 'left', md: 'left' }}
            >
              Apakah kamu gak punya waktu untuk foto produk?
            </Text>
            <Text
              fontFamily="Aileron"
              fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "xl" }}
              align={{ base: 'left', sm: 'left', md: 'left' }}
            >
              Apakah kamu gak punya peralatan yang memadai untuk foto produk?
            </Text>
            <Text
              pt="2rem"
              fontFamily="Aileron"
              fontSize={{ base: "xl", sm: "2xl", md: "2xl", lg: "xl" }}
              align={{ base: 'left', sm: 'left', md: 'left' }}
            >
              Jika iya, kami siap bantu untuk menghasilkan foto produk dengan hasil yang professional dan estetik!
            </Text>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
