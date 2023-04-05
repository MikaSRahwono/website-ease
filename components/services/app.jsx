import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './durationSwitcher'
import { ServicesCard } from './servicesCard'

export const App = () => {
  return (
    <Box as="section" py="20">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          textAlign={{
            sm: 'center',
          }}
          color="#DAC17E"
          
        >
          Our Services
        </Heading>
        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontSize="xl"
          fontFamily={'Montserrat'}
          color={'white'}
          textAlign={{
            sm: 'center',
          }}
        >
          We help you to visualize your uniqueness and identity to the community by product photography and videography for any commercial needs. We also help you broadcast your event/campaign to the world by providing Zoom Pro renting along with Live Streaming services. 
        </Text>
        <SimpleGrid
          alignItems="flex-start"
          mt={{
            base: '10',
            lg: '24',
          }}
          columns={{
            base: 1,
            lg: 3,
          }}
          spacing={{
            base: '12',
            lg: '8',
          }}
        >
          <ServicesCard
            img="img/iconservice/livelogo.png"
            name="Creative"
            description1 = "Helping you to stream your events using advanced equipment and our best crews."
            Onlink={'/services/creative'}
          />
          <ServicesCard
            img="img/iconservice/studiologo.png"
            name="Studio"
            description1 = "Maximizing your visual and media to enhance your brand identity with us. We help you to create creative product photography, videography, and campaigns."
            Onlink={'/services/studio'}
          />
          <ServicesCard
            img="img/iconservice/zoomlogo.png"
            name="Zoom"
            description1 = "Renting Zoom Pro and Zoom Webinar for everyone. Now, scheduling your zoom meeting is easier with us."
            Onlink={'/services/zoom'}
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}
