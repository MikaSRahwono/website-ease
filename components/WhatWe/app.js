import { Box, Center, Text, Container } from "@chakra-ui/react"
import { HeadingWhatWe } from "./heading"

export const App = (params) => {
    const type = params.type
    
    return(
        <Box backgroundSize={"cover"} backgroundColor="#f2f2f2">
            <Container maxW='70vw' color='black' pt={10} pb={70}>
                <HeadingWhatWe textAlign='right' type={params.type}></HeadingWhatWe>
                <Box fontSize={'20px'} fontFamily="Montserrat" textAlign="right" mt={10}>
                    We help you to visualize your uniqueness and identity to the community by product 
                    photography and videography for any commercial needs. We also help you broadcast your 
                    event/campaign to the world by providing Zoom Pro renting along with Live Streaming services.
                </Box>
            </Container>
        </Box>
        )
} 