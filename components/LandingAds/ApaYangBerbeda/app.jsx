import { Box, Center, Heading, Image, ListItem, List, Text, VStack, HStack } from "@chakra-ui/react";
import { berbedas } from "./_data";

export default function Keuntungan() {
  return (
    <Box>
      <Box h={{ base: '100vh', sm: '100vh', md: '55vh', lg: '85vh' }} position="relative">
        <Box position="absolute" top="0" left="0" right="0" bottom="0" />

        <VStack
          spacing={4}
          align="center"
          w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
          h={{ base: '80vh', sm: '60vh', md: '55vh', lg: '55vh' }}
          p="2rem"
          position="absolute"
          top={{ base: '80%', sm: '70%', md: '40%', lg: '40%' }}
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          textAlign="left"
        >
          <Heading
            fontFamily="Aileron"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "3xl" }}
            paddingBottom="2rem"
          >
            Apa yang berbeda dari Jasa Foto Produk di Ease Your Needs?
          </Heading>

          <List>
            {berbedas.map((berbeda, index) => (
              <ListItem
                key={`berbeda-${index}`}
                display="flex"
                alignItems="flex-start"
                fontWeight="medium"
                mb="1rem" // Added margin-bottom of 1rem
              >
                <HStack>
                  <Image w={{ base: 8, sm: 10, md: 12, lg: 20 }} mr="2" mt="1" alt="easeyourneeds" src={berbeda.icon} />
                  <Text
                    fontSize={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl' }}
                    fontWeight="black"
                    as="span"
                    display="inline-block"
                  >
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
