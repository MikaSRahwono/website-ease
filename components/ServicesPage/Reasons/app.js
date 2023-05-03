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
    useMediaQuery,
    Center
 } from "@chakra-ui/react";
import { List } from "antd";

function Selector(service, isLargerThan400, heading, lists) {
  if(service == "creative") {
    if(isLargerThan400) {
      return (
      <HStack align='top' alignItems='center' spacing='3vw'>
        <VStack align={{base: 'left', md: 'left'}} spacing={10} ml='7vw' w='30vw' p='4vw'>
            <Text fontSize={{base: '10vw', md: '3vw', lg: '3.2vw'}} fontWeight="bold">
              {heading}
            </Text>
        </VStack>
        <VStack>
          <Box px='8vw' pt='5vw' pb='5vw' bgImage='/img/reasons-bg/circle.png' bgPos='center' bgSize='50vw' bgRepeat='no-repeat'>
          <UnorderedList mt='4'fontSize={{base: '3vw', md: '4vw', lg: '1.7vw'}} fontWeight='normal'>
            {lists.map(item => (
                <ListItem borderRadius='10' p='0.5vw' bg='#E3D6AC' mt={5}>{item}</ListItem>
            ))}
          </UnorderedList>
          </Box>          
        </VStack>
      </HStack>);
    } else {
      return (
      <VStack>
        <Text mb='20vh' textAlign='center' fontFamily="Montserrat" fontSize={{base: '7.5vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
          {heading}
        </Text>
        <UnorderedList fontSize={{base: '6vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
          {lists.map(item => (
              <ListItem>{item}</ListItem>
          ))}
        </UnorderedList>
      </VStack>);
    }
  } else if (service == "studio"){
    if(isLargerThan400) {
      return (
        <HStack w='full' align='start' h='80vh'>
          <VStack align={{base: 'left', md: 'left'}} w='45vw' mr='5vw'>
            <Box h='80vh' pl='5vw' pr='10vw' alignItems='center' bgImage='/img/reasons-bg/circle.png' bgPos='right' bgSize='60vw' bgRepeat='no-repeat'>
              <Center h='full'>
                <Text fontSize={{base: '10vw', md: '3vw', lg: '3.2vw'}} fontWeight="bold">
                  {heading}
                </Text>
              </Center>
            </Box>
          </VStack>
          <VStack>
            <Box h='80vh' pl='3vw' pr='14vw' alignItems='center' bgImage='/img/reasons-bg/pen_landscape.png' bgPos='center' bgSize='50vw' bgRepeat='no-repeat'>
            <Center h='50vh'>
              <UnorderedList mt='4'fontSize={{base: '3vw', md: '4vw', lg: '1.5vw'}} font fontWeight='normal'>
                {lists.map(item => (
                    <ListItem  mt={5}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Center>
            </Box>          
          </VStack>
        </HStack>);
    } else {
      return <Box></Box>
    }
  } else {
    if(isLargerThan400) {
      return <Box></Box>
    } else {
      return <Box></Box>
    }
  }
}

export const App = ({heading, lists, service}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  const content = Selector(service, isLargerThan400, heading, lists)
  return (
    <Box
      w="full"
      h='full'
      bg='#5FA698'
      color='#303030'
      alignItems="center"
      justifyContent="center"
    >
      <Box  h='full'>
        {content}
      </Box>
    </Box>
  )
}
