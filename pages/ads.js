import { Box } from "@chakra-ui/react";
import React from 'react';
import Hero from '../components/LandingAds/Hero/app';
import PageTwo from '../components/LandingAds/PageTwo/app';
import Keuntungan from '../components/LandingAds/Keuntungan/app';
import ApaYangBerbeda from '../components/LandingAds/ApaYangBerbeda/app';
import Harga from  '../components/LandingAds/Harga/app';
import { App as MeetOurClient } from "@/components/MeetOurClient/app"

const Ads = () => {

  return (
    <Box color="black" background="#f2f2f2" minHeight="100vh">
      <Hero />
      <PageTwo />
      <Keuntungan />
      <ApaYangBerbeda />
      <Harga />
      <MeetOurClient />
    </Box>
  );
};

export default Ads;
