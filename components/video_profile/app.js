import { Box, Center, Text, Container } from "@chakra-ui/react"
import { HeadingVidprof } from "./heading"

export const App = (params) => {
    return(
        <Box backgroundSize={"cover"} backgroundImage='img/blackcreative.png'>
            <Container maxW='70vw' color='#f2f2f2' pt={70} pb={70}>
                <HeadingVidprof type={params.type}></HeadingVidprof>
                <Center>
                <Box
                    width='50vw'
                    as='video'
                    controls
                    src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
                    poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
                    alt='Big Buck Bunny'
                    objectFit='contain'
                    sx={{
                    aspectRatio: '16/9'
                    }}
                    mt={45}
                    borderRadius={25}
                    boxShadow='10px 10px 10px 2px rgba(0, 0, 0, 0.2)'
                />
                </Center>
                <Box fontSize={'20px'} fontFamily="Aileron" textAlign="center" mt={10}>
                    <Text as="span" fontWeight="bold">
                        EASE YOUR NEEDS
                    </Text>{' '}
                    is a creative agency based in Jakarta, Indonesia. Started in September 2020
                    when pandemic hits, our first service is providing zoom rental for everyone.
                    During that time, we already have more than 40.000 loyal customers from
                    several big companies. As the time goes, now we are expanding other digital
                    services such as Live Streaming Services for your offline events and providing
                    creative product photography & videography for brands. We are a group of
                    creative and agile people and ready to maximize your events and brands’
                    potentials to the fullest.
                </Box>

            </Container>
        </Box>
    )
} 