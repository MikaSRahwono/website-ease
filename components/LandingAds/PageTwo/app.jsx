import { Box, Center, Heading, Image, ListItem, List, Text, VStack, HStack } from "@chakra-ui/react";

export default function Keuntungan() {
  return (
    <Box py={{base: '5vh', md: '10vh'}} >
      <Center >
        <VStack
          spacing={4}
          align="left"
          w={{ base: '90vw', lg: '60vw'}}
          p="2rem"
          textAlign="left"
        >
          <Heading
            fontFamily="Aileron"
            fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
            paddingBottom="2rem"
            textAlign={{base: 'left', md: 'left'}}
          > Apa yang berbeda dari Jasa Foto Produk di Ease Your Needs?
          </Heading>

          <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu bingung konsep untuk foto produk harus kaya gimana?
            </Text>
            <Text
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu gak punya waktu untuk foto produk?
            </Text>
            <Text
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu gak punya peralatan yang memadai untuk foto produk?
            </Text>
            <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Jika iya, kami siap bantu untuk menghasilkan foto produk dengan hasil yang professional dan estetik!
            </Text>


        </VStack>
      </Center>
    </Box>
  );
}
