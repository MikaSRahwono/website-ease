import { 
  Flex,
  Box,
  Text,
  Image,
  Button,
  VStack,
  Stack,
  Heading,
  SlideFade
} from "@chakra-ui/react";
import { use, useRef, useState } from "react";
import { slides } from "./_data";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";

export const App = ({hero}) => {
  var slide = {}
  if (hero == 0){
    slide = slides[0]
  } else if (hero == 1){
    slide = slides[1]
  } else {
    slide = slides[2]
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots:true, 
  };
  const [ref, inViewport] = useInView({rootMargin: '-150px'});


  return (
    <Slider {...settings}>
      <Flex
        w="full"
        h={{ base: "85vh", sm: "90vh", md:'60vh', lg: "70vh" }}
        alignItems="center"
        justifyContent="center"
        fontFamily="Aileron"
        color={slide.clor}
        bgImage = {slide.bground}
      >
        <SlideFade in={useInView}>
          <Box ref={ref} fontFamily="Aileron" pl={{ base: "50px", md: '10vw', lg: "9vw" }} pr={{ base: "50px", md: '0', lg: "5vw" }} pt={{base:'15vh', md: '12vh', lg: '14vh'}}>
            <Stack
              spacing={{ base: 1, sm: "0" }}
              direction={{ base: "column", md: "row" }}
            >
              <VStack
                align={{ base: "left", md: "center" }}
                spacing={10}
                w={{ base: "full", md: "50%" }}
              >
                <VStack align={{ base: "left", md: "left" }} mt={{md: '3.5vh', lg: '5vh'}} spacing={0}>
                    <Heading 
                      
                      fontFamily="Aileron"
                      fontSize={{ base: "6vw", sm: "4vh", md: '3vw', lg: "3vw" }}
                      minH={{ base: "18vh", sm: "15vh", md: '13vh',lg: "18vh" }}
                    >
                      {slide.heading}
                    </Heading >  
                  <Text 
                    fontSize={{ base: "3.5vw", sm: "3vw", md: '1.7vw', lg: "1.5vw" }}
                    minH={{ sm: "12vh", lg: "10vh" }}>
                    {slide.subheading1}
                  </Text>
                  <VStack
                    mt={{ base: "4px", md: "0px" }}
                    align="left"
                    spacing={0}
                  >
                    <Button
                      size={{ base: "sm", md: "md", lg: "lg" }}
                      height={{ base: "3vh", md: "5vh", lg: "7vh" }}
                      width={{md: '20vw',lg:"9vw", sm:"30vw"}}
                      fontSize="2vw"
                      color="#000"
                      bgColor={"white"}
                      rounded={{base: '12',lg: '5', md: '20'}}
                      onClick={() => window.open()}
                      mt="2vh"
                    >
                      {slide.button}
                    </Button>
                  </VStack>
                </VStack>
              </VStack>
              <Box w={{ base: "full", md: '55vw', lg: "55vw" }}>
              <Image
                  boxSize={{ base: "full", sm: "auto" }}
                  width={{ base: "100%", sm: "auto", md:'55vw', lg: "55vw" }}
                  objectFit="contain"
                  objectPosition="center"
                  src={slide.img}
                  alt="easeyourneeds"
                />
              </Box>
            </Stack>
          </Box>
        </SlideFade>
      </Flex>
    </Slider>
  );
};
