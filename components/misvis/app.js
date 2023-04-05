import { Box, Heading, Text } from "@chakra-ui/react"

export const App = () => {
    return (
        <Box fontFamily={'Montserrat'} mb={40}>
            <Heading >Vision</Heading>
            <Text mr={60}>Lorem ipsum dolor sit amet. Aenean gravida. Ut hendrerit hendrerit ornare. Curabitur in in tortor. felis nulla, egestas sodales sem bibendum, dapibus vehicula diam. Donec pretium consectetur ante sed sagittis. Torquent per conubia nostra, per inceptos himenaeos.</Text>
            <Heading float='right' mt={10} >Mission</Heading>
            <Text ml={60} float='right' textAlign='right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula diam. Donec pretium consectetur ante sed sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
        </Box>
    )
}