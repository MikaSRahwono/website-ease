import { useState } from "react";
import { 
    Flex,
    Box,
    Text,
    Image,
    HStack,
    Stack,
    Button,
    VStack
 } from "@chakra-ui/react";
import { arrowStyles } from "./arrowStyles";

export const App = (props) => {
    const slides = props.slides
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
    const Onlink = slides.Onlink;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
  
    const setSlide = (slide) => {
      setCurrentSlide(slide);
    };
  
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };

    let arrow;
    if (slidesCount == 1) {
      arrow = <Box></Box>
    }
    else {
      arrow = 
      <Box>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
        </Text>
      </Box>
    }
    return (
      <Flex
        w="full"
        h="100vh"
        bg="#edf3f8"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" pos="relative" overflow="hidden">
          <Flex h="100vh" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                  objectFit="cover"
                />
                <Stack
                  pos="absolute"
                  ml="12vw"
                  bottom="25vh"
                  textAlign="left"
                  w="70vw"
                  mb="8"
                  color="white"
                  spacing={0}
                >
                  <Text fontFamily="Glacial Indifference" fontSize="6vw" fontWeight="bold" as='u'>{slide.label}</Text>
                  <HStack spacing='3vw'>
                    <VStack align='left' spacing={0}>
                      <Text fontFamily="Montserrat" fontSize="xl" >{slide.subheading1}</Text>
                      <Text fontFamily="Montserrat" fontSize="xl" >{slide.subheading2}</Text>
                    </VStack>
                    <Button
                    onClick={() => window.open(Onlink)}
                    >Learn More...</Button>
                  </HStack>
                </Stack>
              </Box>
            ))}
          </Flex>
          {arrow}
          <HStack justify="left" pos="absolute" bottom={10} left={20} w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    );
  };
  