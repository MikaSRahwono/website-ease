import { Box, Center, Heading, Image, ListItem, List, Text, VStack, Button, Container } from "@chakra-ui/react";

export default function Harga() {
  return (
    <Box bgImage={"/img/ads/bgprice.png"} bgSize={"cover"} py='10vh' >

        <Container minW={{md: '90vw', lg: '80vw'}}>
          <VStack
            spacing={4}
            align="left"
            w={{ base: '91vw', lg: '60vw'}}
            p="1.4rem"
            textAlign="left"
          >

            <Heading as="h1" size="xl" fontWeight="bold" color="white" textAlign="left">
            Pesan Jasa Live Streaming Sekarang
              </Heading>

            <Heading pt="3rem" as="h2" fontSize={{base: '2xl',lg: '2vw'}} fontWeight="bold" color="white" textAlign="left">
                Harga Normal: 
            </Heading>

            <Heading size={'2xl'} fontWeight="bold" color="white" textAlign="left" textDecoration="line-through" textDecorationColor="black">
            Rp 7.500.000
            </Heading>

            <Heading as="h2" size={'3xl'} fontWeight="bold" color="#FFD600" textAlign="left">
            Rp2.999.000
            </Heading>

            <Heading pt="3rem"  fontSize='3xl' fontWeight="semibold" fontStyle={"italic"} color="white" textAlign="left">
            Harga Sudah Termasuk
            </Heading>

            <List pl="4rem" color="white" listStyleType="disc" fontWeight={"semibold"} fontSize={'3xl'} >
                <ListItem>
                    <Text fontSize={'xl'} color="white">Konsep Foto Produk</Text>
                </ListItem>
                <ListItem>
                    <Text fontSize={'xl'} color="white">Produksi dan Editing</Text>
                </ListItem>
                <ListItem>
                    <Text fontSize={'xl'} color="white">File dikirimkan dalam bentuk softcopy di google drive</Text>
                </ListItem>
            </List>

            <Box pt="2rem">
            <Button
                colorScheme="white"
                color="black"
                minH="6vh"
                borderRadius='5vw'
                bg="white"
                boxShadow="lg"
                _hover={{ boxShadow: "lg", bg: "#DAC17E" }}
                fontSize={"xl"}
                >
            Pesan Sekarang!
            </Button>
            </Box>



          </VStack>
        </Container>
    </Box>
  );
}
