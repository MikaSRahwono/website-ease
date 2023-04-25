import { 
  Box,
  Text,
  VStack,
  HStack,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export const App = ({image, imagemob, heading, lists}) => {

return (
  <Box
    w="full"
    h='80vh'
    bgImage={{base: imagemob, md: image}}
    bgSize='cover'
    color='#303030'
    alignItems="center"
    justifyContent="center"
  >
    <Container padding={{base: '30px', md:'90px'}} maxW='90vw'>
      <HStack spacing='6vw' align='top' pt='3vh' >
        <VStack align={{base: 'left', md: 'left'}} spacing={10} w='25vw'>
            <Text fontFamily="Montserrat" fontSize={{base: '10vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
              {heading}
            </Text>
        </VStack>
        <VStack>
          <UnorderedList mt='4' fontSize={{base: '3vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
            {lists.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </HStack> 
    </Container>
  </Box>
)
}
