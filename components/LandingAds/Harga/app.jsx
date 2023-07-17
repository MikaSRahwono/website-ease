import { Box, Center, Heading, Image, ListItem, List, Text, VStack, Button } from "@chakra-ui/react";

export default function Harga() {
  return (
    <Box bgImage={"/img/ads/bgprice.png"} bgSize={"cover"}>

        <Box h="96vh" position="relative">
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
          />

          <VStack
            spacing={4}
            align="left"
            w={{ base: '60vw', lg: '60vw'}}
            h={{ base: '20vh'}}
            p="2rem"
            position="absolute"
            top="20%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
            textAlign="left"
          >

            <Heading as="h1" size="xl" fontWeight="bold" color="white" textAlign="center">
                PROMO JASA FOTO PRODUK PROFESSIONAL
            </Heading>

            <Heading pt="3rem" as="h2" fontSize={'32'} fontWeight="bold" color="white" textAlign="left">
                Harga Normal: 
            </Heading>

            <Heading pt="1rem" as="h2" size={'2xl'} fontWeight="bold" color="white" textAlign="left" textDecoration="line-through" textDecorationColor="black">
                Rp199.000
            </Heading>

            <Heading pt="1rem" as="h2" size={'3xl'} fontWeight="bold" color="#FFD600" textAlign="left">
                Rp99.000
            </Heading>

            <Heading pt="3rem" as="h2" fontSize={'32'} fontWeight="semibold" fontStyle={"italic"} color="white" textAlign="left">
                What&apos;s Include?
            </Heading>

            <List pl="4rem" color="white" listStyleType="disc" fontWeight={"semibold"} fontSize={'3xl'}>
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
                w="15vw"
                minH="6vh"
                bg="white"
                borderRadius="full"
                boxShadow="lg"
                _hover={{ boxShadow: "lg", bg: "#DAC17E" }}
                fontSize={"xl"}
                >
            Pesan Sekarang!
            </Button>
            </Box>



          </VStack>
        </Box>
    </Box>
  );
}
