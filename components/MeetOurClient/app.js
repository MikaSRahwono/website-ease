import { Box, Image, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react"; // Import useEffect

export function App() {
  const isMobileView = useBreakpointValue({ base: true, sm: true, lg: false });
  const controls = useAnimation();
  const [ref, inViewport1] = useInView({ rootMargin: '-100px' });

  const variants = {
    hidden: { opacity: 0, x: isMobileView ? -50 : 0 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1, // Duration of the animation in seconds
  };

  useEffect(() => {
    // Check if the element is in the viewport and start animation
    if (inViewport1) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inViewport1, controls]);

  return (
    <Flex
      w="full"
      h={{ base: "80vh", sm: "120vh" }}
      padding={{ lg: '100px', sm: '40px', base: '20px' }}
      bgColor={"white"}
      objectFit={'cover'}
    >
      <Box
        bg="white"
        w="full"
        h="full"
        position="relative"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          exit="hidden"
          variants={variants}
          transition={transition}
        >
          <Image
            src={isMobileView ? "img/meetourclient/MeetOurClientPortrait.png" : "img/meetourclient/MeetOurClientLandscape.png"}
            objectFit="contain"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            w="full"
            h="full"
            alt={"easeyourneeds"}
            ref={ref}
          />
        </motion.div>
      </Box>
    </Flex>
  )
}
