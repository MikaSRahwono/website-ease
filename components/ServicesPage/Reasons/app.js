import { 
    Flex,
    Box,
    Text,
    Image,
    Button,
    VStack,
    HStack,
    Stack,
    Container,
    Card,
    Heading,
    Divider,
    UnorderedList,
    ListItem,
    AspectRatio,
    useMediaQuery
 } from "@chakra-ui/react";
import { List } from "antd";

export const App = ({image, imagemob, heading, lists}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

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
        {isLargerThan400 ? <HStack spacing='6vw' align='top' pt='3vh' >
          <VStack align={{base: 'left', md: 'left'}} spacing={10} w='25vw'>
              <Text  fontFamily="Montserrat" fontSize={{base: '10vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
                {heading}
              </Text>
          </VStack>
          <VStack>
            <UnorderedList mt='4'fontSize={{base: '3vw', md: '4vw', lg: '2vw'}} fontWeight='normal'>
              {lists.map(item => (
                  <ListItem mt={5}>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </HStack> : <VStack>
            <Text mb='20vh' textAlign='center' fontFamily="Montserrat" fontSize={{base: '7.5vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
              {heading}
            </Text>
            <UnorderedList fontSize={{base: '6vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
              {lists.map(item => (
                  <ListItem>{item}</ListItem>
              ))}
            </UnorderedList>
          </VStack>}
      </Container>
    </Box>
  )
}
