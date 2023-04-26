import { 
    Flex,
    Box,
    Text,
    Image,
    Button,
    VStack,
    Container,
    Center,
    HStack,
    useMediaQuery
 } from "@chakra-ui/react";


export const App = ({heading, description1, description2, image}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  return (
    <VStack spacing={0}>
      <Flex
      w="full"
      h={{base: '100vh', md: '80vh'}}
      alignItems="center"
      justifyContent="center"
      bg='#DAC17F'
      >
        {isLargerThan400 ? <Box>
          <HStack direction={{base: 'column', md: 'row'}} spacing='1vw'>
            <VStack align={{base: 'left', md: 'left'}} spacing={10} ml={30}>
              <VStack w='30vw' align={{base: 'left', md: 'left'}} spacing={0}>
                <Text fontFamily="Montserrat" fontSize={{base: '10vw', md: '6vw', lg: '5vw'}} fontWeight="bold">{heading}</Text>
                <Text fontFamily="Montserrat" fontSize={{base: '3vw', md: '1.5vw', lg: '1.5vw'}}>
                {description1}</Text>
              </VStack>
            </VStack>
            <Box >
              <Image w={{base: '100%', md: '40vw'}} src={image} alt='easeyourneeds'/>
            </Box>
          </HStack> 
        </Box> : 
        <Box mt='20vh' p={6}>
          <VStack align={{base: 'left', md: 'left'}} >
            <Text textAlign='center' fontFamily="Montserrat" fontSize={{base: '10vw', md: '6vw', lg: '5vw'}} fontWeight="bold">{heading}</Text>
            <Text textAlign='center' fontFamily="Montserrat" fontSize={{base: '6vw', md: '1.5vw', lg: '1.5vw'}}>
            {description1}</Text>
          </VStack>
          <Box >
            <Image w={{base: '90vw', md: '40vw'}} src={image} alt='easeyourneeds'/>
          </Box>
        </Box>}
      </Flex>
    </VStack>
  )
}
