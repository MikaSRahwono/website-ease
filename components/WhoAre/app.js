import { Box, Text, Container, Stack, Image } from "@chakra-ui/react"
import { HeadingAbout } from "./heading"

export const App = (params) => {
    const type = params.type
    
    if(type == 'about'){
        return (
        <Box backgroundSize={"cover"} backgroundColor={'#f2f2f2'}>
            <Container maxW='70vw' color='black' pt={70} pb={1}>
                <HeadingAbout type={params.type}></HeadingAbout>
                <Box fontSize={'20px'} fontFamily="Aileron" textAlign="left" mt={10}>
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
    } else {
    return(
        
        <Box pt='10' backgroundSize={"cover"} bgColor='white'>
          <Container padding={{base: '10px', md:'90px'}} maxW='70vw' color='black'>
            <Stack
              direction={{ base: 'column-reverse', md: 'row' }}
              spacing={{ base: '10px', md: '10' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <Box
                fontSize={{ base: '10pxpx', md: '20px', sm: '14px' }}
                fontFamily="Aileron"
                textAlign={{ base: 'justify', md: 'justify' }}
              >
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
              <Image
                alt='easeyourneeds.co'
                boxSize={{ base: '100%', md: '50%', lg: '30%' }}
                src='img/summary.png'
                mb={{ base: '10px', md: '0' }}
                order={{ base: 0, md: 2 }}
              />
            </Stack>
          </Container>
        </Box>

        )
    }
} 