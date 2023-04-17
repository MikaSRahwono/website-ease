import { 
    Box,
    Text,
    Image,
    Stack,
    Button,
    VStack
 
 } from "@chakra-ui/react";

export const App = (params) => {

    return (
        <Box 
            bgColor='white'
            w="full"
            color='#000'
            height='auto'
            fontFamily={'Montserrat'}>
            
            <Box pos="relative">
            <Box
                pos="absolute"
                top="10vh"
                left={{ lg: "40vw", sm: "10vw" }}
                w={{ lg: "40vw", sm: "80%" }}
                h={{ lg: "40vh", sm: "80%" }}
                bgColor="white"
                zIndex="1"
                rounded={5}
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                px={5}
                >
                <VStack>
                    <Text fontSize={'3vh'} fontWeight={'semibold'}>
                    Build your audience online and expand your reach with our live streaming services, lets go bigger now!
                    </Text>

                    <Button
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    height={{ base: "3vh", md: "5vh", lg: "7vh" }}
                    width="auto"
                    fontSize="2vw"
                    color="white"
                    bgColor={"red"}
                    rounded={5}
                    onClick={() => window.open()}
                    mt="2vh">
                        Join Now
                    </Button>
                </VStack>
                </Box>      
            <Stack
                direction={{ base: 'column', md: 'row' }}
                w="full"
                h="full"
                spacing={0}
                bgImage={{
                    base: 'url(img/highlight/sosmed-left.jpg)',
                    md: 'none'
                }}
                bgSize='cover'
                bgPosition={{
                    base: 'top',
                    md: 'center'
                }}
                alignItems='center'
            >
                <Box w={{ base: 'full', md: '50%' }}>
                    <Image 
                        src='img/highlight/sosmed-left.jpg' 
                        w="full"
                        h="full"
                        objectFit="cover"/>
                </Box>

                <Box w={{ base: 'full', md: '53.4%' }} h='100%'>
                    <Image
                        src='img/highlight/sosmed-right.svg'
                        w='full'
                        h={{ base: '100%', md: '100%' }}
                        objectFit='cover'
                    />
                </Box>

            </Stack>
            </Box>
        </Box>
    )
}
