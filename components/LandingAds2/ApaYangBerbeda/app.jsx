import { Box, Center, Heading, Image, ListItem, List, Text, VStack, HStack } from "@chakra-ui/react";
import { berbedas } from "./_data";

export default function Keuntungan() {
  return (
    <Box py={{base: '5vh', md: '10vh'}} bgPos='bottom' bgSize='cover' bgImage='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2FBackground%20kombi%202_rev%201.png?alt=media&token=0e72a0e4-23b2-49f6-837b-610fc8b60c97' >
      <Center>
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
            textAlign={{base: 'center', md: 'left'}}
          > Apa yang berbeda dari Jasa Live Streaming Ease Your Needs?
          </Heading>

          <List>
            {berbedas.map((berbeda, index) => (
              <ListItem key={`berbeda-${index}`} display="flex" alignItems="flex-start" fontWeight="medium" pt={{base: '3vh', md: 0}}>
                <HStack>
                  <Image w={{base: '10vw', md: '7vw',lg: '5vw'}} mr="2" mt="1" alt="easeyourneeds" src={berbeda.icon} />
                  <Text fontSize={{ base: '5vw', md: 'lg', lg:'lg' }} fontWeight={{base: 'normal',md: "black"}} as="span" display="inline-block">
                    {berbeda.name}
                  </Text>
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Center>
    </Box>
  );
}
