import { Box, Container, Divider, HStack, Heading, Text } from "@chakra-ui/react"
export const App = (props) => {
    return (
    <Box>
        <Box h='60vh' bgImage='/img/aboutus/vteam.jpg' bgSize='cover'></Box>
        <Container maxW='80vw' minW='80vw' pt='15vh'>
            <HStack alignItems='initial'>
                <Box w='150vw'>
                    <Divider mb='2vh' w='40%' alignItems='center' size='1vh' borderColor='black' variant='solid' orientation='horizontal'></Divider>
                    <Heading fontSize='6xl'>Our Story</Heading>
                    <Text mt='2vh' fontSize='2xl'>Why we started it?</Text>
                </Box>
                <Box fontSize='md' textAlign='justify'>
                    <Text mb='4vh'>
                    Ease Your Needs was established on September, 7th 2020, initiated by Our Founder, Nanda Najmi. Nanda first identified a problem among college students during Pandemic COVID-19, where they need to use a Zoom Pro for only 2 - 3 days on their event but still need to pay monthly for the Zoom subscription which is certainly not cost-efficient for students. Hence, Nanda initiated a service to rent Zoom Pro available hourly and daily to help students save their budget. After being affected by COVID-19, Zoom Pro keeps becoming more popular, and people use online meeting platforms to keep connected with their relatives, colleagues, and families. Since then, Ease Your Needs were present to answer all the urgent needs for communication.                    </Text>
                    <Text mb='4vh'>
                    Not only Zoom Pro renting services, but we provide services to our customers, where they can ask anything related to operating Zoom, so they don’t need to worry about the meeting because our team is ready 24/7 and shall assist with all the customers’ questions. Moreover, we also facilitate customers with our operator services to assist inside the meeting room and make your video conference obstacle-free.                     </Text>
                    <Text >
                    Through our excellent services which result in mouth-to-mouth marketing and loyal customers, our customers grew from zero to 40.000 customers in almost 3 years. In response to the increasing demand, now we also provide other services that are Live Streaming and Product Photography & Videography services.
                    </Text>
                </Box>
            </HStack>
        </Container>
    </Box>
    )
}