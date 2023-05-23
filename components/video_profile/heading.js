import { Box, Heading, Center, Text, Container } from "@chakra-ui/react"

export const HeadingVidprof = (params) => {
    const type = params.type
    if(type == 'about'){
        return (
            <Center>
                <Heading color={'#DAC17E'} fontWeight={'extrabold'} fontFamily='Aileron' size='2xl'>Our Company Profile</Heading>
            </Center>
        )
    }
    else {
        return (
            <Box>
                <Heading textAlign={[ 'left' ]} as='h1' size='2xl' variant='page-title'>
                Hi, Welcome to
                </Heading>
                <Heading textAlign={[ 'left' ]} as='h1' size='2xl' variant='page-title'>
                Ease your Needs!
                </Heading>
            </Box>
        )
    }
} 