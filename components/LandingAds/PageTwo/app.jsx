import { Box, Center, Heading, Image, ListItem, List, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Keuntungan() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Box py={{base: '5vh', md: '10vh'}} >
      <Center >
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
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
          <Heading
            fontFamily="Aileron"
            fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
            paddingBottom="2rem"
            textAlign={{base: 'left', md: 'left'}}
            ref={ref}
          > Apa yang berbeda dari Jasa Foto Produk di Ease Your Needs?
          </Heading>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
          <Text
              ref={ref2}
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu bingung konsep untuk foto produk harus kaya gimana?
            </Text>
            <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu gak punya waktu untuk foto produk?
            </Text>
            <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Apakah kamu gak punya peralatan yang memadai untuk foto produk?
            </Text>
            <Text
              pt="1rem"
              fontFamily="Aileron"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Adjust font size for different screens
              align={{ base: "left", md: "left" }}
            >
              Jika iya, kami siap bantu untuk menghasilkan foto produk dengan hasil yang professional dan estetik!
            </Text>
            </motion.div>
        </VStack>
      </Center>
    </Box>
  );
}
