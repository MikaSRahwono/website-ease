import { Box } from "@chakra-ui/react";
import React from 'react';
import Hero from '../components/LandingAds2/Hero/app';
import PageTwo from '../components/LandingAds2/PageTwo/app';
import Keuntungan from '../components/LandingAds2/Keuntungan/app';
import ApaYangBerbeda from '../components/LandingAds2/ApaYangBerbeda/app';
import Harga from  '../components/LandingAds2/Harga/app';
import { App as MeetOurClient } from "@/components/MeetOurClient/app"
import WhatIs from "@/components/LandingAds2/What/app";
import ApaSaja from "@/components/LandingAds2/ApaSaja/apa";
import SimakVideo from "@/components/LandingAds2/SimakVideo/app";

const Ads = () => {

  return (
    <Box color="black" background="#f2f2f2" minHeight="100vh">
      <Hero />
      <WhatIs />
      <Keuntungan />
      <ApaSaja/>
      <SimakVideo/>
      <ApaYangBerbeda />
      <Harga />
      <MeetOurClient />
    </Box>
  );
};

export default Ads;
