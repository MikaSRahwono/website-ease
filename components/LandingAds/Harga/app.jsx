import { Box, Center, Heading, Image, ListItem, List, Text, VStack, Button, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Harga() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Box bgImage={"/img/ads/bgprice.png"} bgSize={"cover"} py='10vh' >

        <Container minW={{md: '90vw', lg: '80vw'}}>
          <VStack
            spacing={4}
            align="left"
            w={{ base: '90vw', lg: '60vw'}}
            p="2rem"
            textAlign="left"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
            <Heading ref={ref} as="h1" size="xl" fontWeight="bold" color="white" textAlign="left">
            PROMO JASA FOTO PRODUK PROFESSIONAL
              </Heading>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            <Heading ref={ref2} pt="3rem" as="h2" fontSize={{base: '2xl',lg: '2vw'}} fontWeight="bold" color="white" textAlign="left">
                Harga Normal: 
            </Heading>

            <Heading size={'2xl'} fontWeight="bold" color="white" textAlign="left" textDecoration="line-through" textDecorationColor="black">
            Rp199.000
            </Heading>

            <Heading as="h2" size={'3xl'} fontWeight="bold" color="#FFD600" textAlign="left">
            Rp99.000
            </Heading>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >

            <Heading ref={ref3} pt="3rem"  fontSize='3xl' fontWeight="semibold" fontStyle={"italic"} color="white" textAlign="left">
            What’s Include?
            </Heading>

            <List pl="4rem" color="white" listStyleType="disc" fontWeight={"semibold"} fontSize={'3xl'} >
                <ListItem>
                    <Text fontSize={'xl'} color="white">Konsep Foto Produk</Text>
                </ListItem>
                <ListItem>
                    <Text fontSize={'xl'} color="white">Produksi dan Editing</Text>
                </ListItem>
                <ListItem>
                    <Text fontSize={'xl'} color="white">File dikirimkan dalam bentuk softcopy di google drive</Text>
                </ListItem>
            </List>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
            <Box ref={ref4} pt="2rem">
            <Button
                colorScheme="white"
                color="black"
                minH="6vh"
                borderRadius='5vw'
                bg="white"
                boxShadow="lg"
                _hover={{ boxShadow: "lg", bg: "#DAC17E" }}
                fontSize={"xl"}
                >
            Pesan Sekarang!
            </Button>
            </Box>
            </motion.div>



          </VStack>
        </Container>
    </Box>
  );
}
