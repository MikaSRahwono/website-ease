import { 
    Box,
    Text,
    VStack,
    HStack,
    UnorderedList,
    ListItem,
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
                <ListItem key={`item-${item}`} borderRadius='10' p='0.5vw' bg='#E3D6AC' mt={5}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
          </Box>          
        </VStack>
      </HStack>);
    } else {
      return (
      <VStack pb='10vh'>
        <Text mt='5vh' mb='1vw' textAlign='center' fontSize={{base: '7.5vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
          {heading}
        </Text>
        <Box px='8vw' pt='25vw' pb='25vw' bgImage='/img/reasons-bg/circle.png' bgPos='center' bgSize='135vw' bgRepeat='no-repeat'>
        <UnorderedList fontSize={{base: '6vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
          {lists.map(item => (
            <ListItem key={`item-${item}`} borderRadius='10' p='0.3vw' bg='#E3D6AC' mt={5}>{item}</ListItem>
          ))}
        </UnorderedList>
        </Box>
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
                    <ListItem key={`item-${item}`} mt={5}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Center>
            </Box>          
          </VStack>
        </HStack>);
    } else {
      return (
        <VStack pb='10vh'>
          <Text mb='6vh' pt='3.5vh' pb='13vh' textAlign='center' bgImage='/img/reasons-bg/circle.png' bgPos='bottom' bgSize='110vw' bgRepeat='no-repeat' fontSize={{base: '7.5vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
            {heading}
          </Text>
          <Box px='8vw' pt='10vw' pb='25vw' bgImage='/img/reasons-bg/pen_portrait.png' bgPos='left' bgSize='120vw' bgRepeat='no-repeat'>
          <UnorderedList w='80%' fontSize={{base: '5vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
            {lists.map(item => (
              <ListItem key={`item-${item}`} mt={1}>{item}</ListItem>
            ))}
          </UnorderedList>
          </Box>
        </VStack>);
    }
  } else {
    if(isLargerThan400) {
      return (
        <VStack w='full' align='start' pt='5vh'>
          <Box align={{base: 'left', md: 'left'}} w='85vw'>
            <Text p='1vw' pl='4vw' fontSize={{base: '5vw', md: '3vw', lg: '2.5vw'}}  borderRightRadius={20} bg='white' fontWeight="bold">
              {heading}
            </Text>
          </Box>
          <VStack>
            <Center h='60vh' w='100vw'>
                {lists.map(item => (
                  <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='30vh' w={{md: '18vw', lg: '15vw'}} borderRadius={10}>
                    <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                  </Center>
                ))}
            </Center>
          </VStack>
        </VStack>);
    } else {
      const list1 = lists.slice(0,2)
      const list2 = lists.slice(2,4)
      const list3 = lists.slice(4,5)
      return (
      <VStack h='100vh' w='80vw' align='start' pt='5vh' spacing='5vh'>
        <Text p='1vw' pl='4vw' fontSize={{base: '5vw', md: '3vw', lg: '2.5vw'}}  borderRightRadius={20} bg='white' fontWeight="bold">
          {heading}
        </Text>
        <Center w='100vw'>
          <VStack>
            <HStack >
              {list1.map(item => (
                <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='20vh' w={{base:'40vw', md: '18vw', lg: '15vw'}} borderRadius={10}>
                  <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                </Center>
              ))}
            </HStack>
            <HStack>
              {list2.map(item => (
                <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='20vh' w={{base:'40vw', md: '18vw', lg: '15vw'}} borderRadius={10}>
                  <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                </Center>
              ))}
            </HStack>
            <HStack>
              {list3.map(item => (
                <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='20vh' w={{base:'40vw', md: '18vw', lg: '15vw'}} borderRadius={10}>
                  <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                </Center>
              ))}
            </HStack>
          </VStack>
        </Center>
      </VStack>);
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
      bgImage={service == 'zoom' ? isLargerThan400 ? '/img/reasons-bg/zoom_bg.png' : '/img/reasons-bg/zoom_bg_pot.png' : ''}
      bgSize={service == 'zoom' ? 'cover': ''}
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
