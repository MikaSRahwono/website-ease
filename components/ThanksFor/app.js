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
            height={'70vh'}
            alignItems="center"
            justifyContent="center"
            fontFamily={'Montserrat'}>
        
        <Container maxW='70vw' maxH='70vh' color='black' pt={70} pb={70}>
 
        <Stack>
            <Text align={'center'} fontWeight={'bold'} fontSize={'3vw'}>Terima kasih telah mempercayai kami</Text>
            <SimpleGrid pt='20px' columns={{base: '4', md: '4', sm:'2'}} spacing={10}>
                <Box height='80px'>
                <VStack marginTop={{ base: '2', sm: '5' }}>
                    <Image boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
                    <Text fontSize={{ base: '2vw', md: '2.5vw' }}>2 Juta</Text>
                    <Text align='center' color='#828d8b' fontSize={{ base: '1.2vw', md: '1.2vw' }}>
                    Konten edukatif dengan berbagai topik di sosial media
                    </Text>
                </VStack>
                </Box>
                <Box height='80px'>
                <VStack marginTop={{ base: '2', sm: '5' }}>
                    <Image boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
                    <Text fontSize={{ base: '2vw', md: '2.5vw' }}>2 Juta</Text>
                    <Text align='center' color='#828d8b' fontSize={{ base: '1.2vw', md: '1.2vw' }}>
                    Konten edukatif dengan berbagai topik di sosial media
                    </Text>
                </VStack>
                </Box>
                <Box height='80px'>
                <VStack marginTop={{ base: '2', sm: '5' }}>
                    <Image boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
                    <Text fontSize={{ base: '2vw', md: '2.5vw' }}>2 Juta</Text>
                    <Text align='center' color='#828d8b' fontSize={{ base: '1.2vw', md: '1.2vw' }}>
                    Konten edukatif dengan berbagai topik di sosial media
                    </Text>
                </VStack>
                </Box>
                <Box height='80px'>
                <VStack marginTop={{ base: '2', sm: '5' }}>
                    <Image boxSize={{ base: '40px', sm: '80px', md: '100px' }} src='img/testhanks.svg' />
                    <Text fontSize={{ base: '2vw', md: '2.5vw' }}>2 Juta</Text>
                    <Text align='center' color='#828d8b' fontSize={{ base: '1.2vw', md: '1.2vw' }}>
                    Konten edukatif dengan berbagai topik di sosial media
                    </Text>
                </VStack>
                </Box>
                
   
            </SimpleGrid>
        </Stack>

        </Container>
  
        </Box>
    )

 }