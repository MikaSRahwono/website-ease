import { 
    Flex,
    Box,
    Text,
    Image,
    Grid,
    SimpleGrid,
    Stack,
    Container,
    VStack
 
 } from "@chakra-ui/react";

 export const App = (params) => {

    return (
        <Box 
            bgColor='white'
            w="full"
            color='#000'
            height={'50vh'}
            alignItems="center"
            justifyContent="center"
            fontFamily={'Montserrat'}>
        
        <Container maxW='70vw' maxH='70vh' color='black' pt={70} pb={70}>
 
        <Text align={'center'} fontWeight={'bold'} fontSize={'3vh'}>Terima kasih telah mempercayai kami</Text>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>

        <Box height='1vh'>
        <VStack>
            <Image boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
            <Text fontWeight={'bold'} fontSize={{ base: '1.5vw', md: '2vw', sm:'4vw' }}>2 Juta</Text>
            <Text align='center' color='#828d8b' fontSize={{ base: '1vw', lg:'1vw', sm: '2vw' }}>
            Konten edukatif dengan berbagai topik di sosial media
            </Text>
        </VStack>
        </Box>

        <Box margin={'auto'} height='1vh'>
        <VStack>
            <Image  boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
            <Text fontWeight={'bold'} fontSize={{ base: '1.5vw', md: '2vw', sm:'4vw' }}>2 Juta</Text>
            <Text align='center' color='#828d8b' fontSize={{ base: '1vw', lg:'1vw', sm: '2vw' }}>
            Konten edukatif dengan berbagai topik di sosial media
            </Text>
        </VStack>
        </Box>

        <Box height='1vh'>
        <VStack>
            <Image  boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
            <Text fontWeight={'bold'} fontSize={{ base: '1.5vw', md: '2vw', sm:'4vw' }}>2 Juta</Text>
            <Text align='center' color='#828d8b' fontSize={{ base: '1vw', lg:'1vw', sm: '2vw' }}>
            Konten edukatif dengan berbagai topik di sosial media
            </Text>
        </VStack>
        </Box>

        <Box margin={'auto'} height='1vh'>
        <VStack>
            <Image  boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
            <Text fontWeight={'bold'} fontSize={{ base: '1.5vw', md: '2vw', sm:'4vw' }}>2 Juta</Text>
            <Text align='center' color='#828d8b' fontSize={{ base: '1vw', lg:'1vw', sm: '2vw' }}>
            Konten edukatif dengan berbagai topik di sosial media
            </Text>
        </VStack>
        </Box>

    </Grid>

        </Container>
  
        </Box>
    )

 }