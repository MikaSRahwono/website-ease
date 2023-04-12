import { 
    Flex,
    Box,
    Text,
    Image,
    Grid,
    SimpleGrid,
    Stack,
    Container,
    VStack,
    HStack
 
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
                    alignItems={'center'}
                    top='10vh'
                    left={'40vw'}
                    w="40vw"
                    h="40vh"
                    bgColor="white"
                    zIndex="1"
                    rounded={5}
                > </Box>
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
