import { Box, Image, Flex, useBreakpointValue, SlideFade } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer";

export function App () {
  const isMobileView = useBreakpointValue({ base: true, sm: true, lg: false });
  const [ref, inViewport1] = useInView({rootMargin: '-100px'});

  return (
    <Flex
      w="full"
      h={{base:"80vh", sm:"120vh"}}
      padding={{ lg:'100px', sm:'40px', base:'20px' }}
      bgColor={"white"}
      objectFit={'cover'}
    >
      <Box
        bg="white"
        w="full"
        h="full"
        position="relative"
      >
        <SlideFade in={inViewport1}>
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
        </SlideFade>
      </Box>
    </Flex>
  )
}
