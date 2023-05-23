import { Box, Heading, Center, Text, Container } from "@chakra-ui/react"

export const HeadingAbout = (params) => {
    const type = params.type
    if(type == 'about'){
        return (
            <Heading alignItems={'left'} fontFamily={'Aileron'} fontWeight={'extrabold'} size='2xl'>Who are we?</Heading>
        )
    }
    else {
        return (
            <Box>
                <Heading textAlign={[ 'center' ]} as='h1' size='2xl' variant='page-title'>
                Who are we?
                </Heading>
            </Box>
        )
    }
} 