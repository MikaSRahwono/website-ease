import { Box, Center, Heading, Image, ListItem, List, Text, VStack, Button } from "@chakra-ui/react";

export default function Harga() {
  return (
    <Box bgImage={"https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fbgprice.png?alt=media&token=ff568f02-dccf-4d39-882c-780cdc137c9d"} bgSize={"cover"}>

      <Box h={{ base: '96vh', sm: '80vh', md: '60vh', lg: '100vh' }} position="relative">
        <Box position="absolute" top="0" left="0" right="0" bottom="0" />

        <VStack
          spacing={4}
          align="left"
          w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
          h={{ base: '80vh', sm: '60vh', md: '55vh', lg: '55vh' }}
          p="2rem"
          position="absolute"
          top={{ base: '45%', sm: '40%', md: '40%', lg: '40%' }}
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          textAlign="left"
        >

          <Heading as="h1" size="xl" fontWeight="bold" color="white" textAlign="center">
            PROMO JASA FOTO PRODUK PROFESSIONAL
          </Heading>

          <Heading pt="3rem" as="h2" fontSize={{ base: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }} fontWeight="bold" color="white" textAlign="left">
            Harga Normal:
          </Heading>

          <Heading pt="1rem" as="h2" size={{ base: '2xl', sm: '3xl', md: '4xl', lg: '3xl' }} fontWeight="bold" color="white" textAlign="left" textDecoration="line-through" textDecorationColor="black">
            Rp199.000
          </Heading>

          <Heading pt="1rem" as="h2" size={{ base: '3xl', sm: '4xl', md: '5xl', lg: '4xl' }} fontWeight="bold" color="#FFD600" textAlign="left">
            Rp99.000
          </Heading>

          <Heading pt="3rem" as="h2" fontSize={{ base: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }} fontWeight="semibold" fontStyle={"italic"} color="white" textAlign="left">
            What&apos;s Included?
          </Heading>

          <List pl={{ base: '2rem', sm: '2rem', md: '4rem', lg: '4rem' }} color="white" listStyleType="disc" fontWeight="semibold" fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '3xl' }}>
            <ListItem>
              <Text fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: '2xl' }} color="white">Konsep Foto Produk</Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: '2xl' }} color="white">Produksi dan Editing</Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: '2xl' }} color="white">File dikirimkan dalam bentuk softcopy di google drive</Text>
            </ListItem>
          </List>

          <Box pt="2rem">
            <Button
              colorScheme="white"
              color="black"
              w={{ base: '50%', sm: '40%', md: '30%', lg: '20%' }}
              minH="6vh"
              bg="white"
              borderRadius="full"
              boxShadow="lg"
              _hover={{ boxShadow: "lg", bg: "#DAC17E" }}
              fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: '2xl' }}
            >
              Pesan Sekarang!
            </Button>
          </Box>

        </VStack>
      </Box>
    </Box>
  );
}
