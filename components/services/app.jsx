import { Box, Grid, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { ServicesCard } from './servicesCard';

export const App = () => {
  return (
    <Box fontFamily="Aileron" as="section" py="20">
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
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            xl: 'repeat(3, 1fr)',
          }}
          gap={{ base: '6', md: '8', xl: '12' }}
        >
          <ServicesCard pt="7vh"
            img="img/iconservice/livelogo.png"
            name="Creative"
            description1="Helping you to stream your events using advanced equipment and our best crews."
            Onlink={'/services/creative'}
          />
          <ServicesCard
            img="img/iconservice/studiologo.png"
            name="Studio"
            description1="Maximizing your visual and media to enhance your brand identity with us. We help you to create creative product photography, videography, and campaigns."
            Onlink={'/services/studio'}
          />
          <ServicesCard pt="5vh"
            img="img/iconservice/zoomlogo.png"
            name="Zoom Rental"
            description1="Renting Zoom Pro and Zoom Webinar for everyone. Now, scheduling your zoom meeting is easier with us."
            Onlink={'/services/zoom'}
          />
        </Grid>
      </Box>
    </Box>
  );
};
