import { Box, Container, Text, Heading, Center, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Hero() {

  const animationVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      bgImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fcover2.PNG?alt=media&token=9bbae241-ad01-4e8b-b7d3-421f50d10dde)"
      bgPos='center'
      bgSize={{sm: 'cover', lg: 'contain'}}
      >
        <Center>
          <Box
            h="60vh"
            bgSize="cover"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
            />

            <Stack
              spacing={4}
              align="center"
              justify="center"
              w={{ base: '90vw', lg: '60vw'}}
              h={{ base: '20vh'}}
              p="2rem"
              position="absolute"
              top={{base: "60%", md: "50%"}}
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="1"
              textAlign={'center'}
            >
              <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "xl", md: "3xl", lg: "3xl" }}
              >
                JASA LIVE STREAMING EVENTS
              </Heading>
              </motion.div>

              <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Heading
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
              >
                Live Streaming Apapun Acara-nya kini jadi lebih mudah!         
                 </Heading>
              <Text
                fontFamily="Aileron"
                fontSize={{ base: "3xl", md: "5xl", lg: "xl" }}
                align="center"
              >
              </Text>
              </motion.div>
            </Stack>
          </Box>
        </Center>
    </Box>
  );
}
