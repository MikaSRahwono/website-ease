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
    dots: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Flex
          key={`slide-${index}`}
          w="full"
          h={{ base: "85vh", sm: "90vh", lg: "90vh", md:"100vh" }}
          alignItems="center"
          justifyContent="center"
          fontFamily="Aileron"
          color={slide.clor}
          bgImage={slide.bground}
        >
          <Box
            pt={{ base: '10vh !important', sm: "20vh !important" }}
            ml={{ base: '20px', sm: '0', lg: '100px' }}
            padding={{ base: "20px", md: "50px", lg: "20px" }}
          >
            <Stack
              spacing={{ base: 1, sm: "0" }}
              direction={{ base: "column", md: "column", lg:"row" }}
            >
              <VStack
                align="left"
                spacing={10}
                w={{ base: "full"}}
              >
                
                <VStack align="left" spacing={0}>
                  <Heading 
                    fontFamily="Aileron"
                    fontSize={{ base: slide.fontbase, sm: slide.fontsm, lg: slide.fontlg }}
                    fontWeight="extrabold"
                    minH={{ base: "15vh", sm: "10vh", lg: "30vh", md:"10vh" }}
                  >
                    {slide.heading}
                  </Heading >
                  <Text
                    fontSize={{ base: "4vw", sm: "3vw", md:'', lg: "1.5vw" }}
                    minH={{ base: "15vh", sm: "12vh", lg: "10vh" }}
                  >
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
                      width={{ base: "45vw", sm: "30vw", md: "25vw" }}
                      fontSize={{ base: "1px", sm: "20px", lg: "1px" }}
                      color="#000"
                      bgColor={"white"}
                      rounded={'full'}
                      onClick={() => window.open(slide.link)}
                      _hover={{ bgColor: '#DAC17E' }}
                      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
                      mt="2vh"
                    >
                      {slide.button}
                    </Button>
                  </VStack>
                </VStack>
              </VStack>
              <Box w={{ base: "full", md: "full" }}>
                <Image
                  boxSize={{ base: "full", sm: "auto" }}
                  width={{ base: "100%", sm:"auto", lg: "100%", md:"100%" }}
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
        ))}
      </Slider>
      );
    };
