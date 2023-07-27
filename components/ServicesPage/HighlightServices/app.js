import {
    Box,
    Text,
    Image,
    Stack,
    Button,
    VStack,
    HStack,
    useMediaQuery
 } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { creative, zoom, studio } from "./_data";
import Link from "next/link";

export const App = ({service}) => {
    var data = {}
    if (service == "creative") {
        data = creative
    } else if (service == "studio") {
        data = studio
    } else {
        data = zoom
    }
    const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

    return (
        <Box 
            bgColor='white'
            w="full"
            color='#000'
            height='auto'>
            
            <Box pos="relative">
                <Box
                    pos="absolute"
                    alignItems={'center'}
                    top={{base: '5vh',md: '6vh',lg: '10vh'}}
                    left={{base:"10vw" ,lg:'40vw', md:'10vw'}}
                    w={{base:"70vw", lg:"40vw", sm:"80vw"}}
                    h={{lg:"40vh", md: '25vh', base:"45vh"}}
                    bgColor="white"
                    zIndex="1"
                    rounded={5}
                    opacity='95%'
                    shadow={'2xl'}
                    p='5vw'
                    justifyContent={'center'}
                > 
                    <Text fontSize={{base: 'xl',md: '2xl'}} fontWeight='bold'>
                        {data.title}
                    </Text>
                    <Button bg='#7FCAD7' _hover={{background:"#96DDE9"}} h='5vh' mt='5vh'>
                        <FaWhatsapp/>
                        <Link href={data.whatsapp} pl='1vw'>Hubungi Kami!</Link>
                    </Button>
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
                        alt='sosmed easeyourneeds'
                        src={data.photo1}
                        w="full"
                        h="full"
                        objectFit="cover"/>
                </Box>

                <Box w={{ base: 'full', md: '53.4%' }} h='100%'>
                    <Image
                        alt='sosmed easeyourneeds'
                        src={data.photo2}
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
