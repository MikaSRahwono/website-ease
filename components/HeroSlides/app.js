import { 
    Flex,
    Box,
    Text,
    Image,
    Button,
    VStack,
    Stack,
 } from "@chakra-ui/react";

export const App = (props) => {

  return (
    <Flex
      w="full"
      h="70vh"
      alignItems="center"
      justifyContent="center"
      bgImage={"img/bgemas.png"}
    >
      <Box padding={{base: '30px', md:'90px'}}>
        <Stack spacing={10} direction={{base: 'column', md: 'row'}}>
          <VStack align={{base: 'left', md: 'left'}} spacing={10}>
            <VStack align={{base: 'left', md: 'left'}} spacing={0}>
              <Text fontFamily="Montserrat" fontSize={{base: '10vw', md: '6vw', lg: '6vw'}} fontWeight="bold">CREATIVE</Text>
              <Text fontFamily="Montserrat" fontSize={{base: '3vw', md: '1.5vw', lg: '1.5vw'}}>
              Helping you to stream your events</Text>
              <Text fontFamily="Montserrat" fontSize={{base: '3vw', md: '1.5vw', lg: '1.5vw'}}>
              using advanced equipment and our best crews.</Text>
              <VStack mt={{base: '4px', md: '0px'}} align="left" spacing={0}>
              <Button
                size={{base: 'sm', md: 'md', lg: 'lg'}}
                height={{base: '3vh', md: '5vh', lg: '7vh'}}
                width='auto'
                fontSize='2vw'
                color='#000'
                bgColor={'white'}
                rounded={5}
                onClick={() => window.open()}
                mt='2vh'
                >
                Learn More...
                </Button>
              </VStack>
            </VStack>
          </VStack>
          <Box w={{base: '100%', md: '50%'}}>
            <Image src='img/veactorduduk.svg' alt='easeyourneeds'/>
          </Box>
        </Stack> 
      </Box>
    </Flex>
  )
}
