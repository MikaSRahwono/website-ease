import { Box, Heading, Text, Image, Flex, useBreakpointValue } from "@chakra-ui/react"

export function App () {
  const isMobileView = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      w="full"
      h="120vh"
      padding={{ lg:'100px', sm:'40px' }}
      objectFit={'cover'}
    >
      <Box
        bg="white"
        w="full"
        h="full"
        bgImage={isMobileView ? "img/meetourclient/MeetOurClientPortrait.png" : "img/meetourclient/MeetOurClientLandscape.png"}
        bgSize="cover"
        bgPosition="center"
      />
    </Flex>
  )
}
