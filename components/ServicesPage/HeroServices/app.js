import { 
  Flex,
  Box,
  Text,
  Image,
  Button,
  VStack,
  Stack,
  Heading
} from "@chakra-ui/react";
import { useState } from "react";
import { slides } from "./_data";
import Slider from "react-slick";

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

  return (
    <Slider {...settings}>
      <Flex
        w="full"
        h={{ base: "85vh", sm: "90vh", lg: "75vh" }}
        alignItems="center"
        justifyContent="center"
        fontFamily="Aileron"
        color={slide.clor}
        bgImage = {slide.bground}
      >
        <Box fontFamily="Aileron" ml={{ lg:'100px' }} padding={{ base: "50px", md: "120px" }}>
          <Stack
            spacing={{ base: 1, sm: "0" }}
            direction={{ base: "column", md: "row" }}
          >
            <VStack
              align={{ base: "left", md: "left" }}
              spacing={10}
              w={{ base: "full", md: "50%" }}
            >
              <VStack align={{ base: "left", md: "left" }} spacing={0}>
              <Heading 
                    fontFamily="Aileron"
                    fontSize={{ base: "8vw", sm: "4vh", lg: "3vw" }}
                    minH={{ base: "20vh", sm: "20vh", lg: "30vh" }}
                  >
                    {slide.heading}
                  </Heading >
                <Text 
                  fontSize={{ base: "3vw", sm: "3vw", lg: "1.2vw" }}
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
                    width={{md:"9vw", sm:"30vw"}}
                    fontSize="2vw"
                    color="#000"
                    bgColor={"white"}
                    rounded={5}
                    onClick={() => window.open()}
                    mt="2vh"
                  >
                    {slide.button}
                  </Button>
                </VStack>
              </VStack>
            </VStack>
            <Box w={{ base: "full", md: "50%" }}>
            <Image
                boxSize={{ base: "full", sm: "auto" }}
                width={{ base: "100%", sm: "auto", lg: "100%" }}
                height={{ base: "auto", sm: "auto", lg: "100%" }}
                objectFit="contain"
                objectPosition="center"
                src={slide.img}
                alt="easeyourneeds"
              />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Slider>
  );
};
