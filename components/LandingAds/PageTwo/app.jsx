import { Box, Container, Text, Heading, Center, Stack } from "@chakra-ui/react";

export default function PageTwo() {
  return (
    <Box>
      <Center>
        <Box
          h={{ base: "80vh", sm:"70h", md: "70vh", lg: "50vh" }}
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
            w={{ base: "90vw", md: "70vw", lg: "60vw" }}
            h={{ base: "auto", md: "20vh", lg: "30vh" }}
            p={{ base: "1rem", lg: "2rem" }}
            position="absolute"
            top={{base: "50%", sm:"50%", md:"30%", lg:"50%"}}
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              fontFamily="Aileron"
              fontSize={{ base: "2xl", md: "4xl", lg: "3xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Konsultasi kebutuhanmu, Foto Produk Terima Beres!
            </Heading>

            <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "xl", md: "2xl", lg: "xl" }}
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu bingung konsep untuk foto produk harus kaya gimana?
            </Text>
            <Text
              fontFamily="Aileron"
              fontSize={{ base: "xl", md: "2xl", lg: "xl" }}
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu gak punya waktu untuk foto produk?
            </Text>
            <Text
              fontFamily="Aileron"
              fontSize={{ base: "xl", md: "2xl", lg: "xl" }}
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu gak punya peralatan yang memadai untuk foto produk?
            </Text>
            <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "xl", md: "2xl", lg: "xl" }}
              align={{ base: "left", md: "left" }}
            >
              Jika iya, kami siap bantu untuk menghasilkan foto produk dengan hasil yang professional dan estetik!
            </Text>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
