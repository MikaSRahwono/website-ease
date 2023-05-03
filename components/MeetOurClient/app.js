import { Box, Heading, Text, Image, Flex, useBreakpointValue } from "@chakra-ui/react"

export function App () {
  const isMobileView = useBreakpointValue({ base: true, sm: true, lg: false });

  return (
    <Flex
      w="full"
      h={{base:"80vh", sm:"120vh"}}
      padding={{ lg:'100px', sm:'40px', base:'20px' }}
      objectFit={'cover'}
    >
      <Box
        bg="white"
        w="full"
        h="full"
        position="relative"
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
        />
      </Box>
    </Flex>
  )
}
