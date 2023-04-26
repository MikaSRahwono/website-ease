import { 
    Flex,
    Box,
    Text,
    Image,
    Button,
    VStack,
    Container,
    Center,
    HStack
 } from "@chakra-ui/react";

export const App = ({heading, description1, description2, image}) => {

  return (
    <VStack spacing={0}>
      <Flex
      w="full"
      h="80vh"
      alignItems="center"
      justifyContent="center"
      bg='#DAC17F'
      >
        <Box>
          <HStack direction={{base: 'column', md: 'row'}} spacing='1vw'>
            <VStack align={{base: 'left', md: 'left'}} spacing={10} ml={30}>
              <VStack w='30vw' align={{base: 'left', md: 'left'}} spacing={0}>
                <Text fontFamily="Montserrat" fontSize={{base: '10vw', md: '6vw', lg: '5vw'}} fontWeight="bold">{heading}</Text>
                <Text fontFamily="Montserrat" fontSize={{base: '3vw', md: '1.5vw', lg: '1.5vw'}}>
                {description1}</Text>
                <VStack mt={{base: '4px', md: '0px'}} align="left" spacing={0}>
                </VStack>
              </VStack>
            </VStack>
            <Box >
              <Image w={{base: '100%', md: '40vw'}} src={image} alt='easeyourneeds'/>
            </Box>
          </HStack> 
        </Box>
      </Flex>
      <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'>
        <Center h='10vh'>
          <HStack spacing='5vw'>
            <Text>Why Us?</Text>
            <Text>Recent Projects</Text>
            <Text>Pricing dan Paket</Text>
            <Text>Alur Booking</Text>
            <Text>FAQ</Text>
            <Text>Testimoni</Text>
          </HStack>
        </Center>
      </Box>
    </VStack>
  )
}
