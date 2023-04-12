import { Box, Container, Divider, HStack, Heading, Text } from "@chakra-ui/react"
export const App = (props) => {
    return (
    <Box>
        <Box h='50vh' bgColor='teal'></Box>
        <Container maxW='80vw' minW='80vw' pt='15vh'>
            <HStack alignItems='initial'>
                <Box w='150vw'>
                    <Divider mb='2vh' w='40%' alignItems='center' size='1vh' borderColor='black' variant='solid' orientation='horizontal'></Divider>
                    <Heading fontSize='5xl'>Our Story</Heading>
                    <Text mt='2vh'>Why we started it?</Text>
                </Box>
                <Box fontSize='sm' textAlign='justify'>
                    <Text mb='4vh'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum augue ac fermentum tristique. Quisque et ullamcorper enim. Sed ac semper tortor. Morbi ultricies malesuada felis sit amet accumsan. Fusce non diam consectetur, convallis nibh eu, aliquet dolor. Ut rutrum porttitor enim, elementum molestie ex maximus in. Curabitur pretium est nec rutrum rutrum. Ut in aliquet erat. Etiam pulvinar, ex sed accumsan hendrerit, velit felis pretium ligula, eget molestie est nulla eget velit.
                    </Text>
                    <Text>
                    Suspendisse potenti. Maecenas aliquam magna non vestibulum viverra. Vestibulum imperdiet hendrerit ex eu elementum. Suspendisse nulla odio, mollis vitae urna quis, pulvinar fermentum neque. Sed a magna gravida, facilisis nulla quis, pulvinar lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ullamcorper tortor. In et interdum nunc, ac sollicitudin velit. Nulla sagittis viverra nibh sit amet vulputate. Maecenas tempor consectetur pulvinar. Duis non velit id nibh aliquet rutrum. Duis ornare iaculis rutrum. Donec tempor nisi dolor, eu pharetra dui pretium id. Etiam sit amet augue placerat sem mattis sollicitudin eu nec neque.
                    </Text>
                </Box>
            </HStack>
        </Container>
    </Box>
    )
}