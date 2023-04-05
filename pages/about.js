import React from 'react';
import { Box, Container } from "@chakra-ui/react"
import { App as Hero } from "@/components/Hero/app"
import { slides } from "@/components/Hero/slides/_dataAbout"
import { App as VideoProfile} from "@/components/video_profile/app"
import { App as Abouts } from "@/components/Abouts/app"
import { App as WhoAre } from "@/components/WhoAre/app"
import { App as WhatWe } from "@/components/WhatWe/app"
import { App as History } from "@/components/History/app"
import { App as OurValues } from "@/components/OurValues/app"
import { App as Misvis} from "@/components/misvis/app"
import { App as Teams } from "@/components/teams/app"

export default function About() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHeight = 1;
  const heroHeight = 500;

  return (
    <Box position="relative" color="black" background="#f2f2f2" minHeight="100vh">
      <Box position="fixed" top={0} left={0} right={0} height={navbarHeight} zIndex={10} background="#ffffff">
        {/* Add Navbar component here */}
      </Box>
      <Box position="fixed" top={navbarHeight} left={0} right={0} height={heroHeight} opacity={1 - scrollPosition / heroHeight} zIndex={0}>
        <Hero slides={slides}></Hero>
      </Box>
      <Box mt={heroHeight - navbarHeight} width="100%">
        {/* About Us */}
        <Abouts></Abouts>

        {/* Video Profile */}
        <VideoProfile type="about"></VideoProfile>

        {/* Who Are We? */}
        <WhoAre type="about"></WhoAre>

        {/* What We Do? */}
        <WhatWe></WhatWe>

        {/* Our History */}
        <History></History>

        {/* Our Values */}
        <OurValues></OurValues>

        <Container maxW='70vw' pb='9vh'>
          <Box mt={50} width='70vw'>
            <Box>
            <Misvis></Misvis>
            </Box>
          </Box>
        </Container>
        <Teams></Teams>
        

      </Box>
    </Box>
  );
}
