import { List, Box, Heading, Text, VStack, Button, Container, ListItem } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Box
      bgImage={"/img/ads/bgprice.png"}
      bgSize={"cover"}
      py="10vh"
    >
      <Container maxW={{ base: '90vw', md: '90vw', lg: '80vw' }}>
        <VStack
          spacing={2}
          align="left"
          w={{ base: '90vw', lg: '60vw' }}
          p="2rem"
          textAlign="left"
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Heading as="h1" size="xl" fontWeight="bold" color="white" textAlign="left">
              PROMO JASA FOTO PRODUK PROFESSIONAL
            </Heading>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Heading
              pt="3rem"
              as="h2"
              fontSize={{ base: '2xl', lg: '2vw' }}
              fontWeight="bold"
              color="white"
              textAlign="left"
            >
              Harga Normal:
            </Heading>

            <Heading
              size={'2xl'}
              fontWeight="bold"
              color="white"
              textAlign="left"
              textDecoration="line-through"
              textDecorationColor="black"
            >
              Rp199.000
            </Heading>

            <Heading
              as="h2"
              size={'3xl'}
              fontWeight="bold"
              color="#FFD600"
              textAlign="left"
            >
              Rp99.000
            </Heading>
          </motion.div>

          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Heading
              pt="3rem"
              fontSize='3xl'
              fontWeight="semibold"
              fontStyle={"italic"}
              color="white"
              textAlign="left"
            >
              What’s Included?
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
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Box pt="2rem">
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
