import React, { useState, useRef } from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Button,
  Container,
  Center,
  Flex,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const App = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const CustomArrow = ({ direction, onClick }) => {
    return (
      <Box
        as="button"
        onClick={onClick}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="transparent"
        border="none"
        outline="none"
        cursor="pointer"
        left={direction === "left" ? { base: "-70px", md: "-20px", sm: "-12px" } : ""}
        right={direction === "right" ? { base: "-70px", md: "-20px", sm: "-12px" } : ""}
      >
        {direction === "left" ? (
          <ChevronLeftIcon boxSize={6} color={"white"} bgColor={"#000"} borderRadius={"full"} />
        ) : (
          <ChevronRightIcon boxSize={6} color={"white"} bgColor={"#000"} borderRadius={"full"} />
        )}
      </Box>
    );
  };

  const settings = {
    initialSlide: sliderIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    beforeChange: (current, next) => setSliderIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderContent = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Ficonservice%2Fzoomlogo1.png?alt=media&token=5b74959e-949a-49c7-b748-deec8f0f2a9c",
      title: "Zoom",
      description: "Renting Zoom Pro and Zoom Webinar for everyone. Now, scheduling your zoom meeting is easier with us.",
      link: "/services/zoom",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Ficonservice%2Fstudiologo1.png?alt=media&token=430875f5-c835-471e-b9a2-9c3d93897c97",
      title: "Studio",
      description:
        "Maximizing your visual and media to enhance your brand identity with us. We help you to create creative product photography, videography, and campaigns.",
      link: "/services/studio",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Ficonservice%2Flivelogo1.png?alt=media&token=b8b0d463-5392-4b7d-9e55-883d48e38e22",
      title: "Creative",
      description: "Helping you stream your events using advanced equipment and our best crews.",
      link: "/services/creative",
    },
  ];

  const handleClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Box fontFamily={"Aileron"} color="#000" bgColor="white">
      <Center>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading
            pb={{ base: "10", sm: "10" }}
            textAlign={"center"}
            fontSize={{ base: "3vh", lg: "2vw", sm: "3vh" }}
            fontWeight="extrabold"
            mt={{ base: 5, sm: 10, lg: 16 }}
            mb={5}
            ref={ref}
          >
            OUR SERVICES
          </Heading>
        </motion.div>
      </Center>
      <Center>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <HStack mb={{ base: "20px", sm: "30px" }} spacing={{ base: 6, sm: 10 }} mt={2} ref={ref2}>
            <Button
              boxShadow={sliderIndex === 0 ? "md" : "xs"}
              fontSize={{ base: "sm", sm: "md" }}
              bgColor={sliderIndex === 0 ? "#DAC17E" : "#f2f2f2"}
              borderRadius={50}
              onClick={() => handleClick(0)}
            >
              Zoom
            </Button>
            <Button
              boxShadow={sliderIndex === 1 ? "md" : "xs"}
              fontSize={{ base: "sm", sm: "md" }}
              bgColor={sliderIndex === 1 ? "#DAC17E" : "#f2f2f2"}
              borderRadius={50}
              onClick={() => handleClick(1)}
            >
              Studio
            </Button>
            <Button
              boxShadow={sliderIndex === 2 ? "md" : "xs"}
              fontSize={{ base: "sm", sm: "md" }}
              bgColor={sliderIndex === 2 ? "#DAC17E" : "#f2f2f2"}
              borderRadius={50}
              onClick={() => handleClick(2)}
            >
              Creative
            </Button>
          </HStack>
        </motion.div>
      </Center>
      <Center>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Container maxW={{ base: "sm", lg: "60vw", sm: "100vw" }} ref={ref3}>
            <Box
              rounded={50}
              boxShadow="lg"
              backgroundImage="url(https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FBackground%201.png?alt=media&token=7b347cc5-f193-468f-81d1-f92e77e07d70)"
              maxW="full"
              py={2}
              px={{ base: "10", lg: "2vw", sm: "10" }}
            >
              <Slider {...settings} ref={sliderRef}>
                {sliderContent.map((slide, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    key={index}
                  >
                    <VStack alignItems="stretch" spacing={4}>
                      <Flex direction={{ base: "column", lg: "row", sm: "column" }} spacing={4}>
                        <Image
                          boxSize="sm"
                          src={slide.image}
                          alt={slide.title}
                          borderRadius="md"
                          w={{ base: "100%", lg: "40%", sm: "100%" }}
                          h="auto"
                          objectFit="cover"
                          order={{ base: -1, lg: 0, sm: -1 }}
                        />
                        <VStack pt={{ base: "1vh", lg: "10vh", sm: "1vh" }} alignItems="start" spacing={2}>
                          <Box height={{ base: "2em", lg: "3em", sm: "2em" }}>
                            <Heading as="h3" size="lg">
                              {slide.title}
                            </Heading>
                          </Box>
                          <Box pb={{ base: "18vh", lg: "10vh", sm: "10vh" }} height={{ base: "6em", lg: "4em" }}>
                            <Text fontSize={{ lg: "1vw" }} fontWeight={"regular"}>
                              {slide.description}
                            </Text>
                          </Box>
                          <Box pb={{ base: "2vh", lg: "10vh", sm: "10vh" }}>
                            <Button onClick={() => window.open(slide.link)} bgColor="white">
                              Learn More
                            </Button>
                          </Box>
                        </VStack>
                      </Flex>
                    </VStack>
                  </motion.div>
                ))}
              </Slider>
            </Box>
          </Container>
        </motion.div>
      </Center>
    </Box>
  );
};
