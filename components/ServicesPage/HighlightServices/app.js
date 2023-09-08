import {
    Box,
    Text,
    Image,
    Stack,
    Button,
    VStack,
    HStack,
    useMediaQuery,
    SlideFade
 } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { creative, zoom, studio } from "./_data";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.9,
      });
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.9,
      });

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
                    top={{base: '20vh',md: '6vh',lg: '10vh', sm:'45vh'}}
                    left={{base:"10vw" ,lg:'40vw', md:'15vw', sm:'10vw'}}
                    w={{base:"70vw", lg:"40vw", sm:"60vw", md: "60vw"}}
                    bgColor="white"
                    zIndex="1"
                    rounded={5}
                    opacity='95%'
                    shadow={'2xl'}
                    p='4vw'
                    justifyContent={'center'}
                > 
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        >        
                        <Text ref={ref} fontSize={{base: 'lg',md: '2xl'}} fontWeight='bold'>
                            {data.title}
                        </Text>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        >   
                        <Button ref={ref2} bg='#7FCAD7' _hover={{background:"#96DDE9"}} h='5vh' mt='5vh'>
                            <FaWhatsapp/>
                            <Link href={data.whatsapp} pl='1vw'>Hubungi Kami!</Link>
                        </Button>
                    </motion.div>

                </Box>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                w="full"
                h={{lg:"50vh", md:"45vh"}}
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
                        h={{lg:"50vh", md:"45vh"}}
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
