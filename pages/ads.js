import { Box } from "@chakra-ui/react";
import React from 'react';
import Hero from '../components/LandingAds/Hero/app';
import PageTwo from '../components/LandingAds/PageTwo/app';
import Keuntungan from '../components/LandingAds/Keuntungan/app';
import ApaYangBerbeda from '../components/LandingAds/ApaYangBerbeda/app';
import Harga from  '../components/LandingAds/Harga/app';
import { App as MeetOurClient } from "@/components/MeetOurClient/app"
import Portofolio from "@/components/LandingAds/Portofolio/app";

const Ads = () => {

  return (
    <Box color="black" background="#f2f2f2" minHeight="100vh">
      <Hero />
      <Box 
        bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2FBackground%20kombi%202_rev%201.png?alt=media&token=0e72a0e4-23b2-49f6-837b-610fc8b60c97"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        position="relative"
        backgroundPosition="center bottom"     
        >
          <PageTwo />
          <Keuntungan />
          <Portofolio/>
          <ApaYangBerbeda />
        </Box>
      <Harga />
      <MeetOurClient />
    </Box>
  );
};

export default Ads;
