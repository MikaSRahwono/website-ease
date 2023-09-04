import { Box, Center, Heading, Image, ListItem, List, Text, VStack, HStack } from "@chakra-ui/react";
import { berbedas } from "./_data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Keuntungan() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Box py={{base: '5vh', md: '10vh'}} >
      <Center>
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
          <Heading
            fontFamily="Aileron"
            fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
            paddingBottom="2rem"
            textAlign={{base: 'center', md: 'left'}}
            ref={ref}
          > Apa yang berbeda dari Jasa Foto Produk di Ease Your Needs?
          </Heading>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
          <List ref={ref2}>
            {berbedas.map((berbeda, index) => (
              <ListItem key={`berbeda-${index}`} display="flex" alignItems="flex-start" fontWeight="medium" pt={{base: '3vh', md: 0}}>
                <HStack>
                  <Image w={{base: '10vw', md: '7vw',lg: '5vw'}} mr="5" mt="1" alt="easeyourneeds" src={berbeda.icon} />
                  <Text sx={{ letterSpacing: "1px" }} fontSize={{ base: '5vw', md: 'lg', lg:'2xl' }} fontWeight={{base: 'normal',md: "semibold"}} as="span" display="inline-block">
                    {berbeda.name}
                  </Text>
                </HStack>
              </ListItem>
            ))}
          </List>
          </motion.div>
        </VStack>
      </Center>
    </Box>
  );
}
