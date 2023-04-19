import { 
  Flex,
  Box,
  Text,
  Image,
  Button,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { arrowStyles } from "./arrowStyles";
import { slides } from "./_data";
import Slider from "react-slick";

export const App = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Flex
          key={`slide-${index}`}
          w="full"
          h={{lg:"75vh", sm:"80vh"}}
          alignItems="center"
          justifyContent="center"
          bgColor={slide.color || "#5EA698"}
        >
          <Box fontFamily="Montserrat" ml={{ lg:'100px' }} padding={{ base: "50px", md: "120px" }}>
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
                  <Text
                    pt={{ lg: "0px", sm: "0px" }}
                    fontSize={{ base: "10vw", sm: "4vh", lg: "3vw" }}
                    fontWeight="bold"
                  >
                    {slide.heading}
                  </Text>
                  <Text fontSize={{ base: "3vw", sm: "3vw", lg: "1.2vw" }}>
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
                <Image size={{ sm: "1" }} src={slide.img} alt="easeyourneeds" />
              </Box>
            </Stack>
          </Box>
        </Flex>
      ))}
    </Slider>
  );
};
