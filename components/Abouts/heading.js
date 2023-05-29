import { Box, Heading, Center, Text, Container } from "@chakra-ui/react"

export const HeadingAbout = (params) => {
    const type = params.type
        return (
            <Box>
                <Heading fontWeight={'extrabold'} fontFamily={'Aileron'} textAlign={[ 'center' ]} as='h1' size='2xl' variant='page-title'>
                About Us
                </Heading>
            </Box>
        )
} 