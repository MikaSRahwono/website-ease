import { Box, Center, Heading, Image, ListItem, List, Text, VStack, HStack } from "@chakra-ui/react";
import { berbedas } from "./_data";

export default function Keuntungan() {
  return (
    <Box>
        <Box h="80vh" position="relative">
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
            <Heading
              fontFamily="Aileron"
              fontSize={{ base: "3xl", md: "5xl", lg: "3xl" }}
              paddingBottom="2rem"
            >
              Apa yang berbeda dari Jasa Foto Produk di Ease Your Needs?
            </Heading>

            <List>
            {berbedas.map((berbeda, index) => (
              <ListItem display="flex" alignItems="flex-start" fontWeight="medium" >
                
                  <HStack key={`berbeda-${index}`}>
                    <Image w={20} mr="2" mt="1" alt="easeyourneeds" src={berbeda.icon} />
                    <Text fontSize={{ base: '3vw', md: '1vw', lg:'xl' }} fontWeight={"black"} as="span" display="inline-block">
                      {berbeda.name}
                    </Text>
                  </HStack>
                
              </ListItem>
              ))}
            </List>
          </VStack>
        </Box>
    </Box>
  );
}
